import React from 'react'
import {Card,Button} from 'react-bootstrap'
import '../App.css';
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom'
 


export default function MovieCard({el, handleDelete }){

  const off =(e)=>{
    e.preventDefault();
    handleDelete(el.id)
    }

    return (
        <div className='Movie'>
            <Card style={{ width: '300px'}}>
              <Link to={`/trailer/${el.id}`}>
  <Card.Img  src={el.posterUrl} /> </Link>
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <ReactStars value={el.rate}/>
    <Button className='btn' onClick={off}>delete</Button>

  </Card.Body>
</Card>
        </div>
    )

}
