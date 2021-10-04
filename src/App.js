import { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import "./assets/css/style.css";

function App() {
  const data = require("./api/data.json");
  const [state, setState] = useState({
    jobs: data,
    filterBy: {
      tools: [],
      languages: [],
      role: "",
      level: "",
    },
  });

  const handleUpdateJobs = () => {
    const { tools, languages, role, level } = { ...state.filterBy };
    let newJobs = [...data];
    if (role) newJobs = newJobs.filter((job) => job.role === role);
    if (level) newJobs = newJobs.filter((job) => job.level === level);
    if (tools.length) {
      tools.forEach((tool) => {
        newJobs = newJobs.filter((job) => job.tools.find((t) => t === tool));
      });
    }
    if (languages.length) {
      languages.forEach((lang) => {
        newJobs = newJobs.filter((job) =>
          job.languages.find((l) => l === lang)
        );
      });
    }

    setState((prev) => ({ ...prev, jobs: newJobs }));
    window?.scrollTo(0, 0);
  };

  const handleAddFilter = ({ type, value }) => {
    switch (type) {
      case "role":
        setState((prev) => ({
          ...prev,
          filterBy: {
            ...state.filterBy,
            role: value,
          },
        }));
        break;
      case "level":
        setState((prev) => ({
          ...prev,
          filterBy: {
            ...state.filterBy,
            level: value,
          },
        }));
        break;
      case "tool":
        setState((prev) => {
          let newArr = [...prev.filterBy.tools];
          const exists = newArr.find((val) => val === value);
          newArr = exists ? newArr : [...newArr, value];
          return {
            ...prev,
            filterBy: {
              ...prev.filterBy,
              tools: newArr,
            },
          };
        });
        break;
      case "language":
        setState((prev) => {
          let newArr = [...prev.filterBy.languages];
          const exists = newArr.find((val) => val === value);
          newArr = exists ? newArr : [...newArr, value];
          return {
            ...prev,
            filterBy: {
              ...prev.filterBy,
              languages: newArr,
            },
          };
        });
        break;
      default:
        break;
    }
  };

  const handleRemoveFilter = ({ type, value }) => {
    switch (type) {
      case "role":
        setState((prev) => ({
          ...prev,
          filterBy: {
            ...state.filterBy,
            role: "",
          },
        }));
        break;
      case "level":
        setState((prev) => ({
          ...prev,
          filterBy: {
            ...state.filterBy,
            level: "",
          },
        }));
        break;
      case "tool":
        setState((prev) => ({
          ...prev,
          filterBy: {
            ...prev.filterBy,
            tools: prev.filterBy.tools?.filter((tool) => tool !== value),
          },
        }));
        break;
      case "language":
        setState((prev) => ({
          ...prev,
          filterBy: {
            ...prev.filterBy,
            languages: prev.filterBy.languages?.filter(
              (lang) => lang !== value
            ),
          },
        }));
        break;
      default:
        break;
    }
  };

  const handleClearFilters = () => {
    setState({
      jobs: data,
      filterBy: {
        tools: [],
        languages: [],
        role: "",
        level: "",
      },
    });
  };

  useEffect(() => {
    console.log('Updating!');
    handleUpdateJobs();
    return () => {};
  }, [state.filterBy]);

  return (
    <>
      <Header
        filterBy={state.filterBy}
        onRemoveFilter={handleRemoveFilter}
        onClearFilters={handleClearFilters}
      />
      <div className="content pb-8 pt-36 sm:pt-28 bg-grayish-lighter">
        <div className="container">
          <div className="cards flex flex-col gap-12 md:gap-8">
            {state.jobs?.map((obj, idx) => (
              <Card data={obj} key={idx} onAddFilter={handleAddFilter} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
