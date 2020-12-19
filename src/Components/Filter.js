import React from 'react';

 const Filter = ({setFiltredname,setFiltredrate}) => {


return (

    <div className='topbar'>
        <div>
       <label>Look for a movie</label> <input type='text' placeholder='search a movie' onChange={(e)=>setFiltredname(e.target.value)} /></div>
        <div> <label>select a rating</label> <select name="rating" onChange={(e)=>setFiltredrate(e.target.value)}>
    <option value="1">★</option>
    <option value="2">★★</option>
    <option value="3">★★★</option>
    <option value="4">★★★★</option>
    <option value="5">★★★★★</option>
</select>
</div>
    </div>
)

} 
export default Filter

