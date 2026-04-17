import Link from 'next/link';
import React from 'react';
import { FaClock, FaHome } from 'react-icons/fa';
import { FaChartSimple } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <div className="bg-base-200 shadow-sm w-full px-4 md:px-8 lg:px-10">
      <div className="navbar">
        <div className="navbar-start">

          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              ☰
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/" className="flex items-center gap-2">
                  <FaHome /> Home
                </Link>
              </li>
              <li>
                <Link href="/timeline" className="flex items-center gap-2">
                  <FaClock /> Timeline
                </Link>
              </li>
              <li>
                <Link href="/stats" className="flex items-center gap-2">
                  <FaChartSimple /> Stats
                </Link>
              </li>
            </ul>
          </div>

          <Link href="/">
            <h2 className="font-semibold text-xl md:text-2xl text-[#1f2937]">
              Keen<span className="text-[#244d3f]">Keeper</span>
            </h2>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal gap-3">
            <li>
              <Link href="/">
                <button className="btn bg-[#244D3F] text-white font-semibold">
                  <FaHome /> Home
                </button>
              </Link>
            </li>
            <li>
              <Link href="/timeline">
                <button className="btn font-semibold">
                  <FaClock /> Timeline
                </button>
              </Link>
            </li>
            <li>
              <Link href="/stats">
                <button className="btn font-semibold">
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