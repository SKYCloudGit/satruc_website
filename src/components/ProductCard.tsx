import React from "react";
import { ArrowRight } from "lucide-react";

interface ProductProps {
  id: string;
  name: string;
  description: string;
  src: { image: string; desc: string }[]; // ✅ Array of images with descriptions
  features: string[];
  category: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const ProductCard: React.FC<ProductProps> = ({
  name,
  description,
  src,
  features,
  category,
  isNew,
  isBestseller,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 border rounded-lg shadow-lg bg-white">
      {/* Left Side: Large 2x2 Image Grid */}
      <div className="grid grid-cols-2 gap-4">
        {src.slice(0, 4).map((img, index) => (
          <div key={index} className="relative group">
            <img
              src={img.image}
              alt={`Image ${index + 1}`}
              className="w-full h-72 object-cover rounded-lg shadow-md transition-transform hover:scale-105"
            />
            {/* Description Box at the Bottom Right Corner */}
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {img.desc}
            </div>
          </div>
        ))}
      </div>

      {/* Right Side: Product Details */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">{name}</h2>
        <p className="text-lg text-gray-600">{description}</p>

        <ul className="space-y-2 text-gray-700">
  {features.map((feature, index) => (
    <li key={index} className="flex items-center">
      {feature}
    </li>
  ))}
</ul>


        {/* <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-lg font-medium">
          {category}
        </span> */}

        {/* <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition">
          Request a Quote
        </button> */}
      </div>
    </div>
  );
};

export default ProductCard;
