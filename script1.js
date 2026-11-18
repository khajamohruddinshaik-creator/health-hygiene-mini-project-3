
// USER REGISTRATION
function registerUser() {
    const name = document.getElementById("regName").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value;

    if (!name || !email || !password) {
        alert("Please fill all registration details.");
        return;
    }

    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(user => user.email === email)) {
        alert("This email is already registered.");
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Please login.");
}

// USER LOGIN
function loginUser() {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
        u => u.email === email && u.password === password
    );

    const message = document.getElementById("loginMessage");

    if (user) {
        localStorage.setItem("loggedInUser", user.name);
        message.textContent = "Welcome " + user.name + "! Login successful.";
        message.style.color = "green";
    } else {
        message.textContent = "Invalid email or password.";
        message.style.color = "red";
    }
}

// USER LOGOUT
function logoutUser() {
    localStorage.removeItem("loggedInUser");

    const message = document.getElementById("loginMessage");
    message.textContent = "You have logged out.";
    message.style.color = "green";
}

// ADMIN ANNOUNCEMENT
function addAnnouncement() {
    const input = document.getElementById("announcement");
    const text = input.value.trim();

    if (text === "") {
        alert("Please enter an announcement.");
        return;
    }

    const list = document.getElementById("announcementList");
    const item = document.createElement("li");

    item.textContent = text;
    list.appendChild(item);

    input.value = "";
}
