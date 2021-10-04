import { useEffect, useState } from "react";
import IconRemove from "../../assets/img/icon-remove.svg";
import "./style.css";

export default function Header({ filterBy, onRemoveFilter, onClearFilters }) {
  const [filtering, setFiltering] = useState(false);

  useEffect(() => {
    const { tools, languages, role, level } = filterBy;
    const exists = tools?.length || languages?.length || role || level;
    setFiltering(exists ? true : false);
  }, [filterBy]);

  return (
    <div className={`header h-40 max-h-screen bg-cyan-dark`}>
      <div className="container h-full flex justify-between items-end">
        <div
          className={`filter ${
            filtering ? "active" : ""
          } overflow-hidden p-4 w-full bg-white shadow-xl rounded relative flex justify-between items-center gap-4`}
          style={{ transform: "translateY(60%)" }}
        >
          <ul className="filter-tags max-h-32 overflow-y-auto flex flex-wrap gap-4">
            {filterBy.role ? (
              <li className="filter-tag rounded bg-grayish-light flex justify-center items-center gap-1 overflow-hidden h-8">
                <span className="text text-cyan-dark font-bold px-2">
                  {filterBy.role}
                </span>
                <button
                  className="bg-cyan-dark text-white h-full w-8 p-1 flex justify-center items-center"
                  onClick={() =>
                    onRemoveFilter({ type: "role", value: filterBy.role })
                  }
                >
                  <img src={IconRemove} alt="icon remove" />
                </button>
              </li>
            ) : (
              ""
            )}
            {filterBy.level ? (
              <li className="filter-tag rounded bg-grayish-light flex justify-center items-center gap-1 overflow-hidden h-8">
                <span className="text text-cyan-dark font-bold px-2">
                  {filterBy.level}
                </span>
                <button
                  className="bg-cyan-dark text-white h-full w-8 p-1 flex justify-center items-center"
                  onClick={() =>
                    onRemoveFilter({ type: "level", value: filterBy.level })
                  }
                >
                  <img src={IconRemove} alt="icon remove" />
                </button>
              </li>
            ) : (
              ""
            )}
            {filterBy.languages?.map((lang, idx) => (
              <li
                className="filter-tag rounded bg-grayish-light flex justify-center items-center gap-1 overflow-hidden h-8"
                key={idx}
              >
                <span className="text text-cyan-dark font-bold px-2">
                  {lang}
                </span>
                <button
                  className="bg-cyan-dark text-white h-full w-8 p-1 flex justify-center items-center"
                  onClick={() =>
                    onRemoveFilter({ type: "language", value: lang })
                  }
                >
                  <img src={IconRemove} alt="icon remove" />
                </button>
              </li>
            ))}
            {filterBy.tools?.map((tool, idx) => (
              <li
                className="filter-tag rounded bg-grayish-light flex justify-center items-center gap-1 overflow-hidden h-8"
                key={idx}
              >
                <span className="text text-cyan-dark font-bold px-2">
                  {tool}
                </span>
                <button
                  className="bg-cyan-dark text-white h-full w-8 p-1 flex justify-center items-center"
                  onClick={() => onRemoveFilter({ type: "tool", value: tool })}
                >
                  <img src={IconRemove} alt="icon remove" />
                </button>
              </li>
            ))}
          </ul>
          <button onClick={onClearFilters}>{"Clear"}</button>
        </div>
      </div>
    </div>
  );
}
