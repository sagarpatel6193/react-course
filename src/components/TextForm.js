
import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to uppercase!", "success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to lowercase!", "success");
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    } 

    const handleRemoveSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    } 

    const handleCopy = ()=>{
        var text = document.getElementById("Mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");
    } 

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
        <div className="container" style={{color: props.mode=== 'dark'? 'white': 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className='form-control' value={text} onChange={handleOnChange} name="" id="Mybox" rows="10" style={{backgroundColor: props.mode=== 'dark'? '#002b4a': 'white', color: props.mode=== 'dark'? 'white': 'black'}} ></textarea>
            </div>
            <button className="btn btn-primary m-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary m-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary m-1" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-primary m-1" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary m-1" onClick={handleRemoveSpace}>Remove Extra space</button>
        </div>
        <div className="container mt-4"  style={{color: props.mode=== 'dark'? 'white': 'black'}}>
            <h2>Your text summary</h2>
            <h6>{text.split(" ").length} words and {text.length} characters</h6>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Perview</h2>
            <p>{text.length>0?text:"Enter somthing in the textbox above to preview it here..."}</p>
        </div>
        </>
    )
}
