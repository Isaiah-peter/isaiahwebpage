const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Webapp</li>
        <li>Mobile App</li>
        <li>Desing</li>
        <li>Branding</li>
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
      </div>
    </div>
  );
};

export default Portfolio;
