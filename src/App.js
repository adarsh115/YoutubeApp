import "./styles.css";

import { Component } from "react";
import SearchBar from "./components/SearchBar";
import { Container } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Container
        style={{ backgroundColor: "lightsalmon", padding: "10px" }}
        fluid="lg"
      >
        <SearchBar />
      </Container>
    );
  }
}

export default App;
