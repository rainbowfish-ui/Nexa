"use client";
import { useEffect } from "react";

export default function ScrollAnimation() {
  useEffect(() => {}, []);

  return (
    <>
      <div className="w-full h-screen bg-red-300 sticky top-0 flex items-center justify-center">
        {" "}
        hello
      </div>
      <div className="w-full h-screen bg-green-400 sticky top-0 flex items-center justify-center">
        hello
      </div>
      <div className="w-full h-screen bg-orange-400 sticky top-0 flex items-center justify-center">
        hello
      </div>
    </>
  );
}
