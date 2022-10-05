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
  const handlePlayerSong = (selectedMusic) =>{
    console.log('Before=> ',selectedMusic.title);
    setCurrentMusic(selectedMusic)
    console.log('After=> ',currentMusic.title);
  }
  return (
    <div className="App">
      <SearchInput onSearchInput={handleSearchedData}></SearchInput>
      <Musics query={query} onSelectPlayerSong={handlePlayerSong}></Musics>
      {/* <Player currentMusic={currentMusic}></Player> */}
    </div>
  );
}

export default App;
