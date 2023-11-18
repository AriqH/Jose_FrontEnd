import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useAuth } from "../components/AuthContext";
import loginImage from "../assets/cat.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ReservasiPage = () => {
  const { accessToken } = useAuth();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [jenisHewan, setJenisHewan] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [tujuan, setTujuan] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!accessToken) {
      alert("Please log in to make a reservation.");
      return;
    }

    if (
      name.length === 0 ||
      date.length === 0 ||
      email.length === 0 ||
      jenisHewan.length === 0 ||
      whatsapp.length === 0 ||
      tujuan.length === 0
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5001/reservation", {
        name,
        date,
        email,
        jenisHewan,
        whatsapp,
        tujuan,
      });

      // history.push("/reservation-list");
      navigate("/reservation-history");

      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert("An error occurred while making the reservation.");
    }
  };

  return (
    <div className="reservasi">
      <header className="w100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="reservasi-box d-flex align-items-center pt-lg-5">
            <Col className="rounded-2" lg="6">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h2 className="fw-bold"> Reservasi Sekarang </h2>
                    <br />
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <input
                          id="name"
                          type="text"
                          placeholder="Nama Lengkap"
                          required=""
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          id="date"
                          type="date"
                          placeholder=""
                          required=""
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          id="email"
                          type="email"
                          placeholder="Email address"
                          required=""
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          id="Hewan"
                          type="text"
                          placeholder="Jenis Hewan"
                          required=""
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          value={jenisHewan}
                          onChange={(e) => setJenisHewan(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          id="number"
                          type="text"
                          placeholder="Nomor Whatsapp Anda"
                          required=""
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                        />
                      </div>
                      <div>
                        <input
                          id="tujuan"
                          type="text"
                          placeholder="Tujuan Kedatangan"
                          required=""
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          value={tujuan}
                          onChange={(e) => setTujuan(e.target.value)}
                        />
                      </div>
                      <br />
                      <div className="d-grid gap-2 mt-2">
                        <button
                          type="submit"
                          className="btn btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                        >
                          Daftar
                        </button>
                      </div>
                      <p>
                        Note : Pihak kami akan menghubungi anda terkait
                        keberlanjutan reservasi kedatangan anda melalui email
                        ataupun no whatsapp
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5 rounded-100">
              <img src={loginImage} alt="hero-img" />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default ReservasiPage;
