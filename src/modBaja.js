const button = document.getElementById("buscarID");
const buttonModificar = document.getElementById("modificar");
const buttonCancelar = document.getElementById("cancelar");
const buttonEliminar = document.getElementById("eliminar");
const route = "../tienda.json";

let productoActual = null;
let data = null; // Agregamos esta variable para almacenar los datos del JSON

button.addEventListener("click", function () {
    var input = document.getElementById("inputID").value;

    fetch(route)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error de red.");
            }
            return response.json();
        })
        .then((jsonData) => {
            data = jsonData; // Almacenamos los datos para usarlos posteriormente
            //Se busca el producto donde la id es igual al input ingresado
            const producto = data.productos.find((p) => p.id == input);

            if (producto) {
                productoActual = producto;

                document.getElementById("nombre").value = producto.name;
                document.getElementById("tipoSelec").value = producto.type;
                document.getElementById("stock").value = producto.stock;
                document.getElementById("precioUni").value = producto.price;
            } else {
                alert("Producto no encontrado");
            }
        })
        .catch((error) => {
            console.error(error);
        });
});

buttonModificar.addEventListener("click", function () {
    if (productoActual) {
        productoActual.name = document.getElementById("nombre").value;
        productoActual.type = document.getElementById("tipoSelec").value;
        productoActual.stock = document.getElementById("stock").value;
        productoActual.price = document.getElementById("precioUni").value;

        // Se debe realizar una nueva solicitud fetch para guardar los cambios
        fetch(route, {
            method: "POST", // o 'POST' dependiendo de tu servidor
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ productos: data.productos }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al guardar los cambios.");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Cambios guardados con éxito");
            })
            .catch((error) => {
                console.error(error);
            });
    }
});
