import { Container, Row, Col } from "react-bootstrap";
import loginImage from "../assets/catphoto.png";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://198.167.141.89:5001/login", {
        email: email,
        password: password,
      });
      const accessToken = res.data.accessToken;
      const role = res.data.role;
      login(accessToken, role); // Update your login function to accept role

      if (role === "admin") {
        // Redirect admin to admin dashboard
        navigate("/reservasi");
      } else {
        // Redirect regular users to user dashboard
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="login">
      <header className="w100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="login-box d-flex align-items-center pt-lg-5">
            <Col lg="6" className="pt-lg-0 pt-5 rounded-100">
              <img src={loginImage} alt="hero-img" />
            </Col>
            <Col className="rounded-2" lg="6">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h2>Sign In To Your Account </h2>
                    <p>
                      Doesn't have account? <Link to="/daftar">Sign up</Link>
                    </p>
                    <form onSubmit={Auth}>
                      <p>{msg}</p>
                      <div className="mb-3">
                        <div className="controls  ">
                          <input
                            type="text"
                            className="input form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="controls ">
                          <input
                            type="password"
                            className="input form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="d-grid gap-2 mt-2">
                        <button
                          type="submit"
                          className="btn  btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default LoginPage;
