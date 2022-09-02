import React from "react";
import "./App.css";
import Row from "../../bingewatch/components/Row/Row.js.js";
import requests from "../../bingewatch/components/Requests/requests.js";
import Banner from "../../bingewatch/components/Banner/Banner.js.js";
import Nav from "../../bingewatch/components/NavBar/Nav.js.js";

function App() {
  return (
    <div className="App">
      {/* NavBar */}
      <Nav />
      {/* Banner:The big poster. */}
      <Banner fetchUrl={requests.fetchBingeWatchOriginals} />

      {/* The below component is the movie rows on the BingeWatch Originals.*/}
      <Row
        title="BINGE WATCH ORIGINALS"
        fetchUrl={requests.fetchBingeWatchOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      {/* <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/> */}
      <Row title="Documantaries" fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;

/*React is a component based language. We use one component and
keep on reusing it with different props(properties).*/
