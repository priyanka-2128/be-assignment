
<!DOCTYPE html>
<html>
<head>
    <title>Login Page</title>
</head>
<body>

<h2>Login Form</h2>

<form id="loginForm">

    Email:
    <input type="email" name="email" required><br><br>

    Password:
    <input type="password" name="password" required><br><br>

    <button type="submit">Login</button>

</form>

<p id="message"></p>

<script>
document.getElementById("loginForm")
.addEventListener("submit", async function(e) {

    e.preventDefault();

    const data = new URLSearchParams(
        new FormData(this)
    );

    const response = await fetch("/api/login", {
        method: "POST",
        body: data
    });

    document.getElementById("message").innerText =
        await response.text();
});
</script>

</body>
</html>
