// Datos simulados de usuarios
const users = [
  {
    id: 1,
    nickname: "Juan123",
    name: "Juan Carlos"
  },
  {
    id: 2,
    nickname: "JC202",
    name: "Carlos José"
  },
  {
    id: 3,
    nickname: "T_987",
    name: "Jason Todd"
  }
];

function Usuarios() {
  const tbody = document.getElementById("user_table");
  tbody.innerHTML = "";

  users.forEach(user => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${user.id}</td>
      <td><div class="avatar" style="margin: auto;"></div></td>
      <td>${user.nickname}</td>
      <td>${user.name}</td>
    `;

    tbody.appendChild(row);
  });
}

Usuarios();

