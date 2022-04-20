import React, { useState } from "react"

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav >
        <div className="flex flex-row space-x-14  bg-skobeloff-200">
          <div className="ml-16">
            <img src="/WTF.png"></img>
          </div>
          <div className="mt-8">
            Collections
          </div>
          <div className="mt-8">
            About
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header