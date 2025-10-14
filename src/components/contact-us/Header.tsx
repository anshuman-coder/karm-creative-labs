import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-black p-6 text-white md:p-8">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wider">karm / कर्म</h1>
        <nav>{/* Navigation links can be added here */}</nav>
      </div>
    </header>
  );
};

export default Header;
