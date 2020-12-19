import React from 'react'
import MovieCard from './MovieCard'

export default function MovieList({movies,filtredrate,filtredname,handleDelete }){

    return (
        <div className='ListM'>
            {movies.filter((el)=>el.title.toLowerCase().includes(filtredname.toLowerCase().trim()) && el.rate >= filtredrate).map((el,index)=>{return <MovieCard el={el} key={index} handleDelete={handleDelete} /> })}
        </div>
    )

}