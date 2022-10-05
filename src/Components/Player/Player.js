import React, { useEffect, useState } from "react";

const Player = ({ currentMusic }) => {
  const { title, preview, md5_image } = currentMusic;
  console.log(currentMusic)
//   const [currentMusic, setCurrentMusic] = useState({})
//   useEffect(()=>{
//     setCurrentMusic(selectedMusic)
//   },[selectedMusic])
//   console.log(currentMusic);
// console.log(selectedMusic)
  return (
    <div className="h-48 bg-red-500 fixed  bottom-0">
      <img
        src={`https://e-cdn-images.dzcdn.net/images/cover/${md5_image}/264x264-000000-80-0-0.jpg`}
        alt=""
        className="shadow-xl"
      />
      <audio
        src={preview}
        controls
        className="w-full bg-red-200"
      ></audio>
    </div>
  );
};

export default Player;
