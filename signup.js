
<!DOCTYPE html>
<html>
<head>
    <title>Signup Page</title>
</head>
<body>

<h2>Signup Form</h2>

<form id="signupForm">

    Name:
    <input type="text" name="name" required><br><br>

    Email:
    <input type="email" name="email" required><br><br>

    Password:
    <input type="password" name="password" required><br><br>

    Re-enter Password:
    <input type="password" name="confirmPassword" required><br><br>

    Username:
    <input type="text" name="username" required><br><br>

    Gender:
    <select name="gender" required>
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
    </select><br><br>

    Mobile:
    <input type="tel" name="mobile" required><br><br>

    <h3>Address</h3>

    Building/Floor:
    <input type="text" name="building" required><br><br>

    Lane 1:
    <input type="text" name="lane1" required><br><br>

    Lane 2:
    <input type="text" name="lane2" required><br><br>

    Landmark:
    <input type="text" name="landmark"><br><br>

    Pincode:
    <input type="text" name="pincode" required><br><br>

    <button type="submit">Sign Up</button>

</form>

<p id="message"></p>

<script>
document.getElementById("signupForm")
.addEventListener("submit", async function(e) {

    e.preventDefault();

    const data = new URLSearchParams(
        new FormData(this)
    );

    const response = await fetch("/api/signup", {
        method: "POST",
        body: data
    });

    document.getElementById("message").innerText =
        await response.text();
});
</script>

</body>
</html>
