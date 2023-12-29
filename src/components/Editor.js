import React, { useEffect, useState, useContext } from 'react'
import './Editor.css';
import {Context} from '../Context';
var n = 1;
export default function Editor() {

    var fontAPI = "https://www.googleapis.com/webfonts/v1/webfonts?key=<Your API Key>&sort=popularity";
    const [fonts,setFonts] = useState([]);
    const [size,setSize] = useState([]);
    const {textBoxes,setTextBoxes} = useContext(Context);
    const [fontFamily,setFontFamily] = useState('Roboto');
    const [fontSize,setFontSize] = useState(12);

    
    useEffect(()=>{
        const fetchFonts = async () => {
            await fetch(fontAPI)
            .then(res =>res.json())
            .then(f =>setFonts(f.items))
            .catch(err => console.log(err));
            
        }

        const fontSizes = () => {
            var array = [];
            for (let i = 1; i <= 50; i++) {
                array.push(i);
            }
            setSize(array);
        }

        fetchFonts();
        fontSizes();
        
    },[]);

    const addTextBox = () => {
        n++;
        setTextBoxes([...textBoxes,n]);
        console.log("Text Boxes State:",textBoxes);


    }

    const handleFontFamilychange = async () =>{
        let option = document.getElementById("font");
        let font = option.options[option.selectedIndex].value;
        console.log(font);
        let fontFamilyAPI = `https://www.googleapis.com/webfonts/v1/webfonts?key=<Your API Key>&family=${font}`;
        await fetch(fontFamilyAPI)
        .then(res =>res.json())
        .then(fam => setFontFamily(fam.items[0].family))
        .catch(err => console.log(err));
            
       
    }

    const handleFontSizechange = () => {
        let fsize = document.getElementById("size");
        let fontSize = fsize.options[fsize.selectedIndex].value;
        setFontSize(fontSize);

    }

  return (
    <div id='editor'>
        <label htmlFor="name">Font family:</label>
        <select name="font" id="font" onInput={()=>handleFontFamilychange()}>
            {
                fonts.map((items,i)=>{
                    return <option key={i} value={items.family} >{items.family}</option> 
                })
            }
        </select>
        <br />
        <br />
        <label htmlFor="name">Font size:</label>
        <select name="font-size" id="size" onInput={()=>handleFontSizechange()}>
            {
                size.map((s,i)=>{
                    return <option selected={s===12?true:false} key={i} value={s} >{s} px</option>
                })
            }
        </select>
        <br />
        <br />
        <label htmlFor="color">Color:</label>
        <input type="color" id="color"/>
        <br />
        <br />
        <button onClick={addTextBox} id="addText">Add Text</button>
            
        
     
    </div>
  )
}
