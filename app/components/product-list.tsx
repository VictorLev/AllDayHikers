
import ProductCard from "./ui/product-card";

interface ProductListProps {
    title:string;
}

const ProductList: React.FC<ProductListProps> = ({
    title
}) => {

    var items = [ 1,2,3,4]

    return (
        <div className="space-y-4">
            <h3 className="font-bold text-3xl">{title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

            </div>
        </div>
    );

}

export default ProductList;
