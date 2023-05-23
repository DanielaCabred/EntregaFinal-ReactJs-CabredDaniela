const Item = ({id,nombre,imagen,precio,stock}) =>{

return (
<div>

<div>
<header>
    <h2>
        {nombre}
    </h2>
</header>
</div>

<div>
    <img src={imagen}/>
</div>

<div>
<p>${precio}</p>
</div>

<div>
<p> Cantidad disponible: {stock}</p>
</div>

<div>
<button> Ver detalle </button>
</div>

</div>
)
}
export default Item;