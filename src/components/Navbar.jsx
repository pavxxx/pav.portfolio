import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Pavithra</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-400">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">Projects</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-zinc-800 px-6 py-4 bg-black">
          <ul className="flex flex-col gap-4 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Projects</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
