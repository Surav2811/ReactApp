import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("Enter text here")
  return (
    <div>    
        <div>
            <h2>{props.heading}</h2>

              <textarea className="form-control" id="textArea" rows="10"></textarea>
        </div>
        <button className="btn btn-primary my-5">UpperCase</button>
    </div>
  )
}
