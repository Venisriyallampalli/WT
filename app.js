/* Mock Data */
const books = [
    // Fiction
    {
        id: 1,
        title: "The Midnight Library",
        author: "Matt Haig",
        price: 19.99,
        category: "Fiction",
        cover: "https://placehold.co/400x600/1e293b/FFF?text=Midnight+Library",
        description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived."
    },
    {
        id: 2,
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: 14.99,
        category: "Fiction",
        cover: "https://placehold.co/400x600/1e293b/FFF?text=The+Alchemist",
        description: "A magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure."
    },
    {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 12.50,
        category: "Fiction",
        cover: "https://placehold.co/400x600/1e293b/FFF?text=Great+Gatsby",
        description: "The story of the fabulously wealthy Jay Gatsby and his new love for the beautiful Daisy Buchanan."
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: 9.99,
        category: "Fiction",
        cover: "https://placehold.co/400x600/1e293b/FFF?text=Pride+Prejudice",
        description: "A romantic novel of manners written by Jane Austen in 1813. The novel follows the character development of Elizabeth Bennet."
    },
    {
        id: 5,
        title: "1984",
        author: "George Orwell",
        price: 15.00,
        category: "Fiction",
        cover: "https://placehold.co/400x600/1e293b/FFF?text=1984",
        description: "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real."
    },
    {
        id: 6,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 18.25,
        category: "Fiction",
        cover: "https://placehold.co/400x600/1e293b/FFF?text=Mockingbird",
        description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it."
    },

    // Science
    {
        id: 7,
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        price: 18.99,
        category: "Science",
        cover: "https://placehold.co/400x600/1e293b/FFF?text=History+of+Time",
        description: "Stephen Hawking's worldwide bestseller explores the nature of the universe, black holes, and the theory of everything."
    },
    {
        id: 8,
        title: "Cosmos",
        author: "Carl Sagan",
        price: 21.00,
        category: "Science",
        cover: "https://placehold.co/400x600/1e293b/FFF?text=Cosmos",
        description: "Cosmos is one of the bestselling science books of all time. Retracing the fourteen billion years of cosmic evolution that have transformed matter into consciousness."
    },
    {
        id: 9,
        title: "Sapiens: A Brief History",
        author: "Yuval Noah Harari",
        price: 24.50,
        category: "Science",
        cover: "https://placehold.co/400x600/1e293b/FFF?text=Sapiens",
        description: "From a renowned historian comes a groundbreaking narrative of humanity’s creation and evolution."
    },
    {
        id: 10,
        title: "Silent Spring",
        author: "Rachel Carson",
        price: 16.00,
        category: "Science",
        cover: "https://placehold.co/400x600/1e293b/FFF?text=Silent+Spring",
        description: "Rachel Carson’s Silent Spring was first published in three serialized excerpts in the New Yorker in June of 1962."
    },
    {
        id: 11,
        title: "The Selfish Gene",
        author: "Richard Dawkins",
        price: 19.50,
        category: "Science",
        cover: "https://placehold.co/400x600/1e293b/FFF?text=Selfish+Gene",
        description: "Professor Dawkins articulates a gene's eye view of evolution - a view giving centre stage to these persistent units of information."
    },
    {
        id: 12,
        title: "Astrophysics for People in a Hurry",
        author: "Neil deGrasse Tyson",
        price: 14.95,
        category: "Science",
        cover: "https://placehold.co/400x600/1e293b/FFF?text=Astrophysics",
        description: "What is the nature of space and time? How do we fit within the universe? How does the universe fit within us?"
    },

    // Technology
    {
        id: 13,
        title: "Clean Code",
        author: "Robert C. Martin",
        price: 45.00,
        category: "Technology",
        cover: "https://placehold.co/400x600/1e293b/FFF?text=Clean+Code",
        description: "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees."
    },
    {
        id: 14,
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        price: 39.99,
        category: "Technology",
        cover: "https://placehold.co/400x600/1e293b/FFF?text=Pragmatic+Programmer",
        description: "The Pragmatic Programmer illustrates the best practices and major pitfalls of many different aspects of software development."
    },
    {
        id: 15,
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        price: 65.00,
        category: "Technology",
        cover: "https://placehold.co/400x600/1e293b/FFF?text=Algorithms",
        description: "This title covers a broad range of algorithms in depth, yet makes their design and analysis accessible to all levels of readers."
    },
    {
        id: 16,
        title: "You Don't Know JS",
        author: "Kyle Simpson",
        price: 29.99,
        category: "Technology",
        cover: "https://placehold.co/400x600/1e293b/FFF?text=You+Dont+Know+JS",
        description: "A series of books diving deep into the core mechanisms of the JavaScript language."
    },
    {
        id: 17,
        title: "Design Patterns",
        author: "Erich Gamma",
        price: 42.00,
        category: "Technology",
        cover: "https://placehold.co/400x600/1e293b/FFF?text=Design+Patterns",
        description: "Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions."
    },
    {
        id: 18,
        title: "The Phoenix Project",
        author: "Gene Kim",
        price: 22.00,
        category: "Technology",
        cover: "https://placehold.co/400x600/1e293b/FFF?text=Phoenix+Project",
        description: "A novel about IT, DevOps, and helping your business win."
    }
];

