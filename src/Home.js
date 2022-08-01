import Carousel from "./Components/Carousel";
import BookCard from "./Components/BookCard";
import Container from "react-bootstrap/Container";

const renderBooks = (books) => {
  return books.map((book, index) => {
    return (
      <BookCard title={book.title} body={book.body} imgUrl={book.imgUrl} />
    );
  });
};

const Home = ({books}) => {
	console.log(books);
  return (
    <div style={{ backgroundColor: "#d8d7d7" }}>
      <Carousel />
      <Container className="w-100">
        <div>
          <h3>Best Selling Books > </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {renderBooks(books.bestSelling)}
          </div>
        </div>
        <div>
          <h3>New Releases > </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {renderBooks(books.newReleases)}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
