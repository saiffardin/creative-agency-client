import { useNavigate } from "react-router-dom";
import { Button, Nav, Navbar } from "react-bootstrap";
import mainLogo from "@assets/images/logos/logo.png";
import { PATHS } from "@constants/paths";

const NAV_ITEMS = [
  { link: "#Home", title: "Home" },
  { link: "#OurPortfolio", title: "OurPortfolio" },
  { link: "#OurTeam", title: "OurTeam" },
  { link: "#ContactUs", title: "ContactUs" },
];

const NavSection = () => {
  const navigate = useNavigate();

  return (
    <main>
      <Navbar className="mx-md-5 px-md-5 " expand="lg">
        <Navbar.Brand href="#home" className="mx-5">
          <img
            src={mainLogo}
            width="150"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle className="" aria-controls="basic-navbar-nav" />

        <Navbar.Collapse className="text-center" id="basic-navbar-nav">
          <Nav style={{ fontFamily: "Poppins" }} className="ms-auto">
            {NAV_ITEMS?.map((item, indx) => (
              <Nav.Link
                key={indx}
                href={item.link}
                className="m-2 underline pb-0"
              >
                {item.title}
              </Nav.Link>
            ))}
          </Nav>

          <Button
            className="home-page-btn mx-5 my-2"
            onClick={() => navigate(PATHS.LOGIN)}
          >
            Login
          </Button>
        </Navbar.Collapse>
      </Navbar>
      {/* </Container> */}
    </main>
  );
};

export default NavSection;
