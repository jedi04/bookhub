import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./Store";
import NavBar from "./Components/NavBar";
import Contact from "./Contact";
import Home from './Home';
import "bootstrap/dist/css/bootstrap.min.css";

const books = {
  bestSelling: [
    {
      title: "Harry Potter",
      body: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMzkyZGFlOWQtZjFlMi00N2YwLWE2OWQtYTgxY2NkNmM1NjMwXkEyXkFqcGdeQXVyNjY1NTM1MzA@._V1_FMjpg_UX1000_.jpg",
      genre: "action",
    },
    {
      title: "The Immortals of Meluha",
      body: "The story is set in the land of Meluha and starts with the arrival of the Shiva. The Meluhans believe that Shiva is their fabled saviour Neelkanth",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/8181LdPn39L.jpg",
      genre: "action",
    },
    {
      title: "A Game of Thrones",
      body: "A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by the American author George R. R. Martin",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51FnddC2V+L._SX327_BO1,204,203,200_.jpg",
      genre: "thriller",
    },
    {
      title: "Sacred Games",
      body: "Sacred Games is a mystery/thriller novel by Indian-American author Vikram Chandra published in 2006",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/A1Bw71xCyML.jpg",
      genre: "thriller",
    },
  ],
  newReleases: [
    {
      title: "War of Lanka",
      body: "The first three books of the second-fastest-selling book series in Indian publishing history - the Ram Chandra Series - explore the individual journeys of Ram, Sita and Raavan",
      imgUrl:
        "https://harpercollins.co.in/book-cover/PowerPoint_jpg/9789356291522.jpg",
      genre: "action",
    },
    {
      title: "Cold Justice",
      body: "A motiveless murder. A corrupt politician. A judge on trial.",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/514zpNyELbL._SX324_BO1,204,203,200_.jpg",
      genre: "action",
    },
    {
      title: "How to Prevent the Next Pandemic",
      body: "The COVID-19 pandemic isn't over, but even as governments around the world strive to put it behind us, they're also starting to talk about what happens next. How can we prevent a new pandemic from killing millions of people and devastating the global economy",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41doowYHm0L._SX323_BO1,204,203,200_.jpg",
      genre: "non-fiction",
    },
    {
      title: "THE STORIES WE TELL: MYTHOLOGY TO MAKE SENSE OF MODERN LIVES",
      body: "In The Stories We Tell: Mythology to Make Sense of Modern Lives, renowned mythologist Devdutt Pattanaik presents seventy-two tales from India’s rich treasure of myths and legends to explain life in the twenty-first century. ",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41NvyPT3nEL._SX339_BO1,204,203,200_.jpg",
      genre: "thriller",
    },
  ],
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home books={books} />} />
      <Route path="store" element={<Store books={books} />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
