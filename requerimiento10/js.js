const games = [
  {
    id: 1,
    name: "game1",
    image: "https://phantom-marca-mx.unidadeditorial.es/5060b7c30c6060c25535496c76628187/resize/828/f/jpg/mx/assets/multimedia/imagenes/2023/08/05/16912498476241.jpg"
  },
  {
    id: 2,
    name: "Game 2",
    image: "https://i.ytimg.com/vi/Lb2wwEx6DVw/maxresdefault.jpg"
  },
  {
    id: 3,
    name: "Game 3",
    image: "https://img.asmedia.epimg.net/resizer/v2/6ICDRBWHF5ATHFZPOTSHZRS37Q.jpg?auth=8497857445ce1b118296b0144fec65c83d7922f54152d9abd92fbc060b15982a&width=360&height=203&smart=true"
  },
  {
    id: 4,
    name: "Game 4",
    image: "https://www.movistargameclub.pe/wp-content/uploads/2024/05/AC-RED-Hero-c670e300cce5edfef3cf-1024x576-1.jpg"
  },
  {
    id: 5,
    name: "Game 5",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202412/1217/f3f450a68a7dc77fd1b78a675354558cee2375a38e349b42.png"
  }
];

let i = 0;
let carrito = [];

//elige el juego donde esta el carrito actual
function actualizar_carro() {
  const carousel = document.getElementById("carrito_image");
  const game = games[i];

  carousel.innerHTML = `
    <img src="${game.image.replace('1024x1024', '800x800')}" alt="${game.name}" />
    <button class="details" onclick="agregar(${game.id})">Details</button>
  `;
}

//busca el juego por su id
function agregar(gameId) {
  const game = games.find(g => g.id === gameId);
  carrito.push(game);
  carrito_compra();
}

//elimina juego
function remover(index) {
  carrito.splice(index, 1);
  carrito_compra();
}

//juego al carrito, muestra x para eliminar y nombre
function carrito_compra() {
  const container = document.getElementById("carrito_items");
  container.innerHTML = "";
  carrito.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "carrito_item";
    div.innerHTML = `
      <button onclick="removeFromCarrito(${index})">✖</button>
      <img src="${item.image}" />
      <span>${item.name}</span>
    `;
    container.appendChild(div);
  });
}

//busca retroceder o avanzar juegos
document.getElementById("back").onclick = () => {
  i = (i - 1 + games.length) % games.length;
  actualizar_carro();
};

document.getElementById("next").onclick = () => {
  i = (i + 1) % games.length;
  actualizar_carro();
};

//btn de confirmar
document.querySelector(".confirm").onclick = () => {
  alert("Orden confirmada con " + carrito.length + " juego(s).");
  carrito = [];
  carrito_compra();
};

//btn de cancelar
document.querySelector(".cancel").onclick = () => {
  if (confirm("¿Cancelar la orden?")) {
    carrito = [];
    carrito_compra();
  }
};

//inicio
actualizar_carro();
carrito_compra();
