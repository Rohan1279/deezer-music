import React, { useEffect, useState } from "react";
import Music from "../Music/Music";
const Musics = ({ query, onSelectPlayerSong }) => {
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "78308b1796msh558baedaf330c54p174129jsneff43a28af6f",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`, options)
      .then((response) => response.json())
      .then((response) => setMusics(response.data))
      .catch((err) => console.error(err));
  }, [query]);

  const handleSelectedSong = (music) => {
    onSelectPlayerSong(music)
  };

  return (
    <div className="grid grid-cols-3 px-32">
      {musics?.map((music, idx) => (
        <Music music={music} 
        onSelectMusic={handleSelectedSong} 
        key={idx}
        />
      ))}
    </div>
  );
};

export default Musics;
