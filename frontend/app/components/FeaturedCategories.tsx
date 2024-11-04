// app/components/FeaturedCategories.tsx
"use client";
import Image from 'next/image';
import electronics from '../images/Electronics.jpeg';
import fashion from '../images/fashion.jpeg';
import kitchen from '../images/kitchen.jpeg';
import books from '../images/books.png';

const categories = [
  { name: 'Electronics', image: electronics },
  { name: 'Fashion', image: fashion },
  { name: 'Home & Kitchen', image: kitchen },
  { name: 'Books', image: books },
];

const FeaturedCategories = () => {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <Image src={category.image} alt={category.name} width={200} height={200} className="w-full h-32 object-cover mb-2 rounded-md" />
            <h3 className="text-xl font-semibold">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;

  
  