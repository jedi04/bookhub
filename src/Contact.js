import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contact = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://thumbs.dreamstime.com/b/blur-book-shelf-bookshop-interior-background-education-knowledge-125494667.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
	height:"100vh",
	paddingTop:'50px'
      }}
    >
      <Container style={{backgroundColor:'white',padding:'50px'}}>
	<h3 style={{textAlignment:'center',align:'center'}}>Get in Touch </h3>
        <Row className="align-items-center">
          <Col>
            <img src="https://media.istockphoto.com/vectors/mail-icon-envelope-icon-vector-mailing-envelope-illustration-internet-vector-id1308082427?k=20&m=1308082427&s=612x612&w=0&h=MiV7WNZDxtYKJDfFDpuLiTzmMqDQWgiEEBQsZfqKDfw=" alt="email-logo" />
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
