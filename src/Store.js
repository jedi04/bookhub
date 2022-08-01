import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const MyCard = ({ imgUrl }) => {
  return (
    <Card style={{ width: "18rem", cursor: "pointer" }}>
      <Card.Img variant="top" src={imgUrl} />
    </Card>
  );
};

const renderBooks = (books, filter) => {
  let allBooks = [];
  for (let key in books) {
    allBooks = allBooks.concat(books[key]);
  }
  const genre = {
    1: "action",
    2: "thriller",
    3: "non-fiction",
  };
  console.log(allBooks);
// eslint-disable-next-line
  if (filter != 0) {
    allBooks = allBooks.filter((book) => {
      return book.genre === genre[filter];
    });
  }
  return allBooks.map((book) => {
	  console.log(book);
    return <MyCard imgUrl={book.imgUrl} />;
  });
};

const Store = ({ books }) => {
  const [filter, setFilter] = useState(0);
  const onFilter = (event) => {
    setFilter(event.target.value);
  };
  return (
    <>
      <Container style={{ padding: "10px" }}>
        <Row>
          <Col>
            <h1>All Books</h1>
          </Col>
          <Col>
            <Form.Select
              onChange={onFilter}
              value={filter}
              aria-label="Default select example"
            >
              <option value="0">All Books</option>
              <option value="1">Action</option>
              <option value="2">Thriller</option>
              <option value="3">Non Fiction</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>{renderBooks(books, filter)}</Row>
      </Container>
    </>
  );
};

export default Store;