/* State */
let cart = [];
let users = [];
try {
    users = JSON.parse(localStorage.getItem('bookstore_users')) || [];
} catch (e) {
    console.warn("LocalStorage not available:", e);
}

let currentUser = null; // Track logged in user

/* DOM Elements */
const contentFrame = document.getElementById('content-frame');
const cartCountElement = document.getElementById('cart-count');
const cartOverlay = document.getElementById('cart-overlay');
const cartSidebar = document.querySelector('.cart-sidebar');

/* Initialization */
document.addEventListener('DOMContentLoaded', () => {
    navigateTo('home');
    updateNavUI(); // Set initial nav state
});

/* Navigation Logic */
function navigateTo(page, param = null) {
    contentFrame.innerHTML = '';
    window.scrollTo(0, 0);

    // Update active nav state (simple highlight)
    document.querySelectorAll('.nav-links li').forEach(li => li.style.color = 'var(--text-primary)');
    // If we had IDs matching pages we could highlight, but for now simple is fine.

    switch (page) {
        case 'home':
            renderHome();
            break;
        case 'registration':
            renderRegistration();
            break;
        case 'login':
            renderLogin();
            break;
        case 'forgot-password':
            renderForgotPassword();
            break;
        case 'book-detail':
            renderBookDetail(param);
            break;
        case 'category':
            renderCategory(param);
            break;
        default:
            renderHome();
    }
}

/* UI Updates */
function updateNavUI() {
    const authNav = document.getElementById('auth-nav');
    const cartIcon = document.getElementById('nav-cart');

    authNav.innerHTML = '';

    if (currentUser) {
        // Logged In: Show Username & Logout
        const userLi = document.createElement('li');
        userLi.textContent = currentUser.username; // "User Name"
        userLi.style.fontWeight = 'bold';

        const logoutLi = document.createElement('li');
        logoutLi.textContent = "Logout";
        logoutLi.onclick = handleLogout;
        logoutLi.style.cursor = "pointer";

        authNav.appendChild(userLi);
        authNav.appendChild(logoutLi);

        // Show Cart
        cartIcon.style.display = 'block';
    } else {
        // Logged Out: Show Signup & Signin
        const signupLi = document.createElement('li');
        signupLi.textContent = "Signup";
        signupLi.onclick = () => navigateTo('registration');

        const signinLi = document.createElement('li');
        signinLi.textContent = "Signin";
        signinLi.onclick = () => navigateTo('login');

        authNav.appendChild(signupLi);
        authNav.appendChild(signinLi);

        // Hide Cart
        cartIcon.style.display = 'none';
    }
}

function handleLogout() {
    currentUser = null;
    cart = []; // Optional: clear cart on logout
    updateCartUI();
    updateNavUI();
    alert("You have been logged out.");
    navigateTo('home');
}

/* Render Functions */

function renderHome() {
    const hero = document.createElement('div');
    hero.className = 'hero-section';
    hero.innerHTML = `
        <div class="hero-content">
            <h1>Welcome to CozyReads</h1>
            <p>Select a category from the menu to view books.</p>
        </div>
    `;

    contentFrame.appendChild(hero);
}

function renderCategory(category) {
    const container = document.createElement('div');
    container.className = 'book-grid';

    const filtered = books.filter(b => b.category === category);

    if (filtered.length === 0) {
        container.innerHTML = `<p style="text-align:center; width:100%;">No books found in this category.</p>`;
    } else {
        filtered.forEach(book => {
            container.appendChild(createBookCard(book));
        });
    }

    const header = document.createElement('h2');
    header.textContent = category + " Books";
    header.style.marginBottom = "2rem";
    header.style.textAlign = "center";

    contentFrame.appendChild(header);
    contentFrame.appendChild(container);
}

