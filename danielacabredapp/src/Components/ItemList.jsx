import Item from "./Item";

const ItemList = ({ productos }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                {productos?.map(item => (
                    <div key={item.id} className="col-md-3 my-5">
                        <Item {...item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemList;

