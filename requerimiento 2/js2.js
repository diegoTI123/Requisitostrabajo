document.getElementById("register").addEventListener("submit", function (e) { //e para usarlo de evento
  e.preventDefault();

  //se guarda los valores ingresados
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const username = document.getElementById("username").value.trim();
  const country = document.getElementById("country").value;

  //se busca validar la contraseña
  //password: debe tener una mayuscula, numero y debe ser 8 o mas caracteres
  //username: puede entrar minuscula, mayuscula y numeros
  const passwordValid = /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
  const usernameValid = /^[a-zA-Z0-9]+$/.test(username);

  if (!passwordValid) {
    alert("La contraseña debe tener al menos 8 caracteres, con mayuscula y número.");
    return;
  }

  if (!usernameValid) {
    alert("El nombre de usuario no es válido.");
    return;
  }

  // Simulación de registro exitoso
  alert(`Registro exitoso:\nUsuario: ${username}\nCorreo: ${email}\nPaís: ${country}`);

  // Puedes guardar en localStorage si deseas:
  // localStorage.setItem("usuario", JSON.stringify({ email, username, country }));
});
