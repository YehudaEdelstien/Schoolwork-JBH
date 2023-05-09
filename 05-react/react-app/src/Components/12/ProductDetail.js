import { useParams, Link } from "react-router-dom";
import store from "./Store";

function ProductDetail() {
    const {id} = useParams();
    const product = store.find(prod => prod.id.toString() === id)
    console.log(product)
    return (
    <div>
        <p><Link to="/products">Back</Link></p>
        <h2>{product.title}</h2>
        <img src={product.imageUrl} alt={product.title}/>
        <div>Size: {product.size}</div>
    </div>
    );
}

export default ProductDetail;