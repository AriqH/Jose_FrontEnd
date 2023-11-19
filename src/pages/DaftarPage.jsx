import { Container, Row, Col } from "react-bootstrap";
import loginImage from "../assets/catphoto.png";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const DaftarPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://jose-back-end.vercel.app/users", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
      });
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="daftar">
      <header className="w100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="daftar-box d-flex align-items-center pt-lg-5">
            <Col lg="6" className="pt-lg-0 pt-5 rounded-100">
              <img src={loginImage} alt="hero-img" />
            </Col>
            <Col className="rounded-2" lg="6">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h2>Create Your Account</h2>
                    <p>
                      Already have an account? <Link to="/login">Log in</Link>
                    </p>
                    <form onSubmit={Register}>
                      <p className="has-text-centered">{msg}</p>
                      <div className="mb-3">
                        <div className="controls ">
                          <input
                            type="text"
                            className="input form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
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
                      <div className="mb-3">
                        <div className="controls ">
                          <input
                            type="password"
                            className="input form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                            placeholder="Confirm Password"
                            value={confPassword}
                            onChange={(e) => setConfPassword(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="d-grid gap-2 mt-2">
                        <button
                          type="submit"
                          className="btn  btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                        >
                          Sign Up
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

export default DaftarPage;
