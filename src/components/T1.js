import { Component } from "react";
import './text.css';
import './script'


class T1 extends Component
{
    countWords= () => {
        let input = document.getElementById("inputText").value;
        let wordsArray=input.split(' ');
        console.log(wordsArray);
        let len = wordsArray.length;
        if(wordsArray[wordsArray.length-1] ===""){
            len--;
        }
        document.getElementById("output").innerText = 'Number of words = ' + len;
    }
    render() {
        
        return(
            <div id="outer">
                <textarea id='inputText' rows="5" cols="50" class="rounded" onKeyUp={this.countWords} ></textarea>
                <div id="output"></div>
                <script src="script.js"></script>
            </div>
        );
    }
}

export default T1;