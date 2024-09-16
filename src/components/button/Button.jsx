import React from "react";

function Button() {
  return (
    <button class="relative h-12 w-52 rounded-3xl overflow-hidden bg-blue-600  text-white shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-black before:duration-300 before:ease-out hover:text-white hover:shadow-black-600 hover:before:h-40 hover:before:w-52 hover:before:opacity-100">
      <span class="relative z-10">Center Hover</span>
    </button>
  );
}

export default Button;
