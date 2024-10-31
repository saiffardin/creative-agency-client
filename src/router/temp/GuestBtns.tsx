import { PATHS } from "@constants/paths";
import { useNavigate } from "react-router-dom";

const GuestBtns = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className="btn btn-success btn-sm m-2"
        onClick={() => navigate(PATHS.HOME)}
      >
        Landing page
      </button>

      <button
        className="btn btn-success btn-sm m-2"
        onClick={() => navigate(PATHS.LOGIN)}
      >
        Login
      </button>
    </>
  );
};

export default GuestBtns;
