import './App.css';
import React, {useState} from 'react'
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie'
import Filter from './Components/Filter'



function App() {
  const [movies,setMovies]=useState([{
  title:'Le Fabuleux Destin d Amélie Poulain', 
  description:'is a 2001 romantic comedy film directed by Jean-Pierre Jeunet. Written by Jeunet with Guillaume Laurant, the film is a whimsical depiction of contemporary Parisian life, set in Montmartre. It tells the story of a shy waitress, played by Audrey Tautou, who decides to change the lives of those around her for the better while struggling with her own isolation. ', 
  posterUrl:'https://upload.wikimedia.org/wikipedia/en/5/53/Amelie_poster.jpg', 
  rate: 4 ,
  id:1},
  {
    title:'Avengers: Endgame', 
    description:'Le Titan Thanos ayant réussi à s approprier les six Pierres d Infinité et à les réunir sur le Gantelet doré, a pu réaliser son objectif de pulvériser la moitié de la population de l Univers d un claquement de doigts. Les quelques Avengers et Gardiens de la Galaxie ayant survécuespèrent réparer le méfait de Thanos', 
    posterUrl:'https://images-na.ssl-images-amazon.com/images/I/91Lpv1aIkmL._AC_SY679_.jpg', 
    rate: 5 ,
    id:2},
    {
      title:'La vita è bella', 
      description:'En 1938, Guido, jeune homme plein de gaieté, rêve d ouvrir une librairie malgré les tracasseries de l administration fasciste. Il tombe amoureux de Dora, institutrice étouffée par le conformisme familial et l enlève le jour de ses fiançailles. Quelques années plus tard, Guido et Dora ont un fils, Giosué, mais les lois raciales sont entrées en vigueur et Guido est juif. Il est déporté avec son fils.', 
      posterUrl:'https://images-na.ssl-images-amazon.com/images/I/51ZFYuCDg3L._AC_SY445_.jpg', 
      rate: 5 ,
      id:3
    },
    {
      title:'Spirited away', 
      description:'La petite Chihiro accompagne ses parents dans une promenade sylvestre qui doit les conduire vers leur nouvelle maison en banlieue. Alors qu elle prend un raccourci à travers un tunnel peu emprunté, la petite famille se retrouve soudain en territoire inconnu. Le temps de retrouver leur chemin, ils font une halte dans un gigantesque restaurant en plein air, totalement déserté.', 
      posterUrl:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLN0ttAoQelKvIDCiBTb4TOOhfMf61nAQt-a4rAvPzZ06XVKe6', 
      rate: 5 ,
      id:4
    }])

    const [filtredname,setFiltredname]=useState('')

    const [filtredrate,setFiltredrate]=useState(0)

    const handleDelete=(idmovie)=>{
      setMovies(movies.filter((el)=> (el.id!==idmovie) 
  
      ))
    }

  return (
    <div className="App">
      <Filter setFiltredname={setFiltredname} setFiltredrate={setFiltredrate}/> 
      <div className='bottom' >
      <MovieList movies={movies} filtredname={filtredname} filtredrate={filtredrate} handleDelete={handleDelete} />
      <AddMovie movies={movies} setMovies={setMovies} />
      </div>
    </div>
  );
}

export default App;