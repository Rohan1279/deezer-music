import React from "react";

const SearchInput = (props) => {
    const queryHandler = (event) => {
        const searchedQuery = event.target.value; 
        props.onSearchInput(searchedQuery)
    }
  return (
    <div>
      <h1 className='text-4xl font-bold my-5'>Deeezer!!!</h1>
      <h2 className='text-3xl font-semibold my-4 animate-pulse '>Pay or GTFO ;(</h2>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        onChange={queryHandler}
      />
      <br />
      {/* <button className="btn mt-4">Search</button> */}
    </div>
  );
};

export default SearchInput;
