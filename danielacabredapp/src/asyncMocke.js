const productos = [
    {
        id: 1,
        nombre: "CEPILLO TRIXIE", 
        precio: 2300, 
        imagen: "imgprod/cepillo-trixie.png",
        stock: 60,
        descripcion:"Con el CEPILLO TRIXIE PARA TAPICERIA Y TEXTILES podrás limpiar cualquier superficie, como el sofá o la ropa,  con la máxima comodidad y facilidad. Este cepillo quita sin esfuerzo el pelo suelto incrustado en superficies textiles o tapicerías gracias a sus cerdas de forma especial. Además, su diseño ergonómico se adapta perfectamente a tu mano."
    },
    {
        id: 2, 
        nombre: "SILBATO CLICKER TRIXIE", 
        precio:2100, 
        imagen:"imgprod/silvato-clicker-trixie.png",
        stock: 120,
        descripcion:"El SILBATO CLICKER TRIXIE asegura un sonido uniforme. El tono del silbato cubre largas distancias. Incluye folleto con consejos y trucos para entrenamiento adecuado y se presenta en una amplia variedad de colores. Los accesorios que Trixie desarrolla para la educación están concebidos para un entrenamiento en positivo a través del premio y la recompensa. Están especialmente diseñados para solucionar problemas de comportamiento y entrenar en el paseo y en el juego. Los mejores resultados se obtienen cuando el perro y la persona se divierten."
    },
    {
        id: 3, 
        nombre: "BEBEDERO DE VIAJE TRIXIE", 
        precio: 2156, 
        imagen:"imgprod/bebedero-viaje-trixie.png", 
        stock: 132,
        descripcion:"El BEBEDERO DE VIAJE TRIXIE para perro está fabricado en plástico y posee un mosquetón para engancharlo fácilmente a la correa o al cinturón. Ideal para cuando se viaja con la mascota, salidas al campo y la playa o simplemente paseos largos. Es muy fácil de utilizar, solo hay que desenroscar el tapón de la botella y verter el agua en el recipiente, luego desechar el agua sobrante y volver a enroscar."
    },
    {
        id: 4, 
        nombre: "CORTAUÑAS TRIXIE GUILLOTINA", 
        precio: 2600, 
        imagen:"imgprod/cortauñas-trixie.png",
        stock: 85,
        descripcion:"El CORTAUÑAS TRIXIE GUILLOTINA está indicado para cortar las uñas de perros, gatos y pequeños mamíferos. Se debe estar pendiente de que las uñas de las mascotas no estén demasiado largas ya que le pueden causar daño al andar y obligarle a que adopte malas posturas. Normalmente cuando se pasea sobre superficies duras las uñas se liman solas (los gatos se liman las uñas en el exterior o con los rascadores) pero aún así, es necesario que se corten periódicamente. Cuando vaya a cortar las uñas tenga cuidado de no cortarlas demasiado cortas ya que por ellas pasan nervios y venas. Si las corta demasiado puede causar daño e infecciones. Lo más recomendable es preguntar al veterinario cómo debe hacerlo. En caso de que su mascota tenga la uñas oscuras, por favor, pongáse en contacto con su veterianario o peluquero canino."
    },
    {
        id: 5, 
        nombre: "CAMPANA PARA SNACKS TRIXIE", 
        precio: 5100, 
        imagen:"imgprod/campana-snack-trixie.png",
        stock: 96,
        descripcion:"La CAMPANA PARA SNACKS TRIXIE es un juguete en forma de campana con una alta durabilidad debido al caucho termoplástico  de su composición. Permite rellenar con ricos premios en su interior y así mantener entretenido a tu perro por un largo rato. También se puede untar con premios en forma de pasta o alimento húmedo. Lleva una agarradera de cinta para juego de lanzar y recoger. Contribuye a mantener una buena higiene bucal ya que masajea las encías gracias a su particular textura externa. Los snacks cumplen una función imprescindible en la educación en positivo de las mascotas, ya que para ellas son el premio a una buena conducta, reforzando la relación entre perro y persona."
    },
    {
        id: 6, 
        nombre: "COLCHONETA SENIOR JACK", 
        precio: 4999, 
        imagen:"imgprod/colchoneta-seniorjack-ankara.png", 
        stock: 120,
        descripcion:"La COLCHONETA SENIOR JACK ANKARA es una muy buena opción para el descanso de tu mascota. Se trata de una colchoneta cómoda y mullida.  Está confeccionada en pana lisa matelaseada y su base es impermeable. Excelente calidad y terminación. De fácil lavado y secado rápido."
    },
    {
        id: 7, 
        nombre: "RASCADOR TRIXIE QUESO",
        precio: 6579, 
        imagen:"imgprod/rascador-queso-trixie.png",
        stock: 126,
        descripcion:"El RASCADOR TRIXIE QUESO  está diseñado en una estructura de madera forrada en peluche suave. El juego incluye un cañita que permite sujetar las pelotitas con sonido que se encuentran en su interior. Trae dos pelotitas de colores. Los rascadores sacian los instintos de los gatos y los atraen a jugar en ellos, dejando a un lado muebles o alfombras del hogar.  En ellos los gatos pueden desarrollar su instinto natural de afilarse las uñas."
    },
    {
        id: 8, 
        nombre: "CINTURON DE SEGURIDAD", 
        precio: 3517, 
        imagen:"imgprod/cinturon-seguridad-hund.png",
        stock: 64,
        descripcion:"El CINTURÓN DE SEGURIDAD AMAZONAS es un cinturón que se ajusta al asiento del coche para seguridad de tu mascota. Se adapta a la mayoría de los perros y gatos. Puede acoplarse a todos los receptores de cinturón de seguridad de los vehículos. Es importante mantener a tu mascota atada y segura en el vehículo mientras conduces. Está confeccionado con cinta de polipropileno estampada resistente y de gran calidad. Tiene mosquetón de alta gama y costuras reforzadas."
    },
    {
        id: 9, 
        nombre: "CARRITO COCOONING TRAVOIS",  
        precio: 103760, 
        imagen:"imgprod/carrito-cocooning-travois.png",
        stock: 40,
        descripcion:"El CARRITO COCOONING TRAVOIS TRI FOLD GRAY es un cochecito desmontable para mascotas que define la asequibilidad, la practicidad y la estética, todo en uno! El sistema de viaje para mascotas de tres pliegues de Travois también tiene un mecanismo de plegado triple que permite que la carriola se guarde de manera compacta en el almacenamiento. Es muy liviano y fácil de desmontar. Tiene un sistema de plegado triple compacto con una sola mano e incluso puede caber en el espacio para las piernas de los automóviles, lo que facilita su transporte. La carriola Travois tiene una envoltura de cuero vegano suave en el mango. Los paneles laterales removibles soportan la estructura rígida y se pueden aplanar a menos de 5 cm. Los materiales utilizados cumplen con el estándar SGS para cochecitos de bebé."
    }
    ];


export const agregarProductos = ()=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve (productos)
        },2000)
    })
}


export const agregarProductoId=(id) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(item => item.id === parseInt(id))); //Filtrar mi array de productos y devulevo 1 solo objeto
        }, 1000);
    });
    } 



