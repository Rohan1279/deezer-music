import React, { useState } from "react";

const Music = ({ music, onSelectMusic }) => {
  const { id, title, md5_image } = music;
  const [selectedMusic, setSelectedMusic] = useState({});
  const handlePlayer = (music) => {
    setSelectedMusic(music);
    onSelectMusic(music);
  };

  return (
    <div className="mt-24" onClick={() => handlePlayer(music)}>
      <div className="card w-72 h-80 bg-base-100 shadow-xl mx-auto ">
        <figure className="py-4">
          <img
            src={`https://e-cdn-images.dzcdn.net/images/cover/${md5_image}/264x264-000000-80-0-0.jpg`}
            alt=""
            className="shadow-xl rounded-full w-2/3"
            
          />
          {/* <img src={music.artist.picture_xl} alt="" /> */}
        </figure>
        <div className="badge badge-lg text-base mx-auto my-5 px-10 py-5 ">{title}</div>
      </div>
        <div className="card-body bg-violet-200 p-2 mx-24 my-8 rounded-3xl ">
          <h2>Artist Name</h2>
        </div>
      {/* <audio controls src={preview} className="w-44 mx-auto"></audio> */}
    </div>
  );
};

export default Music;
