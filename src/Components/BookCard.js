import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const BookCard = ({ imgUrl, title, body }) => {
  return (
    <Card className="shadow" style={{ width: "18rem", margin: "10px 10px" }}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
