import React from "react";
import "../email_form/style.css";
import emailjs from "@emailjs/browser";
import { Button, Form, FormGroup, Modal, Image } from "react-bootstrap";
import ClipLoader from "react-spinners/BarLoader";

class Email_Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      show: false,
      loading: false,
    };
  }

  handleClose = () => {
    this.setState({
      show: false,
      loading: false,
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });

    const templateParams = {
      from_name: this.state.name,
      from_email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
    };

    emailjs
      .send(
        "service_o7g1fdi",        // ✅ YOUR Gmail service ID
        "template_2qzmvue",         // 🔁 REPLACE with your template ID
        templateParams,
        "a3j3•••••••••••••••••"        // 🔁 REPLACE with your public key
      )
      .then(() => {
        this.setState({ show: true, loading: false });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Failed to send message ❌");
        this.setState({ loading: false });
      });
  };

  handleChange = (field, e) => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit} className="Contact-form">
          <p className="contact-form-header">Contact Form</p>

          <FormGroup className="contact_input">
            <Form.Control
              type="email"
              value={this.state.email}
              onChange={(e) => this.handleChange("email", e)}
              placeholder="Email Address"
              className="contact_input_text"
              required
            />
          </FormGroup>

          <FormGroup className="contact_input">
            <Form.Control
              type="text"
              value={this.state.name}
              onChange={(e) => this.handleChange("name", e)}
              placeholder="Your Name"
              className="contact_input_text"
              required
            />
          </FormGroup>

          <FormGroup className="contact_input">
            <Form.Control
              type="text"
              value={this.state.subject}
              onChange={(e) => this.handleChange("subject", e)}
              placeholder="Subject"
              className="contact_input_text"
              required
            />
          </FormGroup>

          <FormGroup className="contact_input">
            <Form.Control
              as="textarea"
              rows={6}
              value={this.state.message}
              onChange={(e) => this.handleChange("message", e)}
              placeholder="Your text"
              className="contact_input_text"
              required
            />
          </FormGroup>

          <Button
            className="contact-email-text-btn"
            variant="outline-light"
            size="lg"
            type="submit"
            disabled={this.state.loading}
          >
            Submit
            <ClipLoader
              height={4}
              color="#ffffff"
              loading={this.state.loading}
            />
          </Button>
        </Form>

        <Modal show={this.state.show} centered onHide={this.handleClose}>
          <Modal.Body className="contact_success_modal_body text-center">
            <Image
              className="contact_success_modal_img"
              src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
            />
            <h5>
              Thank you <strong>{this.state.name}</strong> 😇
            </h5>
            <h6>Your message was sent successfully</h6>
            <br />
            <Button
              variant="outline-light"
              size="lg"
              onClick={this.handleClose}
              className="contact-email-text-btn"
            >
              Close
            </Button>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default Email_Form;
