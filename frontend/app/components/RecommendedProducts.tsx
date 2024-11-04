// app/components/RecommendedProducts.tsx
import ProductCard from './ProductCard';
import products from '../lib/productsData'; // Ensure you have the correct import

const RecommendedProducts = () => {
  // Filter to get only the desired products
  const filteredProducts = products.filter(product => 
    ['Headphones', 'Smart Laptop', 'Smartwatch', 'Tablet'].includes(product.name)
  );

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Recommended for You</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;

