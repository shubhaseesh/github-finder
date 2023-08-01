import React from "react";
import { useContext } from "react";
import AlertContext from "../../store/alert/AlertContext";

const Alert = () => {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null &&
    alert.type === "error" && (
      <div className="flex h-[30px] bg-red-40 mb-2">
        <div className="flex justify-center items-center px-2 text-red-800 font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>&nbsp;{alert.msg}</span>
        </div>
      </div>
    )
  );
};

export default Alert;
