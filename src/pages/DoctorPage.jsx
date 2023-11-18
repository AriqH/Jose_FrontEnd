import { Container, Row, Col } from "react-bootstrap";
import { doctors } from "../data/index";

const DoctorPage = () => {
  return (
    <div className="doctor-page">
      <div className="doctor min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center">Dokter</h1>
              <p className="text-center">
                Kami memiliki dokter berpengalaman terbaik dibidangnya!
              </p>
            </Col>
          </Row>
          <Row>
            {doctors.map((doctor) => {
              return (
                <Col key={doctor.id} className="mb-5 ">
                  <img src={doctor.image} alt="" />
                  <div className="people">
                    <p className="desc shadow-sm mt-3">{doctor.desc}</p>
                    <div>
                      <h5 className="mb-1">{doctor.name}</h5>
                    </div>
                  </div>
                </Col>
              );
            })}
            ;
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default DoctorPage;
