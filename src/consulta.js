const button = document.getElementById("buscarID");
const route = "../tienda.json";

button.addEventListener("click", function () {
    var input = document.getElementById("inputID").value;

    fetch(route)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error de red.");
            }
            return response.json();
        })
        .then((data) => {
            //Se busca el producto donde la id es igual al input ingresado
            const producto = data.productos.find((p) => p.id == input);

            if (producto) {
                document.getElementById("nombre").value = producto.name;
                document.getElementById("tipoSelec").value = producto.type;
                document.getElementById("stock").value = producto.stock;
                document.getElementById("precioUni").value = producto.price;

                if (producto.img) {
                    const containerIMG =
                        document.querySelector(".containerIMG");
                    containerIMG.innerHTML = `<img src="${producto.img}" alt="${producto.name}" class="img-fluid">`;
                }
            } else {
                alert("Producto no encontrado");
            }
        })
        .catch((error) => {
            console.error(error);
        });
});
