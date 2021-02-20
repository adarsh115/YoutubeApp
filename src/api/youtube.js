import axios from "axios";
import React from "react";

const KEY = "AIzaSyDDMe_FwEBU4XdnMCSOI77j1K0eaEZZD7c";

export default axios.create({
  baseURl: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
