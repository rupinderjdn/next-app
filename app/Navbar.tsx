import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-slate-600 h-16 w-full">
      <h1>Navbar</h1>
      <div className="flex flex-row">
        <Link href="/">Home</Link>
        <Link href="/admin">Admin</Link>
      </div>
    </div>
  );
};

export default Navbar;
