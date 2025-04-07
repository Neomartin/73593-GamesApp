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
    category: "Adventure",
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

const tableBodyHTML = document.getElementById("table-body")

console.log(  tableBodyHTML  )



games.forEach((juego) => {
    console.log(juego.name);

    tableBodyHTML.innerHTML += `<tr>
                                    <td class="image-cell">
                                        <img src="${juego.image}" alt="">
                                    </td>
                                    <td class="id-cell">
                                        ${ juego.id }
                                    </td>
                                    <td class="name-cell">${ juego.name }</td>
                                    <td class="category-cell">
                                        ${ juego.category }
                                    </td>
                                    <td class="price-cell">
                                        $ ${ juego.price } 
                                    </td>
                                    <td class="action-cell">
                                        
                                        <div class="buttons">

                                            <button class="button-icon">
                                                <i class="fa-solid fa-pencil"></i>
                                            </button>

                                            <button class="button-icon danger">
                                                <i class="fa-solid fa-trash"></i>
                                            </button>

                                        </div>

                                    </td>
                                </tr>`;

})








// Elaborar una función que reciba un array de objectos y pinte cada uno de ellos en el HTML, precisamente en el body de la tabla de juegos.







// function pintarJuegos()
