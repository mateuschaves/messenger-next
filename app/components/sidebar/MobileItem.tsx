"use client";

import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface MobileItemProps {
  href: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}

export default function MobileItem({
  href,
  icon: Icon,
  active,
  onClick,
}: MobileItemProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Link
      onClick={handleClick}
      href={href}
      className={clsx(
        "group flex gal-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-gray-500 hover:text-black hover:bg-gray-100",
        active && "bg-gray-100 text-black"
      )}
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
}