function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.onclick = (e) => {
        if (!e.target.closest('.add-btn')) {
            navigateTo('book-detail', book.id);
        }
    };

    card.innerHTML = `
        <div class="book-cover">
            <img src="${book.cover}" alt="${book.title}">
        </div>
        <div class="book-info">
            <div class="book-title">${book.title}</div>
            <div class="book-author">${book.author}</div>
            <div class="book-footer">
                <div class="book-price">$${book.price.toFixed(2)}</div>
                <button class="add-btn" onclick="addToCart(${book.id}, event)">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
        </div>
    `;
    return card;
}

function renderBookDetail(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;

    const detail = document.createElement('div');
    detail.className = 'book-detail-view';
    detail.innerHTML = `
        <div class="detail-cover">
            <img src="${book.cover}" alt="${book.title}">
        </div>
        <div class="detail-info">
            <h2 class="detail-title">${book.title}</h2>
            <h4 class="detail-author">by ${book.author}</h4>
            <p class="detail-desc">${book.description}</p>
            <div class="detail-actions">
                <span style="font-size: 1.5rem; font-weight: bold; margin-right: 1rem; color: var(--accent);">$${book.price.toFixed(2)}</span>
                <button class="btn-primary" style="width: auto; padding: 0.8rem 2rem;" onclick="addToCart(${book.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `;

    const backBtn = document.createElement('button');
    backBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i> Back to Home';
    backBtn.style.cssText = "background:none; border:none; color: var(--text-secondary); cursor: pointer; margin-bottom: 1rem; font-size: 1rem; display:flex; align-items:center; gap:0.5rem;";
    backBtn.onclick = () => navigateTo('home');

    contentFrame.appendChild(backBtn);
    contentFrame.appendChild(detail);
}

function renderLogin() {
    const formContainer = document.createElement('div');
    formContainer.className = 'form-container';

    formContainer.innerHTML = `
        <div class="form-header">
            <h2>Sign In</h2>
            <p>Welcome back!</p>
        </div>
        <form id="login-form">
            <div class="form-group">
                <label>Username</label>
                <input type="text" id="login-username" class="form-control" placeholder="Enter username">
                <div class="error-msg" id="err-login-user">User not found</div>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" id="login-password" class="form-control" placeholder="Enter password">
                <div class="error-msg" id="err-login-pass">Incorrect password</div>
            </div>
            <button type="submit" class="btn-primary">Login</button>
            <p style="margin-top:1rem; text-align:center; font-size:0.9rem; color: var(--text-secondary);">
                Don't have an account? <span onclick="navigateTo('registration')" style="color:var(--accent); cursor:pointer;">Register</span>
            </p>
        </form>
    `;

    contentFrame.appendChild(formContainer);
    document.getElementById('login-form').addEventListener('submit', handleLogin);
}

function renderRegistration() {
    const formContainer = document.createElement('div');
    formContainer.className = 'form-container';

    formContainer.innerHTML = `
        <div class="form-header">
            <h2>Create Account</h2>
            <p>Join our community of book lovers</p>
        </div>
        <form id="reg-form">
            <div class="form-group">
                <label>Username</label>
                <input type="text" id="reg-username" class="form-control" placeholder="Choose a username">
                <div class="error-msg" id="err-username">Username must be at least 5 characters.</div>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" id="reg-password" class="form-control" placeholder="Create a password">
                <div class="error-msg" id="err-password">Password must be at least 8 characters.</div>
            </div>
            <div class="form-group">
                <label>Confirm Password</label>
                <input type="password" id="reg-confirm" class="form-control" placeholder="Confirm your password">
                <div class="error-msg" id="err-confirm">Passwords do not match.</div>
            </div>
            <button type="submit" class="btn-primary">Register</button>
            <p style="margin-top:1rem; text-align:center; font-size:0.9rem; color: var(--text-secondary);">
                Already have an account? <span onclick="navigateTo('login')" style="color:var(--accent); cursor:pointer;">Login</span>
            </p>
        </form>
    `;

    contentFrame.appendChild(formContainer);
    document.getElementById('reg-form').addEventListener('submit', handleRegistration);
}

