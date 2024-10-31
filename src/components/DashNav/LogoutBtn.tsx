import { useAppContext } from "@contexts/index";
import useFirebaseAuth from "@hooks/useFirebaseAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const LogoutBtn = () => {
  const { setUserInfo } = useAppContext();
  const { googleLogout } = useFirebaseAuth();

  const logOutHandle = async () => {
    try {
      await googleLogout();
      setUserInfo({});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <span
      className="logOut border rounded px-2 bg-danger-subtle"
      onClick={logOutHandle}
    >
      <FontAwesomeIcon width="10" icon={faSignOutAlt} />
      <span className="m-1">Log Out</span>
    </span>
  );
};

export default LogoutBtn;
