//
let news = [
  {
    id: 1,
    title: "Switch 2 revealed",
    description: "Nintendo just revealed the new switch during the presentation."
  },
  {
    id: 2,
    title: "PS5 low sales",
    description: "It is well known that this is not the best PS generation."
  },
  {
    id: 3,
    title: "GPU's price rises",
    description: "The economical politics are causing a rise in GPU prices."
  }
];

//
function Nuevos() {
  const tbody = document.getElementById("news_table");
  tbody.innerHTML = "";

  news.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.id}</td>
      <td><div class="avatar" style="margin:auto;"></div></td>
      <td>${item.title}</td>
      <td>${item.description}</td>
      <td class="action-btns">
        <button onclick="editNews(${index})">✏️</button>
        <button onclick="deleteNews(${index})">🗑️</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

//muestra el formulario
function muestraForm() {
  document.getElementById("form_titulo").textContent = "Add News";
  document.getElementById("news_id").value = "";
  document.getElementById("news_titulo").value = "";
  document.getElementById("news_desc").value = "";
  document.getElementById("news_modal").style.display = "flex";
}

//cierra el formulario
function cerrarForm() {
  document.getElementById("news_modal").style.display = "none";
}

//funcion para editar 
function editar(index) {
  const item = news[index];
  document.getElementById("form_titulo").textContent = "Edit News";
  document.getElementById("news_id").value = index;
  document.getElementById("news_titulo").value = item.title;
  document.getElementById("news_descripcion").value = item.description;
  document.getElementById("news_modal").style.display = "flex";
}

//borrar 
function borrar(index) {
  if (confirm("Are you sure you want to delete this news?")) {
    news.splice(index, 1);
    renderNews();
  }
}

//
document.getElementById("news_form").addEventListener("submit", function (e) {
  e.preventDefault();
  const id = document.getElementById("news_id").value;
  const title = document.getElementById("news_titulo").value.trim();
  const desc = document.getElementById("news_descripcion").value.trim();

  if (id === "") {
    const newId = news.length ? news[news.length - 1].id + 1 : 1;
    news.push({ id: newId, title, description: desc });
  } else {
    news[id].title = title;
    news[id].description = desc;
  }

  cerrarForm();
  Nuevos();
});

Nuevos();
