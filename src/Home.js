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

const Home = () => {
  const books = {
    bestSelling: [
      {
        title: "Harry Potter",
        body: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling",
        imgUrl:
          "https://m.media-amazon.com/images/M/MV5BMzkyZGFlOWQtZjFlMi00N2YwLWE2OWQtYTgxY2NkNmM1NjMwXkEyXkFqcGdeQXVyNjY1NTM1MzA@._V1_FMjpg_UX1000_.jpg",
      },
      {
        title: "The Immortals of Meluha",
        body: "The story is set in the land of Meluha and starts with the arrival of the Shiva. The Meluhans believe that Shiva is their fabled saviour Neelkanth",
        imgUrl:
          "https://images-na.ssl-images-amazon.com/images/I/8181LdPn39L.jpg",
      },
      {
        title: "A Game of Thrones",
        body: "A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by the American author George R. R. Martin",
        imgUrl:
          "https://images-na.ssl-images-amazon.com/images/I/51FnddC2V+L._SX327_BO1,204,203,200_.jpg",
      },
      {
        title: "Sacred Games",
        body: "Sacred Games is a mystery/thriller novel by Indian-American author Vikram Chandra published in 2006",
        imgUrl:
          "https://images-na.ssl-images-amazon.com/images/I/A1Bw71xCyML.jpg",
      },
    ],
    newReleases: [
      {
        title: "War of Lanka",
        body: "The first three books of the second-fastest-selling book series in Indian publishing history - the Ram Chandra Series - explore the individual journeys of Ram, Sita and Raavan",
        imgUrl:
          "https://harpercollins.co.in/book-cover/PowerPoint_jpg/9789356291522.jpg",
      },
      {
        title: "Cold Justice",
        body: "A motiveless murder. A corrupt politician. A judge on trial.",
        imgUrl:
          "https://images-na.ssl-images-amazon.com/images/I/514zpNyELbL._SX324_BO1,204,203,200_.jpg",
      },
      {
        title: "How to Prevent the Next Pandemic",
        body: "The COVID-19 pandemic isn't over, but even as governments around the world strive to put it behind us, they're also starting to talk about what happens next. How can we prevent a new pandemic from killing millions of people and devastating the global economy",
        imgUrl:
          "https://images-na.ssl-images-amazon.com/images/I/41doowYHm0L._SX323_BO1,204,203,200_.jpg",
      },
      {
        title: "THE STORIES WE TELL: MYTHOLOGY TO MAKE SENSE OF MODERN LIVES",
        body: "In The Stories We Tell: Mythology to Make Sense of Modern Lives, renowned mythologist Devdutt Pattanaik presents seventy-two tales from India’s rich treasure of myths and legends to explain life in the twenty-first century. ",
        imgUrl:
          "https://images-na.ssl-images-amazon.com/images/I/41NvyPT3nEL._SX339_BO1,204,203,200_.jpg",
      },
    ],
  };
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
