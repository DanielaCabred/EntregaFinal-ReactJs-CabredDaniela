const productos = [
    {
        id: 1,
        nombre: "CEPILLO TRIXIE TAPICERIA Y TEXTILES", 
        precio: 2300, 
        imagen: "imgprod/cepillo-trixie.png",
        stock: 60
    },
    {
        id: 2, 
        nombre: "SILBATO CLICKER TRIXIE", 
        precio:2100, 
        imagen:"imgprod/silvato-clicker-trixie.png",
        stock: 120
    },
    {
        id: 3, 
        nombre: "BEBEDERO DE VIAJE TRIXIE", 
        precio: 2156, 
        imagen:"imgprod/bebedero-viaje-trixie.png", 
        stock: 132
    },
    {
        id: 4, 
        nombre: "CORTAUÑAS TRIXIE GUILLOTINA", 
        precio: 2600, 
        imagen:"imgprod/cortauñas-trixie.png",
        stock: 85
    },
    {
        id: 5, 
        nombre: "CAMPANA PARA SNACKS TRIXIE", 
        precio: 5100, 
        imagen:"imgprod/campana-snack-trixie.png",
        stock: 96
    },
    {
        id: 6, 
        nombre: "COLCHONETA SENIOR JACK ANKARA", 
        precio: 4999, 
        imagen:"imgprod/colchoneta-seniorjack-ankara.png", 
        stock: 120
    },
    {
        id: 7, 
        nombre: "RASCADOR TRIXIE QUESO",
        precio: 6579, 
        imagen:"imgprod/rascador-queso-trixie.png",
        stock: 126
    },
    {
        id: 8, 
        nombre: "CINTURON DE SEGURIDAD HUND", 
        precio: 3517, 
        imagen:"imgprod/cinturon-seguridad-hund.png",
        stock: 64
    },
    {
        id: 9, 
        nombre: "CARRITO COCOONING TRAVOIS",  
        precio: 103760, 
        imagen:"imgprod/carrito-cocooning-travois.png",
        stock: 40
    }
    ];

export const agregarProductos = ()=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve (productos)
        },500)
    })
}


    