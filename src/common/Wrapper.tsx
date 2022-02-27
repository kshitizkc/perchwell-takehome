import React, { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

export default function Wrapper({ children }: PropsWithChildren<unknown>) {
  return (
    <div className=" text-4xl flex flex-col m-auto justify-center items-center">
      {children}
      <div className="text-xl mt-6">
        Nothing here. Wanna Go Back{" "}
        <span className=" underline underline-offset-2 text-green-600">
          <NavLink to="/"> Home</NavLink>
        </span>{" "}
        ?
      </div>
    </div>
  );
}
