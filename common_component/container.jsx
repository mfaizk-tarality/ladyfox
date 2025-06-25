import { cn } from "@/lib/utils";
import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className="container mx-auto grid-cols-12 grid ">
      <div className="hidden md:flex md:col-span-1"></div>
      <div className={cn("col-span-12 md:col-span-10 mx-2 md:mx-0", className)}>
        {children}
      </div>
      <div className="hidden md:flex md:col-span-1"></div>
    </div>
  );
};

export default Container;
