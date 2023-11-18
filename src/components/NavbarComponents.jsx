import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import { navLinks } from "../data/index";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const NavbarComponents = () => {
  const { accessToken, role, logout } = useAuth(); // Ambil accessToken dan logout dari konteks

  const handleLogout = () => {
    logout();
  };
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold">
            Jose Vet
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => {
                if (link.path === "reservation-history" && role !== "admin") {
                  return null;
                }
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                      end
                    >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
            <div className="text-center">
              {accessToken ? (
                <button
                  onClick={handleLogout}
                  className="btn btn-outline-danger rounded-1"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link to="daftar" className="btn btn-success rounded-1 me-2">
                    Sign Up
                  </Link>
                  <Link
                    to="login"
                    className="btn btn-outline-success rounded-1"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponents;
