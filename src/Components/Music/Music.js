import React, { useState } from "react";

const Music = ({ music, onSelectMusic}) => {
  const { id, title, md5_image} = music;
  const [selectedMusic, setSelectedMusic] = useState({})
  const handlePlayer = (music) => {
    setSelectedMusic(music)
    onSelectMusic(music)
  }
  
  return (
    <div className="mt-24" >
      <div className="card w-64 bg-base-100 shadow-xl mx-auto rounded-full">
        <figure>
          <img
            src={`https://e-cdn-images.dzcdn.net/images/cover/${md5_image}/264x264-000000-80-0-0.jpg`}
            alt=""
            className="shadow-xl"
            onClick={()=>handlePlayer(music)}
          />
          {/* <img src={music.artist.picture_xl} alt="" /> */}
        </figure>
      </div>
      <div className="card-body bg-violet-200 p-2 mx-10 mt-3 rounded-3xl">
        <h2 className="card-title text-base mx-auto ">{title}</h2>
      </div>
      {/* <audio controls src={preview} className="w-44 mx-auto"></audio> */}
    </div>
  );
};

export default Music;
