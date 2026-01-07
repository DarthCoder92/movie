import React from "react";

const Card = (props) => {


    return (<div className="px-4 py-4 border-2 border-white rounded-lg w-full lg:w-1/2 grid grid-cols-2 flex justify-center">
        
        <img className="rounded-lg" src={props.movie.Poster} alt="Movie Poster"/>
        <div className="px-2 flex flex-wrap">
        <h1 className="text-left">{props.movie.Title}</h1>
        <div className=" text-left text-2xl font-bold text-white">
        <h3 className=""><span className="text-pink-500">Genre: </span>{props.movie.Genre}</h3>
        <h3><span className="text-blue-500">Year: </span>{props.movie.Year}</h3>
        <h3><span className="text-orange-500">Cast: </span>{props.movie.Actors}</h3>
        </div>
        </div>
    </div>)
}

export default Card;