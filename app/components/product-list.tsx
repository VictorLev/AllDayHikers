
import ProductCard from "./ui/product-card";


const ProductList = ({

  productList = [1,2,3,4,5]

}) => {


    return (
        <div className="p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {productList.map((id) => (
                <ProductCard key={id} id={id} />
              ))}
            </div>
        </div>
    );
}

export default ProductList;
