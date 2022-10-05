import React, { useEffect, useState } from "react";
import Music from "../Music/Music";
const Musics = ({ query, onSelectSong }) => {
  const [musics, setMusics] = useState([]);
  const [selectedMusic, setSelectedMusic] = useState({})
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
  }, [query,selectedMusic]);
  // console.log(musics)
  const handlePlayer = (id) => {
    const found = musics.find(music => music.id === id)
    setSelectedMusic(found);
    onSelectSong(selectedMusic);
  };
  console.log(selectedMusic)

  // musics?.map(music => console.log(music))
  return (
    <div className="grid grid-cols-4">
      {musics?.map((music) => (
        <Music music={music} handlePlayer={handlePlayer} />
      ))}
    </div>
  );
};

export default Musics;
