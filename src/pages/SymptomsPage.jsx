import React, { Component, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

class SymptomChecker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jenisPet: "",
      gejala: "",
      deskripsi: "",
      hasilAnalisis: "",
      loading: false,
    };
  }

  handleInputChange = (e) => {
    console.log(this.state);
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });

    // Kirim permintaan ke API Chat GPT untuk analisis gejala
    axios
      .post("https://jose-back-end.vercel.app/chat", {
        prompt: `jenis hewan ${this.state.jenisPet}, gejala ${this.state.gejala}, deskripsi ${this.state.deskripsi}`,
      })
      .then((response) => {
        this.setState({ hasilAnalisis: response.data.content });
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <div>
        <div className="fasilitas-ditawarkan-page">
          <div className="fasilitas-ditawarkan min-vh-100">
            <Container>
              <Row>
                <Col>
                  <h2 className="fw-bold text-center mb-2">
                    Symptoms Checker Berbasis AI
                  </h2>
                  <p className="text-center">
                    Symptoms Checker Berbasis AI adalah cek gejala pet
                    kesayangan anda menggunakan bantuan AI
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div>
                    <form>
                      <div className="mb-3">
                        <p className="">Masukkan Jenis Pet Anda</p>
                        <input
                          id="jenisPet"
                          type="text"
                          placeholder="Masukkan Jenis Pet Anda"
                          required
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          onChange={this.handleInputChange}
                          value={this.state.jenisPet}
                        />
                      </div>
                      <div className="mb-3">
                        <p className="">Masukkan Keluhan Gejala</p>
                        <input
                          id="gejala"
                          type="text"
                          placeholder="Masukkan Gejala yang dialami"
                          required
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          onChange={this.handleInputChange}
                          value={this.state.gejala}
                        />
                      </div>
                      <div className="mb-3">
                        <p className="">Deskripsi Gejala</p>
                        <input
                          id="deskripsi"
                          type="text"
                          placeholder="Deskripsikan Secara Lengkap Gejala yang dialami"
                          required
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          onChange={this.handleInputChange}
                          value={this.state.deskripsi}
                        />
                      </div>
                      <br />
                      <div className="d-grid gap-2 mt-2">
                        <button
                          type="submit"
                          className="btn btn-success rounded-1 me-2"
                          disabled={this.state.loading}
                          onClick={(e) => this.handleSubmit(e)}
                        >
                          {this.state.loading ? "Loading" : "Analisis"}
                        </button>
                      </div>
                      <br />
                      <p style={{ textAlign: "justify" }}>
                        {this.state.hasilAnalisis}
                      </p>
                      {/* <div className="mb-3">
                        <input
                          id="hasilAnalisis"
                          type="text"
                          placeholder="Hasil Analisis Gejala"
                          className="form-control border-0 shadow-sm px-4 text-primary"
                          value={this.state.hasilAnalisis}
                        />
                      </div> */}
                      <p>
                        Note: Hasil analisis merupakan analisis yang dilakukan
                        oleh AI
                      </p>
                    </form>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default SymptomChecker;
