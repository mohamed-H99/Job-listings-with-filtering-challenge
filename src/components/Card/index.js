import React from "react";
import "./style.css";

export default function Card({ data }) {
  const logo = require(`../../assets/img/${data?.logo}`).default;

  return (
    <div
      className={`card border-l-4 border-transparent rounded bg-white shadow-xl ${
        data?.new ? "border-cyan-dark" : ""
      }`}
    >
      <div className="card-wrapper p-4 relative md:flex justify-between items-center md:p-8">
        <div
          className={`sm:flex justofy-start items-center gap-4 ${
            data?.tools?.length ? "sm:pb-4 md:pb-0" : ""
          }`}
        >
          <img
            src={logo}
            alt={data?.company}
            className="card-img w-16 sm:w-24 md:w-32 absolute sm:static top-0 left-4"
          />
          <div className="card-content pt-8 pb-4 sm:pt-4">
            <div className="card-content-header flex gap-4">
              <p className="card-content-title font-bold text-cyan-dark">
                {data?.company}
              </p>
              <ul className="flex items-center flex-wrap gap-2">
                {data?.new ? (
                  <li
                    className="uppercase flex items-center rounded-full p-1 px-2 text-xs bg-cyan-dark text-white font-bold"
                    style={{ lineHeight: "15px" }}
                  >
                    {"New!"}
                  </li>
                ) : (
                  ""
                )}
                {data?.featured ? (
                  <li
                    className="uppercase flex items-center rounded-full p-1 px-2 text-xs bg-black text-white font-bold"
                    style={{ lineHeight: "15px" }}
                  >
                    {"Featured"}
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </div>
            <h5 className="card-content-title my-2 font-bold">
              {data?.position}
            </h5>
            <div className="card-content-info opacity-50">
              <span>{data?.postedAt}</span>
              <span>{data?.contract}</span>
              <span>{data?.location}</span>
            </div>
          </div>
        </div>
        {/* tags */}
        <ul
          className="card-tags flex flex-wrap gap-4 pt-4 border-t md:border-0"
          style={{ display: data?.tools.length ? "flex" : "none" }}
        >
          {data?.tools?.map((tag, idx) => (
            <li className="tag" key={idx}>
              <button className="bg-grayish-light p-1 rounded text-cyan-dark font-bold md:text-sm">
                {tag}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
