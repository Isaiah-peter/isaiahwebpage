import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const Work = () => {
  return (
    <div className="work" id="work">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="img/smartphone.png" alt="" />
                </div>
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam dolor quaerat cumque dignissimos commodi minus eius{" "}
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="img/third-image.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <ArrowBackIos className="arrow right" />
      <ArrowForwardIos className="arrow right" />
    </div>
  );
};

export default Work;
