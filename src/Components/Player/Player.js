import React from "react";

const Player = ({ currentMusic }) => {
  if (currentMusic[0]) {
    
    var { title, preview, md5_image } = currentMusic[0];
  }
  console.log(currentMusic[0]?.title)
  return (
    <div className="glass fixed bottom-0 w-full flex">
      <img
        src={`https://e-cdn-images.dzcdn.net/images/cover/${md5_image}/264x264-000000-80-0-0.jpg`}
        alt=""
        className="shadow-xl w-48"
      />
      <div className="mt-auto w-full mx-10 mb-2">
      <h2 className="text-4xl my-10 text-left ml-5 animate-pulse">{title}</h2>
      <audio
        src={preview}
        controls
        className="w-full glass"
      ></audio>
      </div>
    </div>
  );
};

export default Player;
