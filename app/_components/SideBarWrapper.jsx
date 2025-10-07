"use client";
import { useState } from "react";
import SideBar from "./SideBar";
import { MdOutlineMenu, MdClose } from "react-icons/md";

export default function SideBarWrapper() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="flex items-center text-yellow-400 justify-between px-4 py-3 bg-[#141313] fixed top-0 left-0 right-0  md:hidden">
        {/* App name or logo */}
        <h1 className="text-lg italic font-semibold ">
          Abdelrhman Hisham
        </h1>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="md:hidden text-3xl "
        >
          {openMenu ? <MdClose /> : <MdOutlineMenu />}
        </button>
      </div>

      {/* Sidebar (slides in from right) */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transition-transform duration-300
        ${openMenu ? "translate-x-0" : "translate-x-full"}
        md:translate-x-0 md:static md:block`}
      >
        <SideBar />
      </aside>

      {/* Overlay (mobile only) */}
      {openMenu && (
        <div
          className="fixed inset-0  md:hidden z-30"
          onClick={() => setOpenMenu(false)}
        />
      )}
    </>
  );
}
