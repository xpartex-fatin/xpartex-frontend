"use client";

import { useState } from "react";
import { IoMdShare } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FileText } from "lucide-react";
import Image from "next/image";

// Types
interface DigitalProduct {
  id: number;
  image: string;
  title: string;
  description: string;
  format: string;
  category: string;
  level: string;
  pages: number;
  rating: number;
  reviews: number;
  price: number;
  buttonName: string;
}

interface ProductsData {
  tabs: string[];
  products: {
    [key: string]: DigitalProduct[];
  };
}

// Sample Data
const productsData: ProductsData = {
  tabs: ["E-book", "Costing Sheet", "T-shirt Design"],
  products: {
    "E-book": [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
        title: "Garments Production Guide",
        description:
          "A practical e-book covering garments manufacturing process, techniques, and ind...",
        format: "PDF",
        category: "Garments",
        level: "Beginner",
        pages: 80,
        rating: 4.95,
        reviews: 57,
        price: 200,
        buttonName: "Buy Now",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        title: "Modern Garments Manufacturing",
        description:
          "This e-book explains modern garments manufacturing systems with practical steps use...",
        format: "PDF",
        category: "Garments",
        level: "Beginner",
        pages: 80,
        rating: 4.95,
        reviews: 57,
        price: 100,
        buttonName: "Buy Now",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=300&fit=crop",
        title: "Garment Costing & Merchandising",
        description:
          "Focuses on costing methods, consumption calculation, and basic merchandising activities f...",
        format: "PDF",
        category: "Garments",
        level: "Intermediate",
        pages: 120,
        rating: 4.97,
        reviews: 86,
        price: 150,
        buttonName: "Buy Now",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=300&fit=crop",
        title: "Quality Control in Apparel",
        description:
          "Covers inline inspection, AQL, defect analysis, and quality assurance tools required fa...",
        format: "PDF",
        category: "Garments",
        level: "Intermediate",
        pages: 100,
        rating: 4.94,
        reviews: 62,
        price: 130,
        buttonName: "Buy Now",
      },
    ],
    "Costing Sheet": [
      {
        id: 5,
        image:
          "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop",
        title: "T-Shirt Costing Template",
        description:
          "Complete costing sheet template for t-shirt manufacturing with detailed calculations...",
        format: "XLSX",
        category: "Garments",
        level: "Beginner",
        pages: 15,
        rating: 4.88,
        reviews: 124,
        price: 45,
        buttonName: "Buy Now",
      },
      {
        id: 6,
        image:
          "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=300&fit=crop",
        title: "Denim Jeans Costing Sheet",
        description:
          "Professional costing template for denim manufacturing including wash calculations...",
        format: "XLSX",
        category: "Garments",
        level: "Intermediate",
        pages: 20,
        rating: 4.92,
        reviews: 98,
        price: 75,
        buttonName: "Buy Now",
      },
    ],
    "T-shirt Design": [
      {
        id: 7,
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
        title: "Graphic T-Shirt Design Pack",
        description:
          "Collection of 50+ professional t-shirt designs ready for printing and production...",
        format: "AI, PSD",
        category: "Design",
        level: "All Levels",
        pages: 50,
        rating: 4.96,
        reviews: 143,
        price: 180,
        buttonName: "Buy Now",
      },
      {
        id: 8,
        image:
          "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=300&fit=crop",
        title: "Vintage Print Design Bundle",
        description:
          "Retro and vintage-inspired t-shirt designs with editable layers and mockups...",
        format: "AI, PSD",
        category: "Design",
        level: "Beginner",
        pages: 40,
        rating: 4.91,
        reviews: 87,
        price: 150,
        buttonName: "Buy Now",
      },
    ],
  },
};

const DigitalProduct = () => {
  const [activeTab, setActiveTab] = useState<string>("E-book");

  const currentProducts = productsData.products[activeTab] || [];

  return (
    <div className="w-full rounded-xl bg-white p-6 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Digital Product</h2>
        <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#00BFFF] transition-colors">
          Share <IoMdShare size={18} />
        </button>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex flex-wrap gap-3">
        {productsData.tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-lg px-6 py-2.5 text-sm font-medium transition-all ${
              activeTab === tab
                ? "bg-linear-to-r from-[#00BFFF] to-[#40E0D0] text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty State */}
      {currentProducts.length === 0 && (
        <div className="py-16 text-center text-gray-500">
          <FileText className="mx-auto mb-4 h-16 w-16 text-gray-300" />
          <p className="text-lg">No products available in this category</p>
        </div>
      )}
    </div>
  );
};

export default DigitalProduct;

// Product Card Component
const ProductCard = ({ product }: { product: DigitalProduct }) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="cover"
        />
        <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all">
          <IoMdShare className="text-gray-700" size={18} />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Title */}
        <h3 className="mb-2 text-lg font-bold text-gray-900 line-clamp-1">
          {product.title}
        </h3>

        {/* Description */}
        <p className="mb-4 text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>

        {/* Product Details Grid */}
        <div className="mb-4 grid grid-cols-2 gap-1 text-sm">
          <div>
            <span className="text-gray-500">Format: </span>
            <span className="font-semibold text-gray-900">
              {product.format}
            </span>
          </div>
          <div>
            <span className="text-gray-500">Category: </span>
            <span className="font-semibold text-gray-900">
              {product.category}
            </span>
          </div>
          <div>
            <span className="text-gray-500">Level: </span>
            <span className="font-semibold text-gray-900">{product.level}</span>
          </div>
          <div>
            <span className="text-gray-500">Pages: </span>
            <span className="font-semibold text-gray-900">{product.pages}</span>
          </div>
        </div>

        {/* Rating and Price */}
        <div className="mb-4 flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" size={16} />
            <span className="font-bold text-gray-900">{product.rating}</span>
            <span className="text-sm text-gray-500">({product.reviews})</span>
          </div>
          <div className="text-right">
            <span className="text-sm text-gray-500">Price: </span>
            <span className="text-xl font-bold text-[#00BFFF]">
              ${product.price}
            </span>
          </div>
        </div>

        {/* Button */}
        <button className="mt-3 w-full rounded-lg border-2 border-[#D8DBDF] py-2 font-medium text-gray-700 transition-all hover:border-transparent hover:bg-gradient-to-r hover:from-[#00BFFF] hover:to-[#40E0D0] hover:text-white">
          {product.buttonName}
        </button>
      </div>
    </div>
  );
};
