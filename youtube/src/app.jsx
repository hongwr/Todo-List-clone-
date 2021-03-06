import React, { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_List";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAmlYz3J-sMxsmH85FvgKyQz6cPVVuTCCQ",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <h1>
      <VideoList videos={videos} />
    </h1>
  );
}

export default App;
// setVideos(result.items)
// console.log(result)
