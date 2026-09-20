const products = [
  {
    id: 1,
    name: 'AirPods Pro',
    category: 'Wearables',
    oldPrice: 249,
    price: 199,
    rating: 4.9,
    reviews: 180,
    icon: '🎧',
    accent: '#f59e0b',
    badge: 'New',
  },
  {
    id: 2,
    name: 'Smart Watch X9',
    category: 'Wearables',
    oldPrice: 169,
    price: 129,
    rating: 4.8,
    reviews: 241,
    icon: '⌚',
    accent: '#0ea5e9',
    badge: 'New',
  },
  {
    id: 3,
    name: 'Laptop Nova 14',
    category: 'Electronics',
    oldPrice: 899,
    price: 749,
    rating: 4.7,
    reviews: 96,
    icon: '💻',
    accent: '#22c55e',
    badge: 'Sale',
  },
  {
    id: 4,
    name: 'Aura Coffee Maker',
    category: 'Home',
    oldPrice: 319,
    price: 259,
    rating: 4.9,
    reviews: 134,
    icon: '☕',
    accent: '#f59e0b',
    badge: 'Top rated',
  },
  {
    id: 5,
    name: 'Vision 4K Camera',
    category: 'Electronics',
    oldPrice: 349,
    price: 279,
    rating: 4.8,
    reviews: 88,
    icon: '📷',
    accent: '#ef4444',
    badge: 'Popular',
  },
  {
    id: 6,
    name: 'Smart Home Kit',
    category: 'Accessories',
    oldPrice: 219,
    price: 169,
    rating: 4.6,
    reviews: 76,
    icon: '🏠',
    accent: '#14b8a6',
    badge: 'Value',
  },
  {
    id:7,
    name: 'Iphone 17 Pro Max',
    category: 'Electronics',
    oldPrice: 1199,
    price: 999,
    rating: 4.9,
    reviews: 200,
    icon: '📱',
    accent: '#8b5cf6',
    badge: 'Best seller',
  },
  {
    id:9,
    name: 'Washing Machine Pro',
    category: 'Home',
    oldPrice: 499,
    price: 399,
    rating: 4.7,
    reviews: 120,
    icon: '🧺',
    accent: '#14b8a6',
    badge: 'Sale',
  },
  {
    id:10,
    name: 'Blender X200',
    category: 'Home',
    oldPrice: 149,
    price: 119,
    rating: 4.6,
    reviews: 90,
    icon: '🍹',
    accent: '#f59e0b',
    badge: 'New',
  },
  {
    id:11,
    name: 'Gaming Console Z',
    category: 'Electronics',
    oldPrice: 499,
    price: 399,
    rating: 4.8,
    reviews: 150,
    icon: '🎮',
    accent: '#3b82f6',
    badge: 'Popular',
  },
  {
    id:12,
    name: 'Catle Pro 3000',
    category: 'Home',
    oldPrice: 249,
    price: 199,
    rating: 4.7,
    reviews: 110,
    icon: '🛋️',
    accent: '#14b8a6',
    badge: 'New',
  },
  {
    id:13,
    name: 'Vitamin D3 + K2',
    category: 'Health',
    oldPrice: 29,
    price: 19,
    rating: 4.9,
    reviews: 250,
    icon: '💊',
    accent: '#8b5cf6',
    badge: 'Top rated',
  },
  {
    id:14,
    name: 'Termos Pro 500ml',
    category: 'Accessories',
    oldPrice: 39,
    price: 29,
    rating: 4.8,
    reviews: 180,
    icon: '🧴',
    accent: '#14b8a6',
    badge: 'New',
  },
  {
    id:25,
    name: 'Gaming PC',
    category: 'Electronics',
    oldPrice: 1299.99,
    price: 999.99,
    rating: 5.2,
    reviews: 239,
    icon: '💻',
    accent: '#39e75f',
    badge: 'Sale'
  },
  {
    id:26,
    name: 'Iphone 18 Pro Max',
    category: 'Electronics',
    oldPrice: 20999.49,
    price: 16999.999,
    rating: 4.9,
    reviews: 200,
    icon: '📱',
    accent: '#910b0b',
    badge: 'Sale',
  },
  {
    id:15,
    name: 'Brawl Pass',
    category: 'Gaming',
    oldPrice: 19,
    price: 14,
    rating: 4.5,
    reviews: 60,
    icon: '🎟️',
    accent: '#f59e0b',
    badge: 'New',
  },
  {
    id:16,
    name: 'Brawl Pass Plus',
    category: 'Gaming',
    oldPrice: 29,
    price: 19,
    rating: 4.6,
    reviews: 80,
    icon: '🎟️',
    accent: '#f59e0b',
    badge: 'New',
  },
  {
    id:17,
    name: 'Pro Pass',
    category: 'Gaming',
    oldPrice: 39,
    price: 29,
    rating: 4.7,
    reviews: 90,
    icon: '🎟️',
    accent: '#f59e0b',
    badge: 'New',
  },
  {
    id:18,
    name: 'Pro Pass Plus',
    category: 'Gaming',
    oldPrice: 49,
    price: 39,
    rating: 4.8,
    reviews: 100,
    icon: '🎟️',
    accent: '#f59e0b',
    badge: 'New',
  },
  {
    id:19,
    name: '30 Gems',
    category: 'Gaming',
    oldPrice: 3.49,
    price: 1.19,
    rating: 4.8,
    reviews: 100,
    icon: '🎟️',
    accent: '#f59e0b',
    badge: 'New',
  },
  {
    id:20,
    name: '60 Gems',
    category: 'Gaming',
    oldPrice: 6,
    price: 4.99,
    rating: 4.8,
    reviews: 100,
    icon: '🎟️',
    accent: '#f59e0b',
    badge: 'New',
  },
  {
    id:21,
    name: '120 Gems',
    category: 'Gaming',
    oldPrice: 13,
    price: 7.99,
    rating: 4.8,
    reviews: 100,
    icon: '🎟️',
    accent: '#f59e0b',
    badge: 'New',
  },
  {
    id:22,
    name: '360 Gems',
    category: 'Gaming',
    oldPrice: 24,
    price: 17.99,
    rating: 4.8,
    reviews: 100,
    icon: '🎟️',
    accent: '#f59e0b',
    badge: 'New',
  },
  {
    id:23,
    name: '950 Gems',
    category: 'Gaming',
    oldPrice: 59,
    price: 49.99,
    rating: 4.8,
    reviews: 100,
    icon: '🎟️',
    accent: '#f59e0b',
    badge: 'New',
  },
  {
    id:24,
    name: '2000 Gems',
    category: 'Gaming',
    oldPrice: 149,
    price: 139.99,
    rating: 4.8,
    reviews: 100,
    icon: '🎟️',
    accent: '#f59e0b',
    badge: 'New',
  }
];

