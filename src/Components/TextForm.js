import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function TextForm() {

  // Here setText will set the new value to the text
  const [text, setText] = useState("")

  const handleOnChangeText = (e) =>{
    setText(e.target.value)
  }

  const  handleOnClickUpperCase = ()=>{
    let upperCaseText = text.toUpperCase()
    setText(upperCaseText)
  }
  
  const handleOnClickLowerCase = ()=>{
    let upperCaseText = text.toLowerCase()
    setText(upperCaseText)
  }

  const handleOnClickTitle = ()=>{

    if(text === ""){
       alert("Text must be filled out");
    }else
    {
  let titleCase = text.split(' ').map(word => word[0].toUpperCase() + word.substring(1).toLowerCase()).join(' ');
setText(titleCase)
  
  }
   
  }

  const handleOnClickSentence = ()=>{
   let sentenceCase = text.toLowerCase().replace(/\.\s+([a-z])[^\.]|^(\s*[a-z])[^\.]/g, 
    s => s.replace(/([a-z])/,s => s.toUpperCase()))    
   setText(sentenceCase)
  }
  
  const handleOnClickClear = ()=>{
    setText("")
  }

  const handleOnClickStartSpeech = ()=>{
   let speech = new SpeechSynthesisUtterance()
   speech.lang = "en-US";
   speech.text = text
    speech.rate = 0.9;
    speech.pitch = 1;
   window.speechSynthesis.speak(speech);
  }
  const handleOnClickPauseSpeech = ()=>{
   let speech = new SpeechSynthesisUtterance()
   window.speechSynthesis.pause(speech);
  }
  const handleOnClickResumeSpeech = ()=>{
   let speech = new SpeechSynthesisUtterance()
   window.speechSynthesis.resume(speech);
  }
  const handleOnClickCancelSpeech = ()=>{
   let speech = new SpeechSynthesisUtterance()
   window.speechSynthesis.cancel(speech);
  }

  const handleOnClickCopy = ()=>{
  let text = document.getElementById("textarea")
  text.select()
  text.setSelectionRange(0, 9999)
  navigator.clipboard.writeText(text.value)
    
  }



  return (
    <>
    <div>
      <Form className="form card m-5 p-3">
          <h2 className='text-center'>Enter text to analyze</h2>
        <Form.Group className="card-body" controlId="exampleForm.ControlTextarea1">

<>
        <Form.Control className='overflow-auto'
          id='textarea'
            as="textarea"
            rows={7}
            value={text}
            onChange={handleOnChangeText}
          />

        <span id='copyButton' onClick={handleOnClickCopy} className='cursor-pointer' >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
        </svg>
        </span>

        <span id='copy'>copy</span>

</>
        </Form.Group>

        <div className='text-center '>

        <Button className="m-2 w-30 "
          variant="primary"
          onClick={handleOnClickUpperCase} //Event handling
        >Uppercase</Button>

        <Button className=" m-2 w-30"
          variant="primary"
          onClick={handleOnClickLowerCase} //Event handling
        >Lowercase</Button>

        <Button className=" m-2 text-center w-30"
          variant="primary"
          onClick={handleOnClickTitle} //Event handling
        >Tiltle Case</Button>

        <Button className=" m-2 text-center w-30"
          variant="primary"
          onClick={handleOnClickSentence} //Event handling
        >Sentence Case</Button>

        <Button className=" m-2 text-center w-30"
          variant="primary"
          onClick={handleOnClickClear} //Event handling
        >Clear Text</Button>

        </div>

        <div className='text-center '>
        <Button className=" m-2 text-center w-30"
          variant="warning"
          onClick={handleOnClickStartSpeech} //Event handling
        >Start Speech</Button>

        <Button className=" m-2 text-center w-30"
          variant="warning"
          onClick={handleOnClickPauseSpeech} //Event handling
        >Pause Speech</Button>
        <Button className=" m-2 text-center w-30"
          variant="warning"
          onClick={handleOnClickResumeSpeech} //Event handling
        >Resume Speech</Button>

        <Button className=" m-2 text-center w-30"
          variant="warning"
          onClick={handleOnClickCancelSpeech} //Event handling
        >Cancel Speech</Button>
        </div>

      </Form>
 
    </div>

    <div className="container m-5 p-3 card">
      <h2>Text Summary</h2>                                                     
           <p>Number of Words: {text.trim().split(" ").filter((word)=>{
        return word !== ""
      }).length}</p>
      <p>Number of Characters (no spaces): {text.replace(/ /g,'').length }</p>
      <p>Number of Characters (with spaces): {text.length }</p>
      
      <p>Reading time: ~ {Math.floor(0.008 * text.split(" ").length)} 
                         {Math.floor(0.008 * text.split(" ").length) > 1 ? " minutes " : " minute " }
        </p>
    </div> 
    <div className="container m-5 p-3 card">
    <h2>Preview</h2>
    <p>{text}</p>
    </div> 



    </>
  );
}

export default TextForm;



    {/* <div className="container m-5 p-3 card">
      <h2>Text Summary</h2>                                                     
      <p>Number of Words: {text.split(" ").length === 1 || text === " " || text === "  " || text === "   " || text === "    " ?  text.split(" ").length = 0
                                : text.trim().split(" ").length = text.trim().split(" ").length }</p>
      <p>Number of Characters (no spaces): {text.replace(/ /g,'').length }</p>
      <p>Number of Characters (with spaces): {text.length }</p>
      
      <p>Reading time: ~ {Math.floor(0.008 * text.split(" ").length)} 
                         {Math.floor(0.008 * text.split(" ").length) > 1 ? " minutes " : " minute " }
        </p>
    </div>  */}
 

