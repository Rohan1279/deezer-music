import './App.css';
import SearchInput from './Components/SearchInput/SearchInput';
import Musics from './Components/Musics/Musics';
import { useEffect, useState } from 'react';
import Player from './Components/Player/Player';

function App() {
  const [currentMusic, setCurrentMusic] = useState({})

  

  const [query, setQuery] =useState('')
  const handleSearchedData = (searchedQuery) =>{
    setQuery(searchedQuery)
  }

  const handleSelectedSong = (selectedMusic) =>{
    // console.log('in App');
    setCurrentMusic(selectedMusic)
    console.log(currentMusic);
  }


  // useEffect(()=>{
  //   setSelectedMusic(currentmusic)
  // },[selectedMusic])
  // console.log(selectedMusic);
  


  // console.log(query)
  return (
    <div className="App">
      <SearchInput onSearchInput={handleSearchedData}></SearchInput>
      <Musics query={query} onSelectSong={handleSelectedSong}></Musics>
      <Player currentMusic={currentMusic}></Player>
    </div>
  );
}

export default App;
