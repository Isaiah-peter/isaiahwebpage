const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="img\imageIsaiah.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there!</h2>
          <h1>Peter Isaiah</h1>
          <h3>
            freelance <span>Designer</span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="img\down-arrow.png" alt />
        </a>
      </div>
    </div>
  );
};

export default Intro;
