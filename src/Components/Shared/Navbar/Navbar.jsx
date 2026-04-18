"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaClock, FaHome } from 'react-icons/fa';
import { FaChartSimple } from 'react-icons/fa6';

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <div className="bg-base-200 shadow-sm w-full px-4 md:px-8 lg:px-10">
      <div className="navbar">

        {/* LEFT */}
        <div className="navbar-start">

          {/* Mobile */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              ☰
            </label>

            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

              <li>
                <Link
                  href="/"
                  className={`flex items-center gap-2 ${
                    isActive("/") ? "text-[#244D3F] font-bold" : ""
                  }`}
                >
                  <FaHome /> Home
                </Link>
              </li>

              <li>
                <Link
                  href="/timeline"
                  className={`flex items-center gap-2 ${
                    isActive("/timeline") ? "text-[#244D3F] font-bold" : ""
                  }`}
                >
                  <FaClock /> Timeline
                </Link>
              </li>

              <li>
                <Link
                  href="/stats"
                  className={`flex items-center gap-2 ${
                    isActive("/stats") ? "text-[#244D3F] font-bold" : ""
                  }`}
                >
                  <FaChartSimple /> Stats
                </Link>
              </li>

            </ul>
          </div>

          {/* Logo */}
          <Link href="/">
            <h2 className="font-semibold text-xl md:text-2xl text-[#1f2937]">
              Keen<span className="text-[#244d3f]">Keeper</span>
            </h2>
          </Link>
        </div>

        {/* Desktop */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal gap-3">

            <li>
              <Link href="/">
                <button
                  className={`btn font-semibold ${
                    isActive("/")
                      ? "bg-[#244D3F] text-white"
                      : ""
                  }`}
                >
                  <FaHome /> Home
                </button>
              </Link>
            </li>

            <li>
              <Link href="/timeline">
                <button
                  className={`btn font-semibold ${
                    isActive("/timeline")
                      ? "bg-[#244D3F] text-white"
                      : ""
                  }`}
                >
                  <FaClock /> Timeline
                </button>
              </Link>
            </li>

            <li>
              <Link href="/stats">
                <button
                  className={`btn font-semibold ${
                    isActive("/stats")
                      ? "bg-[#244D3F] text-white"
                      : ""
                  }`}
                >
                  <FaChartSimple /> Stats
                </button>
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;