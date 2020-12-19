import React from 'react'
import {Card,Button} from 'react-bootstrap'
import '../App.css';
import ReactStars from "react-rating-stars-component";
 


export default function MovieCard({el, handleDelete }){

  const off =(e)=>{
    e.preventDefault();
    handleDelete(el.id)
    }

    return (
        <div className='Movie'>
            <Card style={{ width: '300px'}}>
  <Card.Img  src={el.posterUrl} />
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Card.Text>{el.description} </Card.Text>
    <ReactStars value={el.rate}/>
    <Button className='btn' onClick={off}>delete</Button>

  </Card.Body>
</Card>
        </div>
    )

}
