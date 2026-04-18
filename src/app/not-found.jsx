"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center space-y-6 max-w-xl">

        {/* Big 404 */}
        <h1 className="text-7xl md:text-8xl font-extrabold text-[#244D3F]">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm md:text-base">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Animated divider */}
        <div className="w-24 h-1 bg-[#244D3F] mx-auto rounded-full animate-pulse"></div>

        {/* Button */}
        <Link href="/">
          <button className="btn bg-[#244D3F] text-white flex items-center gap-2 mx-auto hover:scale-105 transition">
            <FaArrowLeft />
            Back to Home
          </button>
        </Link>

      </div>
    </div>
  );
}