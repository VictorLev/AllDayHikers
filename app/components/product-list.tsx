
import ProductCard from "./ui/product-card";


const ProductList = ({

}) => {


    return (
        <div className="p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              <ProductCard id={1} />
              <ProductCard id={2} />
              <ProductCard id={0} />
            </div>
        </div>
    );
}

export default ProductList;
