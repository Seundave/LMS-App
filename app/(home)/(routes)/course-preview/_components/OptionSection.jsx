import Image from "next/image";
import React from "react";

function OptionSection() {
  const optionsList = [
    {
      id: 1,
      name: "Github",
      icon: "/github.png",
    },
    {
      id: 2,
      name: "Demo",
      icon: "/demo.png",
    },
    {
      id: 1,
      name: "Youtube",
      icon: "/youtube.png",
    },
  ];

  return (
    <div className="flex items-center gap-4">
      {optionsList.map((option, index) => (
        <div key={index} className="p-2 border rounded-lg flex flex-col items-center w-full cursor-pointer">
          <Image src={option.icon} width={30} height={30} alt="icon" />
          <h2 className="text-[14px] text-gray-500">{option.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default OptionSection;
