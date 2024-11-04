// app/components/Hero.tsx
const Hero = () => {
    return (
      <div className="relative bg-gray-200 h-60 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-center">
          Welcome to the Best Online Store!
        </h1>
        <p className="mt-2 text-lg">Shop the latest products and offers.</p>
        <img
          src="/images/hero.jpeg" // Replace with your hero image path
          alt="Promotional Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      </div>
    );
  };
  
  export default Hero;
  