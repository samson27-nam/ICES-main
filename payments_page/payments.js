    // Cart data
   /* const cartData = [
    {
        id: '1',
        name: 'Semester 1 Membership Fee',
        description: 'Academic Year 2026',
        priceTambala: 300000,
        selected: true
    },
    {
        id: '2',
        name: 'Workshop: Career Development',
        description: 'Wed, Mar 4, 2026 at 2:00 PM',
        priceTambala: 100000,
        selected: false
    },
    {
        id: '3',
        name: 'Annual Gala Dinner',
        description: 'Fri, May 1, 2026 at 7:00 PM',
        priceTambala: 2000000,
        selected: false
    }
    ]; */

    let cartData = [];
    let paymentMethod = 'airtel_money';
    let isProcessing = false;

    //load cart data from events.json
    async function loadCartData() {
        try {
            const response = await fetch('../events.json'); 
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            cartData = data.map(event => ({
                id: event.id,
                name: event.title,
                description: event.date,
                priceTambala: event.regFeeTambala,
                selected: false
            }));
            renderCartItems();
            updateTotals();
        } catch (error) {
            console.error("Failed to load events data:", error);
        }
    }

    // Render cart items
    function renderCartItems() {
        const container = document.getElementById('cart-items');
        if (!container) return;
        container.innerHTML = '';

        cartData.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = `cart-item ${item.selected ? 'selected' : ''}`;
            itemElement.innerHTML = `
                <div class="flex items-center h-5 mt-0.5">
                    <input type="checkbox" ${item.selected ? 'checked' : ''} class="h-4 w-4 cart-item-checkbox" data-index="${index}">
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-gray-900 font-medium">${item.name}</p>
                    <p class="text-gray-600 text-sm">${item.description}</p>
                </div>
                <p class="text-gray-900 font-medium whitespace-nowrap">MWK ${(item.priceTambala / 100).toFixed(2)}</p>
            `;

            // Add event listener to checkbox
            const checkbox = itemElement.querySelector('.cart-item-checkbox');
            checkbox.addEventListener('change', (e) => {
                e.stopPropagation();
                cartData[index].selected = e.target.checked;
                renderCartItems();
                updateTotals();
            });

            // Add click listener to item
            itemElement.addEventListener('click', () => {
                cartData[index].selected = !cartData[index].selected;
                renderCartItems();
                updateTotals();
            });

            container.appendChild(itemElement);
        });
    }

    // Update totals
    function updateTotals() {
        const selectedItems = cartData.filter(item => item.selected); //returns selected items

        let totalTambala = 0;
        selectedItems.forEach((item) => {
            totalTambala += item.priceTambala;
        })

        document.getElementById('total').textContent = `MWK ${(totalTambala/100).toFixed(2)}`;
        document.getElementById('submit-btn').textContent = isProcessing ? 'Processing...' : `Pay MWK ${(totalTambala/100).toFixed(2)}`;

        // Update button state
        const submitBtn = document.getElementById('submit-btn');
        submitBtn.disabled = selectedItems.length === 0 || paymentMethod === 'wallet' || isProcessing;
    }

    // Payment method selection
    document.querySelectorAll('.payment-method').forEach(method => {
        method.addEventListener('click', function() {
        document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
        this.classList.add('selected');
        this.querySelector('input[type="radio"]').checked = true;

        paymentMethod = this.dataset.method;
        // console.log(this.dataset.method);

        // Toggle form sections
        const mobileMoneyDetails = document.getElementById('airtel-tnm-details');
        const bankInfo = document.getElementById('bank-info');


        if (paymentMethod === 'airtel_money' || paymentMethod === 'mpamba') {
            mobileMoneyDetails.classList.remove('hidden');
            bankInfo.classList.add('hidden');
        } else if(paymentMethod === 'national_bank'){
            mobileMoneyDetails.classList.add('hidden');
            bankInfo.classList.remove('hidden');
        }

        updateTotals();
    });
});

    // Form submission
    document.getElementById('payment-form').addEventListener('submit', async function(e) {
        e.preventDefault();

        if (paymentMethod === 'wallet') return;

        isProcessing = true;
        updateTotals();

        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000));

        isProcessing = false;
        updateTotals();

        // Show success toast
        const toast = document.getElementById('toast');
        if (toast) {
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 4000);
        }

        // Reset form
        this.reset();
    });

    // Initialize
    loadCartData();
