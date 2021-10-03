import Header from "./components/Header";
import Card from "./components/Card";
import data from "./api/data.json";

import "./assets/css/style.css";

function App() {
  return (
    <>
      <Header />
      <div className="content pb-8 pt-36 sm:pt-28 bg-grayish-lighter">
        <div className="container">
          <div className="cards flex flex-col gap-12 md:gap-8">
            {data.map((obj, idx) => (
              <Card data={obj} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
