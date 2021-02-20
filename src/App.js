import "./styles.css";
import React from "react";
import { Component } from "react";
import SearchBar from "./components/SearchBar";
import { Container } from "react-bootstrap";
import youtube from "./api/youtube";
import VideoList from "./components/VideoList";

class App extends Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    console.log(response.data.items);
    this.setState({
      // video : response.data.items
      videos: response.data.items
    });
  };

  render() {
    return (
      <Container
        style={{ backgroundColor: "lightsalmon", padding: "10px" }}
        fluid="lg"
      >
        <SearchBar onFormSubmit={this.onTermSubmit} />
        i have <VideoList videos={this.state.videos} /> videos
      </Container>
    );
  }
}

export default App;
