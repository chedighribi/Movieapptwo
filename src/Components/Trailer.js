import React from 'react'
import {Link} from 'react-router-dom'
 

const Trailer =(props)=> {
    return (
        <div>
            {console.log(props)}
            <h1>Welcome to {props.movies.find(el=>el.id==props.match.params.id).title} trailer</h1>
            <p>{ 
            props.movies.find(el=>el.id==props.match.params.id).video
             }</p>
                <p>{ 
            props.movies.find(el=>el.id==props.match.params.id).description
             }</p>
            <Link to='/'>
            <button>Back home</button>
            </Link>
        </div>
    )
}

export default Trailer 