import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import imgFrame from "@assets/images/logos/Frame.png";
import { PATHS } from "@constants/paths";

const TopBanner = () => {
  const navigate = useNavigate();

  const hireUsClicked = () => {
    navigate(PATHS.LOGIN);
  };

  return (
    <main>
      <div className="mt-3 mx-5 pt-3 pb-5 top-banner">
        <div className="row">
          {/* Left side : text */}
          <div className="col-lg-5  px-5 d-flex justify-content-center flex-column">
            <h1 className="px-md-5">Let’s Grow Your Brand To The Next Level</h1>
            <p className="px-md-5 py-3 me-md-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              blandit facilisis quam netus. git{" "}
            </p>

            <div className="px-md-5">
              <Button className="home-page-btn" onClick={hireUsClicked}>
                Hire us
              </Button>
            </div>
          </div>

          {/* right side : img */}
          <div className="col-lg-7 d-flex align-items-center">
            <img
              src={imgFrame}
              className="img-fluid w-75 ms-5"
              alt="imgFrame"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default TopBanner;
