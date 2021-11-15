import React, {useState} from 'react'


export default function Textform(props) {
    const [text, setText] = useState(" ");
    // text = "new text"; // wrong way to change the state here
    // setText = "new text"; // wrong way to change the state here
    const handleUpClick = () => {
        console.log(text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase !","success")
    }
    const handleloClick = () => {
        console.log(text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase !","success")
    }
    
    const handlespaces =()=>{
        console.log(text);
        let newText = text.trim();
        setText(newText)
        props.showAlert("Text trimmed !","success")
    }
    
    const handleOnChange = (event) => {
        console.log("OnChange");
        setText(event.target.value)
    }
   
 
  
    return ( 
     <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#04020d'}} >
     <h1> {props.heading} </h1> 
    <div className = "mb-3" >
        <textarea className = "form-control" value={text}  style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#04020d' }} onChange={handleOnChange} id = "exampleFormControlTextarea1" rows = "8" > </textarea> 
        </div>  
        <button className = "btn btn-primary mx-2" onClick={handleUpClick} > Convert to Uppercase </button> 
        <button className = "btn btn-primary" onClick={handleloClick} > Convert to Lowercase </button> 
        <button className = "btn btn-primary mx-2" onClick={handlespaces}  > Trim sentence</button> 

        </div>

        <div className="container my-4"  style={{color:props.mode==='dark'?'white':'#04020d'}} >
            <h2>Your text summary</h2>
            <p>{text.split(" ").length } words and {text.length} characters</p>
            <p>{ 0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview"}</p>
        </div>
        </>
    )
}  