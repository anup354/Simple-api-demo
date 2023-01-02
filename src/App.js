
import './App.css';
// import Header  from './Components/Header';
import Modal from 'react-modal'
import { useState } from 'react';
function App() {
  const [modalIsOpen,setmodalIsOpen]=useState(false)
  return (
    <div className="App">
      <button className='bg-black' onClick={()=>setmodalIsOpen(true)} >open</button>
      <Modal isOpen={modalIsOpen}>
      <h2>title</h2>
      <p>Body</p>
      <div><button onClick={()=>setmodalIsOpen(false)} >Close</button></div>
      </Modal>
      {/* <Header title="Hello Hi"/> */}
      {/* <Header /> */}
    </div>
  );
}

export default App;