const STRIPE_PAYMENT_LINK = '';
const CART_STORAGE_KEY = 'shopwave-cart';

function loadCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '[]');
    if (!Array.isArray(savedCart)) return [];

    return savedCart
      .filter((item) => item && Number.isInteger(Number(item.id)) && Number(item.price) >= 0)
      .map((item) => ({
        ...item,
        id: Number(item.id),
        price: Number(item.price),
        quantity: Math.max(1, Math.floor(Number(item.quantity) || 1)),
      }));
  } catch (error) {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

const cart = loadCart();

const productsGrid = document.getElementById('productsGrid');
const cartItems = document.getElementById('cartItems');
const totalPrice = document.getElementById('totalPrice');
const cartCount = document.getElementById('cartCount');
const checkoutPanel = document.getElementById('checkoutPanel');
const toast = document.getElementById('toast');
const successModal = document.getElementById('successModal');
const successContinueBtn = document.getElementById('successContinueBtn');
const paymentForm = document.getElementById('paymentForm');
const signInButton = document.getElementById('signInButton');
const profileButton = document.getElementById('profileButton');
const logoutButton = document.getElementById('logoutButton');
const loginModal = document.getElementById('loginModal');
const profileModal = document.getElementById('profileModal');
const closeLoginButton = document.getElementById('closeLogin');
const closeProfileButton = document.getElementById('closeProfile');
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');
const loginSubmitBtn = document.getElementById('loginSubmitBtn');
const loginCodeInput = document.getElementById('loginCode');
const codeFieldWrapper = document.getElementById('codeFieldWrapper');
const profileName = document.getElementById('profileName');
const profileEmail = document.getElementById('profileEmail');
const profileAvatar = document.getElementById('profileAvatar');
const buyBrawlPassButton = document.getElementById('buyBrawlPass');
const productSearch = document.getElementById('productSearch');
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
const priceValue = document.getElementById('priceValue');
const sortFilter = document.getElementById('sortFilter');
const resultsCount = document.getElementById('resultsCount');

function formatPrice(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

function getSelectedPaymentMethod() {
  return document.querySelector('input[name="payment"]:checked')?.value || 'card';
}

function formatCardNumber(value) {
  return value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
}

function formatExpiry(value) {
  const cleaned = value.replace(/\D/g, '').slice(0, 4);
  if (cleaned.length < 3) return cleaned;
  return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
}

function validatePaymentForm() {
  const cardholderName = document.getElementById('cardholderName');
  const cardNumber = document.getElementById('cardNumber');
  const cardExpiry = document.getElementById('cardExpiry');
  const cardCvc = document.getElementById('cardCvc');
  const customerEmail = document.getElementById('customerEmail');

  if (!cardholderName.value.trim()) {
    showToast('Enter cardholder name');
    cardholderName.focus();
    return false;
  }

  if (cardNumber.value.replace(/\D/g, '').length < 15) {
    showToast('Card number is incorrect');
    cardNumber.focus();
    return false;
  }

  if (!/^\d{2}\/\d{2}$/.test(cardExpiry.value)) {
    showToast('Enter valid expiry date');
    cardExpiry.focus();
    return false;
  }

  if (cardCvc.value.replace(/\D/g, '').length < 3) {
    showToast('Enter valid CVC');
    cardCvc.focus();
    return false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail.value)) {
    showToast('Enter a valid email');
    customerEmail.focus();
    return false;
  }

  return true;
}

function renderProducts() {
  const search = productSearch.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const sort = sortFilter.value;
  const visibleProducts = products
    .filter((product) => category === 'All' || product.category === category)
    .filter((product) => product.name.toLowerCase().includes(search))
    .sort((firstProduct, secondProduct) => {
      if (sort === 'price-asc') return firstProduct.price - secondProduct.price;
      if (sort === 'price-desc') return secondProduct.price - firstProduct.price;
      if (sort === 'rating') return secondProduct.rating - firstProduct.rating;
      return firstProduct.id - secondProduct.id;
    });

  resultsCount.textContent = `${visibleProducts.length} product${visibleProducts.length === 1 ? '' : 's'} found`;

  if (visibleProducts.length === 0) {
    productsGrid.innerHTML = '<p class="empty-results">No products match these filters.</p>';
    return;
  }

  productsGrid.innerHTML = visibleProducts
    .map(
      (product) => `
        <article class="product-card" style="--accent:${product.accent}">
          <div class="product-top">
            <span class="product-badge">${product.badge}</span>
            <button class="favorite-btn" aria-label="Add to favorites">♡</button>
          </div>

          <div class="product-visual" style="background:${product.accent}22; color:${product.accent}">
            <span>${product.icon}</span>
          </div>

          <div class="product-body">
            <p class="category">${product.category}</p>
            <h3>${product.name}</h3>

            <div class="rating-box">
              <span>★ ${product.rating}</span>
              <small>(${product.reviews} reviews)</small>
            </div>

            <div class="price-box">
              <span class="old-price">${formatPrice(product.oldPrice)}</span>
              <span class="new-price">${formatPrice(product.price)}</span>
            </div>

            <div class="product-actions">
              <button class="secondary-btn add-cart" data-id="${product.id}">Add to cart</button>
              <button class="primary-btn buy-now" data-id="${product.id}">Buy</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const cartItem = cart.find((item) => item.id === productId);

  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
  showToast(`${product.name} added to cart`);
}

function updateCart() {
  for (let index = cart.length - 1; index >= 0; index -= 1) {
    const item = cart[index];
    if (!item || !Number.isFinite(item.price) || !Number.isFinite(item.quantity) || item.quantity < 1) {
      cart.splice(index, 1);
    }
  }

  saveCart();

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Cart is empty</p>';
    totalPrice.textContent = formatPrice(0);
    cartCount.textContent = '0';
    return;
  }

  cartItems.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
          <div class="cart-item-info">
            <strong>${item.name}</strong>
            <small>${formatPrice(item.price)} each</small>
          </div>

          <div class="cart-item-controls">
            <button class="qty-btn" data-action="decrease" data-id="${item.id}">-</button>
            <span class="qty-value">${item.quantity}</span>
            <button class="qty-btn" data-action="increase" data-id="${item.id}">+</button>
          </div>

          <span class="cart-item-total">${formatPrice(item.price * item.quantity)}</span>
        </div>
      `
    )
    .join('');

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  totalPrice.textContent = formatPrice(total);
  cartCount.textContent = String(cart.reduce((sum, item) => sum + item.quantity, 0));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => toast.classList.remove('visible'), 1800);
}

