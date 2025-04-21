const games = [
  {
    id: 2000,
    name: "Donkey Kong Country™ Returns HD",
    price: 169819,
    image:
      "https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/d7e15809208f425ab20caca6f40e3b6d_1024",
    category: "Action",
  },
  {
    id: 1000,
    name: "Super Mario Party™ Jamboree",
    price: 75200,
    category: "Board",
    image:
      "https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/49ff5c5e983d4a2a8682588179d496c5_1024",
  },
  {
    id: 3000,
    name: "Xenoblade Chronicles™ X",
    price: 79999,
    category: "Action",
    image:
      "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000088832/d33ed7f51de601b10cafa5814fd786bbad317b0421a43d54917a2c647be2f23b",
  },
  {
    id: 3150,
    name: "Luigi's Mansion™ 2 HD",
    price: 59999,
    category: "Adventure",
    image:
      "https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/776b97135e90471e88842504a56ee583_1024",
  },
  {
    id: 4000,
    name: "The Legend of Zelda™: Tears of the Kingdom",
    price: 41400,
    category: "Adventure",
    image:
      "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000063714/956c12eb1a4c9e68b494cca7efd23d20ba8a789a5eb02589affae64bc6bc3282",
  },
];


// const categories = [
//   { id: 1, value: "action", viewValue: "Acción" },
//   { id: 2, value: "adventure", viewValue: "Aventura" },
//   { id: 3, value: "board", viewValue: "Juegos de mesa" },
//   { id: 4, value: "puzzle", viewValue: "Rompecabezas" },
//   { id: 5, value: "strategy", viewValue: "Estrategia" },
//   { id: 6, value: "sports", viewValue: "Deportes" },
// ]

const tableBodyHTML = document.getElementById("table-body");
const collator = Intl.Collator("es", { sensitivity: "base", numeric: true });
const searchHTML = document.querySelector("#search");

const gamesFormHTML = document.getElementById("games-form");

let gameDetailButtons;







gamesFormHTML.addEventListener("submit", (evt) => {
  // Función que se ejecuta al escuchar el evento onsubmit
  evt.preventDefault()

  console.log(evt.target.elements)

  const el = evt.target.elements;

  const newGame = {
    id: Date.now().toString().slice(-5),
    name: el.name.value,
    price: el.price.valueAsNumber,
    image: el.image.value,
    category: el.category.value
  }

  games.push(newGame)

  pintarJuegos(games)

  gamesFormHTML.reset()

});



function mostrarJuego(id) {




}














// pintarJuegos(arrayJuegosFiltrados)


function pintarJuegos(arrayJuegos) {
  tableBodyHTML.innerHTML = ""; // Limpiar el contenido previo de la tabla
  
  arrayJuegos.forEach((juego) => {
    tableBodyHTML.innerHTML += `<tr>
    <td class="image-cell">
    <img src="${juego.image}" alt="">
                                          </td>
                                          <td class="id-cell">
                                              ${juego.id}
                                          </td>
                                          <td class="name-cell">${juego.name}</td>
                                          <td class="category-cell">
                                              ${juego.category}
                                          </td>
                                          <td class="price-cell">
                                              $ ${juego.price} 
                                          </td>
                                          <td class="action-cell">
                                              
                                              <div class="buttons">

                                                  <button class="button-icon" data-game-detail="${juego.id}" data-bs-target="#game-modal" data-bs-toggle="modal">

                                                      <i class="fa-solid fa-eye"></i>

                                                  </button>

                                                  <button class="button-icon danger" onclick="borrarJuego(${juego.id})">
                                                      <i class="fa-solid fa-trash"></i>
                                                  </button>

                                              </div>

                                          </td>
                                      </tr>`;
  });

  gameDetailButtons = document.querySelectorAll("button[data-game-detail]")

  gameDetailButtons.forEach(button => {

    button.addEventListener("click", (event) => {
      
      const id = event.currentTarget.dataset.gameDetail;

      const juego = games.find(game => {
        
        if(game.id == id) {
          return true
        }

      })

      const modalTitle = document.getElementById("game-modal-title")
      const modalBody = document.getElementById("game-modal-body")

      modalTitle.innerText = juego.name;
      modalBody.innerHTML = `<div class="row">
                                <div class="col">
                                  <img src="${juego.image}" width="150px" height="150px">
                                </div>
                                <div class="col">
                                    <p>${juego.category}</p>  
                                    <p>$ ${juego.price}</p>  
                                  </div>
                              </div>
      
      `

      // const gameModal = document.getElementById("game-modal");

      // const modal = new bootstrap.Modal(gameModal)

      // modal.show()

    })

  })
}

