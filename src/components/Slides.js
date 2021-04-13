import React, {useState} from 'react';

function Slides({slides}) {
    const [count, setCount]=useState(0)

    const onclickRestarthandle =()=>{
      setCount(0)
    }
    const onclickPreHandle=()=> {
      setCount(count-1)
    }
    const onclickNextHandle=()=>{
      setCount(count+1)
    }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={onclickRestarthandle}>Restart</button>
                <button disabled={count===0 ? true :false} data-testid="button-prev" className="small" onClick={onclickPreHandle}>Prev</button>
                <button disabled={count===slides.length-1 ? true:false} data-testid="button-next" className="small" onClick={onclickNextHandle}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[count].title}</h1>
                <p data-testid="text">{slides[count].text}</p>
            </div>
        </div>
    );

}

export default Slides;
