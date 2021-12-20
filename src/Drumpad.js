import React, { Component } from "react";
export default class Drumpad extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress.bind(this));
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress.bind(this));
  }
  handleKeyPress(e){
      if(e.keyCode==this.props.padBank.keyCode){
          this.playSound(e);
          
      }
  }
  //playSound method

    playSound(event){
        let sound = document.getElementById(this.props.padBank.keyTrigger);
        sound.currentTime = 0;
        sound.play();
        this.props.updateDisplay(this.props.padBank.id.replace(/-/g, ' '));
  }
   
  
  render() {
    
    // console.log("this one in padbank keycode"+this.props.padBank.keyCode);
    // console.log("this is id :"+this.props.padBank.id);
    return (
      <div
        className="drum-pad"
        id={this.props.padBank.id}
        onClick={this.playSound.bind(this)}
      >
      {this.props.padBank.keyTrigger}
        <audio
          className="clip"
          id={this.props.padBank.keyTrigger}
          src={this.props.padBank.url}
        ></audio>
      </div>
    );
  }
}
