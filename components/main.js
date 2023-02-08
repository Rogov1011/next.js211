import React, { useEffect, useState } from 'react';
import MoviesDescription from './movies';

function FilmList () {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    useEffect(() => {
        const fetchData = async () =>{
            const response = await fetch('https://www.omdbapi.com/?apikey=a2b07930&s=new');
            const data = await response.json();
            console.log(data);
            setMovies(data.Search);
        }
        fetchData();
    },[]);

    const searchMovie = async(e) => {
        e.preventDefault();
        try{
            const url = `https://www.omdbapi.com/?apikey=a2b07930&s=${query}`;
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.Search);
        }
        catch(e){
        }
    }
    const changeHandler=(e) => {
        setQuery(e.target.value);
    }
    

    return(
        <>
            <h1 className='title'><p>ФИЛЬМЫ</p></h1>
        <header>
            <form className='form' onSubmit={searchMovie}>
                <input className='input' 
                type="search"
                placeholder='Поиск'
                name="query" 
                value={query} 
                onChange={changeHandler}/>
                <button className='button' type="submit">Поиск</button>
            </form>
        </header>
        <div className='films'>
        {movies.map(movie => <MoviesDescription movie={movie} key={movie.imbID}/>)}
        </div>
        </>
    )
    
}


export default FilmList;