import React from "react";
import { NavLink } from "react-router-dom";

export default function AppHeader() {
  const menu = [
    { label: "Sales", url: "/sales" },
    { label: "Rentals", url: "/rentals" },
    { label: "About", url: "/about" },
    { label: "Team", url: "/team" },
    { label: "Contact Us", url: "/contact-us" },
  ];
  return (
    <div className="bg-[#002349] sticky top-0 z-10">
      <div className="flex items-center justify-center py-6">
        <ul className="space-x-6 font-abeezee text-white flex text-[15px]">
          {menu.map((menuIitem) => {
            return (
              <li key={menuIitem.url}>
                <NavLink to={menuIitem.url}>
                  {menuIitem.label.toUpperCase()}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
