import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "desing",
      title: "Desing",
    },
    {
      id: "branding",
      title: "Branding",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            item={item}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="img\first-work.png" alt="" />
          <h3>first work</h3>
        </div>
        <div className="item">
          <img src="img\first-work.png" alt="" />
          <h3>first work</h3>
        </div>
        <div className="item">
          <img src="img\first-work.png" alt="" />
          <h3>first work</h3>
        </div>
        <div className="item">
          <img src="img\second-work.png" alt="" />
          <h3>first work</h3>
        </div>
        <div className="item">
          <img src="img\first-work.png" alt="" />
          <h3>first work</h3>
        </div>
        <div className="item">
          <img src="img\third-image.png" alt="" />
          <h3>first work</h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
