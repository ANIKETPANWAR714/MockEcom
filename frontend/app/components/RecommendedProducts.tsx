// app/components/RecommendedProducts.tsx
import ProductCard from './ProductCard';

const RecommendedProducts = ({ products }) => {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Recommended for You</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.slice(0, 8).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