function openSuccessModal() {
  successModal.classList.add('open');
}

function closeSuccessModal() {
  successModal.classList.remove('open');
}

function openCheckout() {
  if (!checkoutPanel) return;
  checkoutPanel.classList.add('open');
}

function closeCheckout() {
  if (!checkoutPanel) return;
  checkoutPanel.classList.remove('open');
}

function handlePayment() {
  const selectedMethod = getSelectedPaymentMethod();

  if (cart.length === 0) {
    showToast('Cart is empty');
    return;
  }

  if (selectedMethod === 'card') {
    const isValid = validatePaymentForm();
    if (!isValid) return;

    const isRealStripeLink = typeof STRIPE_PAYMENT_LINK === 'string'
      && STRIPE_PAYMENT_LINK.startsWith('https://')
      && STRIPE_PAYMENT_LINK.includes('stripe.com');

    if (isRealStripeLink) {
      window.location.href = STRIPE_PAYMENT_LINK;
      return;
    }

    cart.length = 0;
    updateCart();
    closeCheckout();
    closeSuccessModal();
    openSuccessModal();
    return;
  }

  if (selectedMethod === 'cash') {
    cart.length = 0;
    updateCart();
    closeCheckout();
    closeSuccessModal();
    openSuccessModal();
    return;
  }

  cart.length = 0;
  updateCart();
  closeCheckout();
  closeSuccessModal();
  openSuccessModal();
}

