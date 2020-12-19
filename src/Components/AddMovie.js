
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const AddMovie = ({movies, setMovies}) => {


  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  }

  const [newtitle,setNewtitle]=useState('')
  const [newdescription,setNewdescription]=useState('')
  const [newrate,setNewrate]=useState(0)
  const [newposter,setNewposter]=useState('')

  const handleAdd =()=>{
    setMovies ([...movies,{title:newtitle,description:newdescription,rate:newrate,posterUrl:newposter,id:Date.now()}])
    setNewtitle('')
    toggle()
  }

  return (
    <div>
      <Button class="btn-secondary" onClick={toggle}>Add Movie</Button>
      <Modal isOpen={modal} toggle={toggle} className='popout' >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
<label>Title</label> <input type='text' placeholder='write the name of the movie' onChange={(e)=>setNewtitle(e.target.value)} /> <br />
           <label>Description</label> <input type='text' placeholder='write the description of the movie' onChange={(e)=>setNewdescription(e.target.value)} /> <br />
           <label>Poster</label> <input type='text' placeholder='add the link of the poster' onChange={(e)=>setNewposter(e.target.value)} /> <br />
           <label>Rate</label> <input type='text' placeholder='give a rate to the movie' onChange={(e)=>setNewrate(e.target.value)} /> <br /> 
          <br />
        
          <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>Nested Modal title</ModalHeader>
            <ModalBody>Stuff and things</ModalBody>
    
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button className='btn' onClick={handleAdd}>Submit</Button>
          <Button className='btn' onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddMovie;

