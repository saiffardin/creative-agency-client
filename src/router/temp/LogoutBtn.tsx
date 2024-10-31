import { useNavigate } from "react-router-dom";
import { useAppContext } from "@contexts/index";
import useFirebaseAuth from "@hooks/useFirebaseAuth";
import { PATHS } from "@constants/paths";

const LogoutBtn = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useAppContext();
  const { googleLogout } = useFirebaseAuth();

  return (
    <>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => {
          googleLogout();
          setUserInfo({});
          navigate(PATHS.LOGIN);
        }}
      >
        Log Out
      </button>
    </>
  );
};

export default LogoutBtn;
