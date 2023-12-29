import React,{useContext} from 'react'
import './Canvass.css';
import {Context} from '../Context';
import Draggable from 'react-draggable';

export default function Canvass() {


  const {textBoxes,setTextBoxes} = useContext(Context);


  return (
    <div id='canvas'>
    
      {
        textBoxes.map((v,i)=>{
          return (
            <Draggable>
              <div id="input" key={i}>
                <textarea className='texts' placeholder='Text Box' id={i} cols="20" rows="2"></textarea>
                {/* <input  type="text" /> */}
              </div>
            </Draggable>
          )
        })
      }

    
    </div>
  )
}
