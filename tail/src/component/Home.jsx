import { useState } from 'react';
import './home.css';

function Home() {
    const [str, setStr] = useState("");

    function handleInputChange(event) {
        setStr(event.target.value);
    }

    function convertToUppercase(event) {
        event.preventDefault();
        setStr(str.toUpperCase());
    }

    function convertToLowercase(event) {
        event.preventDefault();
        setStr(str.toLowerCase());
    }

    function calculateWordCount(event) {
        event.preventDefault();
        const words = str.trim().split(/\s+/);
        const filteredWords = words.filter(word => word !== "");
        alert(`Word Count: ${filteredWords.length}`);
    }
    function downloadText(event) {
        event.preventDefault();
        const element = document.createElement('a');
        const file = new Blob([str], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = 'transformed-text.txt';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    return (
        <>
            <center>
                <h1 className="heading">TextTransform</h1>
            </center>
            <form>
            <div className="textarea-container">
             <textarea
                   id="txt"
                    // value={str}
                  onChange={handleInputChange}
                   placeholder="Enter text"
                  rows="20" 
                  cols="80" 
    />
</div>



                <div className="button-container">
                    <button id="btn" onClick={convertToUppercase}>Convert To Uppercase</button>
                    <button id="btn1" onClick={convertToLowercase}>Convert To Lowercase</button>
                    <button id="btn2" onClick={calculateWordCount}>Word Count</button>
                    <button id="btn3" onClick={downloadText}>Download Text</button>
                </div>
                <p className="output-text">{str}</p>
            </form>
        </>
    );
}

export default Home;