productsGrid.addEventListener('click', (event) => {
  const addBtn = event.target.closest('.add-cart');
  const buyBtn = event.target.closest('.buy-now');

  if (addBtn) {
    addToCart(Number(addBtn.dataset.id));
  }

  if (buyBtn) {
    addToCart(Number(buyBtn.dataset.id));
    openCheckout();
  }
});

buyBrawlPassButton.addEventListener('click', () => {
  addToCart(Number(buyBrawlPassButton.dataset.id));
  openCheckout();
});

cartItems.addEventListener('click', (event) => {
  const btn = event.target.closest('.qty-btn');
  if (!btn) return;

  const productId = Number(btn.dataset.id);
  const action = btn.dataset.action;
  const cartItem = cart.find((item) => item.id === productId);

  if (!cartItem) return;

  if (action === 'increase') {
    cartItem.quantity += 1;
  }

  if (action === 'decrease') {
    cartItem.quantity -= 1;
    if (cartItem.quantity <= 0) {
      const index = cart.findIndex((item) => item.id === productId);
      cart.splice(index, 1);
    }
  }

  updateCart();
});

const categories = [...new Set(products.map((product) => product.category))].sort();
categories.forEach((category) => {
  categoryFilter.insertAdjacentHTML('beforeend', `<option value="${category}">${category}</option>`);
});

productSearch.addEventListener('input', (event) => {
  renderProducts();
});


categoryFilter.addEventListener('change', (event) => {
  renderProducts();
});

sortFilter.addEventListener('change', (event) => {
  renderProducts();
});

document.getElementById('cartButton').addEventListener('click', (event) => {
  event.preventDefault();
  openCheckout();
});
document.getElementById('closeCheckout').addEventListener('click', closeCheckout);
checkoutPanel.addEventListener('click', (event) => {
  if (event.target === checkoutPanel) closeCheckout();
});
successContinueBtn.addEventListener('click', () => {
  closeSuccessModal();
  showToast('Continue shopping');
});
document.getElementById('payButton').addEventListener('click', handlePayment);
document.getElementById('buyNowTop').addEventListener('click', () => {
  if (cart.length > 0) {
    openCheckout();
  } else {
    showToast('Add a product to the cart');
  }
});

document.getElementById('cardNumber').addEventListener('input', (event) => {
  event.target.value = formatCardNumber(event.target.value);
});

document.getElementById('cardExpiry').addEventListener('input', (event) => {
  event.target.value = formatExpiry(event.target.value);
});

