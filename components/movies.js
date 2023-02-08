import React from "react";

const MoviesDescription = ({movie:{Year, Title, Poster}}) => {
   return (<div className="movie">
    <img src={Poster} alt={Title} />
    <div className="movie_colomn">
        <h3 className="movie_title">{Title}</h3>
        <h5 className="movie_year">{Year}</h5>
    </div>
   </div>
)}



export default MoviesDescription