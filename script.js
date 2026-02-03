document.getElementById("MyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("YOU HAVE NOT FILLED ALL THE FIELDS");
  } else if (password.lenght < 6) {
    alert("PASSWORD IS SHORT");
  }

  // CHECK IN DB
  alert("LOGGED IN");
});