function renderForgotPassword() {
    const formContainer = document.createElement('div');
    formContainer.className = 'form-container';

    formContainer.innerHTML = `
        <div class="form-header">
            <h2>Reset Password</h2>
            <p>Enter your email to receive instructions</p>
        </div>
        <form id="reset-form">
            <div class="form-group">
                <label>Email Address</label>
                <input type="email" id="reset-email" class="form-control" placeholder="john@example.com">
                <div class="error-msg" id="err-email">Please enter a valid email address.</div>
            </div>
            <button type="submit" class="btn-primary">Send Reset Link</button>
             <p style="margin-top:1rem; text-align:center; font-size:0.9rem; color: var(--text-secondary);">
                 <span onclick="navigateTo('login')" style="color:var(--accent); cursor:pointer;">Back to Login</span>
            </p>
        </form>
    `;

    contentFrame.appendChild(formContainer);
    document.getElementById('reset-form').addEventListener('submit', handleResetPassword);
}

/* User Actions & Validation */

function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const pass = document.getElementById('login-password').value;

    // Clear errors
    document.querySelectorAll('.error-msg').forEach(el => el.style.display = 'none');

    // Check if user exists
    const user = users.find(u => u.username === username);

    if (!user) {
        document.getElementById('err-login-user').innerText = "User not found";
        document.getElementById('err-login-user').style.display = 'block';
        return;
    }

    if (user.password !== pass) {
        document.getElementById('err-login-pass').style.display = 'block';
        return;
    }

    // Success
    currentUser = user;
    alert("Login Successful! Welcome " + user.username);
    updateNavUI();
    navigateTo('home');
}

function handleRegistration(e) {
    e.preventDefault();

    const username = document.getElementById('reg-username').value;
    const pass = document.getElementById('reg-password').value;
    const confirm = document.getElementById('reg-confirm').value;

    let valid = true;

    // Reset errors
    document.querySelectorAll('.error-msg').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.form-control').forEach(el => el.classList.remove('error'));

    if (username.length < 5) {
        showError('reg-username', 'err-username');
        valid = false;
    }

    if (pass.length < 8) {
        showError('reg-password', 'err-password');
        valid = false;
    }

    if (pass !== confirm) {
        showError('reg-confirm', 'err-confirm');
        valid = false;
    }

    if (valid) {
        if (users.some(u => u.username === username)) {
            alert("Username already taken!");
            return;
        }

        // Save user
        users.push({ username, password: pass });
        try {
            localStorage.setItem('bookstore_users', JSON.stringify(users));
        } catch (e) { console.warn("Could not save to localStorage", e); }

        alert('Registration successful! Please sign in.');
        navigateTo('login');
    }
}

function handleResetPassword(e) {
    e.preventDefault();
    const email = document.getElementById('reset-email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    document.getElementById('err-email').style.display = 'none';

    if (!emailRegex.test(email)) {
        showError('reset-email', 'err-email');
        return;
    }

    alert('If this email exists, a reset link has been sent.');
    navigateTo('login');
}

function showError(inputId, errorId) {
    const input = document.getElementById(inputId);
    const err = document.getElementById(errorId);
    if (input) input.classList.add('error');
    if (err) err.style.display = 'block';
}

/* Cart Functionality */

function addToCart(bookId, event) {
    if (event) event.stopPropagation();

    if (!currentUser) {
        alert("Please sign in to add items to your cart.");
        navigateTo('login');
        return;
    }

    const book = books.find(b => b.id === bookId);
    if (book) {
        cart.push(book);
        updateCartUI();

        const btn = event ? event.currentTarget : null;
        if (btn) {
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-check"></i>';
            setTimeout(() => btn.innerHTML = originalHTML, 1000);
        }

        // Open cart to show item added
        if (!cartOverlay.classList.contains('open')) {
            toggleCart();
        }
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    cartCountElement.innerText = cart.length;

    const container = document.getElementById('cart-items');
    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = '<div class="empty-cart-msg">Your cart is empty.</div>';
    } else {
        let total = 0;
        cart.forEach((item, index) => {
            total += item.price;
            const el = document.createElement('div');
            el.className = 'cart-item';
            el.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                </div>
                <button class="cart-remove-btn" onclick="removeFromCart(${index})">Remove</button>
            `;
            container.appendChild(el);
        });
        document.getElementById('cart-total').innerText = '$' + total.toFixed(2);
    }
}

function toggleCart() {
    if (cartOverlay.classList.contains('open')) {
        cartSidebar.style.transform = 'translateX(100%)';
        setTimeout(() => cartOverlay.classList.remove('open'), 300);
    } else {
        cartOverlay.classList.add('open');
        cartSidebar.style.transform = 'translateX(0)';
    }
}

// Close cart if clicking outside sidebar
cartOverlay.addEventListener('click', (e) => {
    if (e.target === cartOverlay) {
        toggleCart();
    }
});
