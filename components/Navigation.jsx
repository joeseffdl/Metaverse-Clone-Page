import React from "react";

function Navigation() {

  return (
    <>
      <main className="fixed bg-white w-full px-10 min-h-20 z-50">
        <nav className="py-10 flex align-center justify-center">
            <ul className="flex items-center gap-10 text-xl font-burtons">
                <li className="hover:-translate-x-2 ease-in-out duration-300">
                  <a href="#">
                    Projects
                  </a>
                </li> 
                <li className="hover:-translate-y-2 ease-in-out duration-300">  
                  <a className="text-2xl font-semibold" href="./">
                    Zeph
                  </a>
                </li>  
                <li className="hover:translate-x-2 ease-in-out duration-300">
                  <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" href="#">
                    Resume
                  </a>
                </li>
            </ul>
        </nav>
      </main>
    </>
  )
}

export default Navigation;
