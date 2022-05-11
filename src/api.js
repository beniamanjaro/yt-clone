import axios from "axios";

const request = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: "AIzaSyAR66xt9mZe0sJIpLoddKbgO4YkGJoMqfk",
  },
});

export default request;
