"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Search, Layout, Shield, Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

function SideBarNav() {
  const router = useRouter();
  const pathName = usePathname();
  console.log(pathName )
  const menuList = [
    {
      id: 1,
      name: "Browse",
      icon: Search,
      path: "/browse",
    },
    {
      id: 2,
      name: "Dashboard",
      icon: Layout,
      path: "/dashboard",
    },
    {
      id: 3,
      name: "upgrade",
      icon: Shield,
      path: "/upgrade",
    },
    {
      id: 4,
      name: "Newsletter",
      icon: Mail,
      path: "/newsletter",
    },
  ];
  const [activeIndex, setActiveIndex] = useState("");
  console.log(activeIndex);
  
  return (
    <div className="h-full b-white border-r flex flex-col overflow-y-auto shadow-md">
      <div className="p-5 border-b">
        <Image src="/logo.svg" alt="logo" width={170} height={100} />
      </div>
      <div className="flex flex-col">
        {menuList.map((item, index) => (
          <div
            className={`flex gap-2 items-center p-4 px-6 text-gray-500 hover:bg-gray-100 cursor-pointer ${
              activeIndex === index ? "bg-purple-50 text-purple-800" : null
            }`}
            onClick={() => {setActiveIndex(index); router.push(item.path)}}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBarNav;
