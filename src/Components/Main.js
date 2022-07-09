import react, { useState } from "react";
import Card from "./Card";
import axios from "axios";
const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="header">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="header1">
              Nothing is pleasanter than exploring a library.
            </h1>
          </div>
          <div className="col-lg-6">
            <div className="row2 mt-5">
              <h2>Discover your next great read</h2>
              <div className="search">
                <input
                  type="text"
                  placeholder="Enter Your Book Name"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyPress={searchBook}
                  style={{ border: "1px solid black", borderRadius: "20px" }}
                />
                <button
                  id="search-button"
                  type="button"
                  className="btn btn-primary"
                  style={{ display: "none" }}
                ></button>
              </div>
              <img src="../images/bg2.jpg" alt="img" className="book-image" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <Card book={bookData} />
      </div>
    </>
  );
};
export default Main;
