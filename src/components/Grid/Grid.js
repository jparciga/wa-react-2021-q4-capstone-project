import data from '../../mocks/es-mx/featured-products.json';
import './Grid.css';

const products = data.results;

function Grid() {

    return (
        <div>
            <h1>Productos</h1>
            <div className="products-grid">
                {products.map((product) => {
                    return (
                        <div className="product" key={product.data.sku}>
                            <h3>{product.data.name}</h3>
                            <img src={product.data.mainimage.url} alt={product.data.name}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Grid;