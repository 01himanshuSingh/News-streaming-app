import React, { useEffect, useState } from 'react'
import Carding from './Carding';

function Newsapp() {
    const [search, setSearch] = useState('india');
    const [newsData, setNewsData] = useState(null);
 const Api_key = '62ab592cfb3c4d2ea78ee2b3911355a3'; 
  
    // Fetch data from the API based on the search query
    const getData = async () => {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${Api_key}`);
      const jsonData = await response.json();
      console.log(jsonData);
      setNewsData(jsonData.articles);
    };
    
    // This function is triggered when a user clicks a button or enters a search
    const userInput = (event) => {
      setSearch(event.target.value);
    };
  
   
  return (

    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">TAZI KHABRE</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <button onClick={() => setSearch('sport')} className="btn btn-link">Sport</button>
            </li>
            <li className="nav-item">
              <button onClick={() => setSearch('Politics')} className="btn btn-link">Politics</button>
            </li>
            <li className="nav-item">
              <button onClick={() => setSearch('Entertainment')} className="btn btn-link">Entertainment</button>
            </li>
            <li className="nav-item">
              <button onClick={() => setSearch('Health')} className="btn btn-link">Health</button>
            </li>
            <li className="nav-item">
              <button onClick={() => setSearch('Fitness')} className="btn btn-link">Fitness</button>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0" onSubmit={(e) => { e.preventDefault(); getData(); }}>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} value={search} />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    
<div>
    {newsData?
    <Carding data={newsData}/>
  //  <Card data={newsData}/>
   : null}
</div>

</>
  )
}

export default Newsapp