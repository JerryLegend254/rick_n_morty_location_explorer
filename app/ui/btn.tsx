"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";

export function BackButton() {
  const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      className="flex items-center gap-2 hover:cursor-pointer"
    >
      <IoArrowBackCircleSharp size={40} />
      <span className="font-bold">Back</span>
    </div>
  );
}

export function NavigationBtn({ destination, caption }: { destination: string, caption: string }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.replace(destination)}
      className="flex items-center gap-2 hover:cursor-pointer"
    >
      <IoArrowBackCircleSharp size={40} />
      <span className="font-bold">{caption || "Back"}</span>
    </div>
  );
}
