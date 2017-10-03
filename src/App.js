import React, { Component } from 'react';

import './App.css';


function LetterDisplay(props){
  return (
    <div>
    {props.letter}
    </div>
  );
}

function Button(props){
return (
  <button value={props.direction} onClick={props.onClick}>
{props.direction}
</button>
);
}
var i = 0;
  var myStyle = {
      width:'50%',
      display:'inline-block'
    };
class App extends Component {
  
  constructor(){
    super();
  
    this.state = {
      letter : 'A',
      data: [
        {
            id:1,
            pic: '',
            alpha: 'a'
        },
        {
            id:2,
            pic: '',
            alpha: 'b'
        },
           {
            id:3,
            pic: '',
            alpha: 'c'
        },
           {
            id:4,
            pic: '',
            alpha: 'd'
        },
           {
            id:5,
            pic: '',
            alpha: 'e'
        },
           {
            id:6,
            pic: '',
            alpha: 'f'
        },
           {
            id:7,
            pic: '',
            alpha: 'g'
        },
        {
            id:8,
            pic: '',
            alpha: 'h'
        },
           {
            id:9,
            pic: '',
            alpha: 'i'
        },
           {
            id:10,
            pic: '',
            alpha: 'j'
        },
           {
            id:11,
            pic: '',
            alpha: 'k'
        },
           {
            id:12,
            pic: '',
            alpha: 'l'
        },
       {
            id:13,
            pic: '',
            alpha: 'm'
        },
        {
            id:14,
            pic: '',
            alpha: 'n'
        },
           {
            id:15,
            pic: '',
            alpha: 'o'
        },
           {
            id:16,
            pic: '',
            alpha: 'p'
        },
           {
            id:17,
            pic: '',
            alpha: 'q'
        },
           {
            id:18,
            pic: '',
            alpha: 'r'
        },
       {
            id:19,
            pic: '',
            alpha: 's'
        },
        {
            id:20,
            pic: '',
            alpha: 't'
        },
           {
            id:21,
            pic: '',
            alpha: 'u'
        },
           {
            id:22,
            pic: '',
            alpha: 'v'
        },
           {
            id:23,
            pic: '',
            alpha: 'w'
        },
           {
            id:24,
            pic: '',
            alpha: 'x'
        },
            {
            id:25,
            pic: '',
            alpha: 'y'
        },
           {
            id:26,
            pic: '',
            alpha: 'z'
        }
    ]
    }
    this.handleAlphabet = this.handleAlphabet.bind(this);
  }



  handleAlphabet (arg){
    var len =   this.state.data.length;
    var targetVal = arg.target.value;
    //console.log(targetVal);
    if(targetVal === 'Next'){
      (i>=len-1) ?   i= 0 : i = ++i ;
    }else{
      (i<=0) ? i= len-1 :i = --i ;
    }
      this.setState({
        letter: this.state.data[i].alpha.toUpperCase()
      });
  }
renderbutton(arg){
  return <Button direction={arg} onClick={this.handleAlphabet}/>;
}

  render() {
    return (
      <div className="App">
      <LetterDisplay letter={this.state.letter}/>
       {this.renderbutton('Prev')}
       {this.renderbutton('Play Sound')}
        {this.renderbutton('Next')}
<div>
<div style={myStyle}></div>
<div style={myStyle}>{this.state.letter}</div>
</div>

      </div>
    );
  }
}

export default App;