document.getElementById('cardCvc').addEventListener('input', (event) => {
  event.target.value = event.target.value.replace(/\D/g, '').slice(0, 4);
});

function openLoginModal() {
  loginModal.classList.add('open');
  codeFieldWrapper.classList.add('hidden');
  loginCodeInput.value = '';
  loginSubmitBtn.textContent = 'Send code';
  loginMessage.textContent = 'Enter your email to receive a verification code.';
  loginMessage.style.color = '#374151';
}

function closeLoginModal() {
  loginModal.classList.remove('open');
  loginForm.reset();
  loginMessage.textContent = '';
  codeFieldWrapper.classList.add('hidden');
  loginCodeInput.value = '';
  loginSubmitBtn.textContent = 'Send code';
}

function openProfileModal() {
  const savedUser = readUserFromStorage();
  if (!savedUser || !savedUser.email) {
    showToast('Please sign in first');
    return;
  }

  const userName = savedUser.name || savedUser.email.split('@')[0];
  profileName.textContent = userName;
  profileEmail.textContent = savedUser.email;
  profileAvatar.textContent = userName.charAt(0).toUpperCase();
  profileModal.classList.add('open');
}

function closeProfileModal() {
  profileModal.classList.remove('open');
}

function readUserFromStorage() {
  try {
    return JSON.parse(localStorage.getItem('shopwave-user') || 'null');
  } catch (error) {
    return null;
  }
}

function updateAuthButton() {
  const savedUser = readUserFromStorage();

  if (savedUser && savedUser.email) {
    signInButton.classList.add('hidden');
    profileButton.classList.remove('hidden');
    logoutButton.classList.remove('hidden');
    profileButton.textContent = `Profile: ${savedUser.name || savedUser.email.split('@')[0]}`;
  } else {
    signInButton.classList.remove('hidden');
    profileButton.classList.add('hidden');
    logoutButton.classList.add('hidden');
    signInButton.textContent = 'Sign in';
  }
}

signInButton.addEventListener('click', (event) => {
  event.preventDefault();
  openLoginModal();
});
profileButton.addEventListener('click', openProfileModal);
closeProfileButton.addEventListener('click', closeProfileModal);
profileModal.addEventListener('click', (event) => {
  if (event.target === profileModal) {
    closeProfileModal();
  }
});
logoutButton.addEventListener('click', () => {
  localStorage.removeItem('shopwave-user');
  localStorage.removeItem('shopwave-verification-code');
  closeProfileModal();
  updateAuthButton();
  showToast('Signed out');
});
closeLoginButton.addEventListener('click', closeLoginModal);
loginModal.addEventListener('click', (event) => {
  if (event.target === loginModal) {
    closeLoginModal();
  }
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('loginEmail').value.trim();
  const code = document.getElementById('loginCode').value.trim();

  if (!email) {
    loginMessage.textContent = 'Please enter your email';
    loginMessage.style.color = '#dc2626';
    return;
  }

  if (!loginCodeInput.value && !codeFieldWrapper.classList.contains('hidden')) {
    loginMessage.textContent = 'Please enter the verification code';
    loginMessage.style.color = '#dc2626';
    return;
  }

  if (codeFieldWrapper.classList.contains('hidden')) {
    const generatedCode = String(Math.floor(100000 + Math.random() * 900000));
    localStorage.setItem('shopwave-verification-code', generatedCode);
    codeFieldWrapper.classList.remove('hidden');
    loginSubmitBtn.textContent = 'Confirm code';
    loginMessage.textContent = `Code sent. Use code: ${generatedCode}`;
    loginMessage.style.color = '#16a34a';
    loginCodeInput.focus();
    return;
  }

  const validCode = localStorage.getItem('shopwave-verification-code');

  if (!validCode || code !== validCode) {
    loginMessage.textContent = 'Invalid verification code';
    loginMessage.style.color = '#dc2626';
    return;
  }

  const userName = email.split('@')[0];
  localStorage.setItem('shopwave-user', JSON.stringify({
    email,
    name: userName,
    signedIn: true,
  }));
  localStorage.removeItem('shopwave-verification-code');

  loginMessage.textContent = 'Welcome back!';
  loginMessage.style.color = '#16a34a';
  updateAuthButton();

  setTimeout(() => {
    loginForm.reset();
    closeLoginModal();
  }, 700);
});

renderProducts();
updateCart();
updateAuthButton();
