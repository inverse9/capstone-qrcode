import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="relative h-screen">
      <div className="h-10 w-full bg-indigo-300 flex items-center px-2">
        <Bars3Icon className="size-6" onClick={() => setisOpen(!isOpen)} />
      </div>
      <div className="m-4">
        <h1 className="font-bold text-3xl mb-4">Dashboard</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        molestiae eos numquam, error nam quis unde, dolores eum perspiciatis
        beatae modi eius aut repudiandae! Voluptates animi asperiores quos
        placeat harum?
      </div>

      <div
        className={`w-1/2 h-full bg-red-100 flex p-2 justify-end transition ${
          isOpen ? "ml-0" : "-ml-64"
        }`}
      >
        <XMarkIcon className="h-6" onClick={() => setisOpen(!isOpen)} />
      </div>
    </div>
  );
};

export default Navbar;
