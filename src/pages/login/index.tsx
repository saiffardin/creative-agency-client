import { PATHS } from "@constants/paths";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "@contexts/index";
import logo from "@assets/images/logos/logo.png";
import useIsUserAdmin from "@hooks/useIsUserAdmin";
import useFirebaseAuth from "@hooks/useFirebaseAuth";
import google_login from "@assets/images/google_login.png";

const Login = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useAppContext();
  const { googleLogin } = useFirebaseAuth();
  const { findIsUserAdmin } = useIsUserAdmin();

  const handleLogin = async () => {
    const authResult = await googleLogin();
    const isAdmin = await findIsUserAdmin(authResult.email);

    setUserInfo({ ...authResult, isAdmin });

    navigate(PATHS.ADMIN.ADD_SERVICE);
  };

  return (
    <div className="d-flex flex-column align-items-center m-md-5 m-3">
      <img
        src={logo}
        width="150"
        className="d-inline-block align-top mt-3 img-fluid"
        alt="React Bootstrap logo"
        onClick={() => navigate(PATHS.HOME)}
        style={{ cursor: "pointer" }}
      />

      <div
        className={
          "login-div d-flex flex-column justify-content-center align-items-center px-lg-5 "
        }
      >
        <h3>Login With</h3>
        <div className="style-third-party ">
          <h5 className="my-2 mx-3 mx-sm-5" onClick={handleLogin}>
            <img
              className="img-fluid"
              style={{ maxWidth: "40px" }}
              src={google_login}
              alt=""
            />{" "}
            <span className="ms-md-3 ms-1">Continue with Google</span>
          </h5>
        </div>

        <p className=" text-center mx-2">
          Don't have an account{" "}
          <a href="#" onClick={handleLogin}>
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