pintarJuegos(games);


searchHTML.addEventListener("keyup", filtrarPorNombre);




function borrarJuego(idBorrar) {
  // 1- Recibo el id para saber que elemento tengo que borrar
  // 2- Vamos a buscar la posicion del juego usando findIndex 
  const indice = games.findIndex(juego => {

    if(juego.id === idBorrar) {
      return true
    }

    // return undefined // undefined -> falsy value = false
  })

  const borrar = confirm("Realmente desea borrar este juego?")

  // 3a- Confirmamos que el usuario realmente quiere borrar el juego
  if(borrar) {

    // 3b- Usamos splice para borrar, pero splice necesita un dato para saber que elemento borra, ese dato es la posicion (indice)
    games.splice(indice, 1)
  
    pintarJuegos(games)
  }

}



function filtrarPorNombre(evento) {

  const nombreJuegoABuscar = evento.target.value.toLowerCase();

  const juegosFiltradosPorNombre = games.filter((game) => {
    const nombreJuego = game.name.toLowerCase();

    return nombreJuego.includes(nombreJuegoABuscar);

    // if (nombreJuegoABuscar === game.name.toLowerCase()) {
    //   return true;
    // }
  });

  pintarJuegos(juegosFiltradosPorNombre);

}






















function ordenarPorPrecioAscendente() {
  const juegosAsc = games.toSorted((a, b) => {
    return a.price - b.price; // esto funciona correctamente para ordernar valores numericos
  });
  pintarJuegos(juegosAsc);
}

function ordenarPorPrecioDescendente() {
  const juegosDesc = games.toSorted((a, b) => {
    return b.price - a.price; // esto funciona correctamente para ordernar valores numericos
  });

  pintarJuegos(juegosDesc);
}

function filtrarPorCategoria(eventito) {
  const categoriaSeleccionada = eventito.target.value.toLowerCase();

  const juegosFiltrados = games.filter((juego) => {
    // console.log(categoriaSeleccionada, juego.category)

    if (juego.category.toLowerCase() === categoriaSeleccionada) {
      return true;
    }

    return false;
  });

  pintarJuegos(juegosFiltrados);
}



























// !Función que ordena los juegos por una propiedad y un orden determinado
// @params {string} orden - Puede ser "asc" o "desc"
// function ordenar(propiedad, orden) {
//   if (!orden) {
//     pintarJuegos(games);
//     return;
//   }

//   //// const primerElementoDelArray = games[0];

//   //// const valorPropiedadElem = primerElementoDelArray[propiedad];

//   //// const tipoDeDato = typeof valorPropiedadElem; // "string" o "number"

//   const juegosOrdenados = games.toSorted((a, b) => {
//     if (orden === "desc") {
//       return collator.compare(b[propiedad], a[propiedad]);
//     } else {
//       return collator.compare(a[propiedad], b[propiedad]);
//     }
//     //// if (tipoDeDato === "string") {
//     ////   if (orden === "desc") {
//     ////     if (a[propiedad].toLowerCase() > b[propiedad].toLowerCase()) {
//     ////       return -1;
//     ////     }
//     ////     if (a[propiedad].toLowerCase() < b[propiedad].toLowerCase()) {
//     ////       return 1;
//     ////     }
//     ////     return 0;
//     ////   } else {
//     ////     if (a[propiedad].toLowerCase() > b[propiedad].toLowerCase()) {
//     ////       return 1;
//     ////     }
//     ////     if (a[propiedad].toLowerCase() < b[propiedad].toLowerCase()) {
//     ////       return -1;
//     ////     }
//     ////     return 0;
//     ////   }
//     //// }
// //
//     //// if (tipoDeDato === "number") {
//     ////   if (orden === "desc") {
//     ////     return b[propiedad] - a[propiedad];
//     ////   } else {
//     ////     return a[propiedad] - b[propiedad];
//     ////   }
//     //// }
//   });

//   const juegosOrdenados = games.toSorted((a, b) => {

//     if(orden === "desc") {
//       return b.price - a.price
//     } else if(orden === 'asc') {
//       return a.price - b.price
//     }

//   })

//   pintarJuegos(juegosOrdenados);

//   // const juegosOrdenados = games.toSorted((a, b) =>
//   //   orden === "desc" ? b.price - a.price : a.price - b.price
//   // );
// }

// Elaborar una función que reciba un array de objectos y pinte cada uno de ellos en el HTML, precisamente en el body de la tabla de juegos.

// function pintarJuegos()

// Operador ternario

// condicion ?
