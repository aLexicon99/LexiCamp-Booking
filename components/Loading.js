import { useState } from "react";

export default function Loading(props) {
  const [isHidden, setIsHidden] = useState("fixed flex");
  return (
    <div
      className={`${isHidden} inset-0 bg-black/90 backdrop-blur-sm items-center justify-center z-50`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-6 border-gray-200 border-t-yellow-500 rounded-full animate-spin"></div>
        <p
          onClick={() => setIsHidden("hidden")}
          className="text-white font-medium"
        >
          Laddar...
        </p>
      </div>
    </div>
  );
}
