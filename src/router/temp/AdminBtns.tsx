import { PATHS } from "@constants/paths";
import { useNavigate } from "react-router-dom";

const AdminBtns = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => navigate(PATHS.ADMIN.ADD_SERVICE)}
      >
        Admin Add Service
      </button>
    </>
  );
};

export default AdminBtns;
