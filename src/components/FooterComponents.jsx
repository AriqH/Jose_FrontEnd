import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponents = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold"> JOSE VET</h3>
            <p className="desc">Veterinary Clinic and Pet Shop Balikpapan</p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 821-5487-7993</p>
              </Link>
            </div>
            <div className="email">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">person@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="symtomschecker">Symptoms Checker</Link>
            <Link to="fasilitas">Fasilitas</Link>
            <Link to="reservasi">Reservasi</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <div className="social mt-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponents;
