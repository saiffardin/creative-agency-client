import { PATHS } from "@constants/paths";
import { useNavigate } from "react-router-dom";

const ClientBtns = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className="btn btn-secondary btn-sm m-2"
        onClick={() => navigate(PATHS.CLIENT.ORDER)}
      >
        Client Order
      </button>
    </>
  );
};

export default ClientBtns;
