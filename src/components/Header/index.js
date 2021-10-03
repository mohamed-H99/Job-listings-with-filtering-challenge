import React from "react";
import IconRemove from "../../assets/img/icon-remove.svg";
import "./style.css";

export default function Header() {
  return (
    <div className="header h-40 max-h-screen bg-cyan-dark">
      <div className="container h-full flex justify-between items-end">
        <div
          className="filter overflow-hidden p-4 w-full bg-white shadow-xl rounded relative flex justify-between items-center gap-4"
          style={{ transform: "translateY(60%)" }}
        >
          <ul className="filter-tags max-h-32 overflow-y-auto flex flex-wrap gap-4">
            {/* for loop */}
            <li className="filter-tag rounded bg-grayish-light flex justify-center items-center gap-1 overflow-hidden h-8">
              <span className="text text-cyan-dark font-bold px-2">
                {"Fronend"}
              </span>
              <button className="bg-cyan-dark text-white h-full w-8 p-1 flex justify-center items-center">
                <img src={IconRemove} alt="icon remove" />
              </button>
            </li>
            <li className="filter-tag rounded bg-grayish-light flex justify-center items-center gap-1 overflow-hidden h-8">
              <span className="text text-cyan-dark font-bold px-2">
                {"Fronend"}
              </span>
              <button className="bg-cyan-dark text-white h-full w-8 p-1 flex justify-center items-center">
                <img src={IconRemove} alt="icon remove" />
              </button>
            </li>
            <li className="filter-tag rounded bg-grayish-light flex justify-center items-center gap-1 overflow-hidden h-8">
              <span className="text text-cyan-dark font-bold px-2">
                {"Fronend"}
              </span>
              <button className="bg-cyan-dark text-white h-full w-8 p-1 flex justify-center items-center">
                <img src={IconRemove} alt="icon remove" />
              </button>
            </li>
            <li className="filter-tag rounded bg-grayish-light flex justify-center items-center gap-1 overflow-hidden h-8">
              <span className="text text-cyan-dark font-bold px-2">
                {"Fronend"}
              </span>
              <button className="bg-cyan-dark text-white h-full w-8 p-1 flex justify-center items-center">
                <img src={IconRemove} alt="icon remove" />
              </button>
            </li>
            <li className="filter-tag rounded bg-grayish-light flex justify-center items-center gap-1 overflow-hidden h-8">
              <span className="text text-cyan-dark font-bold px-2">
                {"Fronend"}
              </span>
              <button className="bg-cyan-dark text-white h-full w-8 p-1 flex justify-center items-center">
                <img src={IconRemove} alt="icon remove" />
              </button>
            </li>
            <li className="filter-tag rounded bg-grayish-light flex justify-center items-center gap-1 overflow-hidden h-8">
              <span className="text text-cyan-dark font-bold px-2">
                {"Fronend"}
              </span>
              <button className="bg-cyan-dark text-white h-full w-8 p-1 flex justify-center items-center">
                <img src={IconRemove} alt="icon remove" />
              </button>
            </li>
            <li className="filter-tag rounded bg-grayish-light flex justify-center items-center gap-1 overflow-hidden h-8">
              <span className="text text-cyan-dark font-bold px-2">
                {"Fronend"}
              </span>
              <button className="bg-cyan-dark text-white h-full w-8 p-1 flex justify-center items-center">
                <img src={IconRemove} alt="icon remove" />
              </button>
            </li>
            <li className="filter-tag rounded bg-grayish-light flex justify-center items-center gap-1 overflow-hidden h-8">
              <span className="text text-cyan-dark font-bold px-2">
                {"Fronend"}
              </span>
              <button className="bg-cyan-dark text-white h-full w-8 p-1 flex justify-center items-center">
                <img src={IconRemove} alt="icon remove" />
              </button>
            </li>
          </ul>
          <button>{"Clear"}</button>
        </div>
      </div>
    </div>
  );
}
