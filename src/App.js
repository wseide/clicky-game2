import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import images from "./images.json";

class App extends React.Component {
  
  state ={
    images,
    score: 0,
    topscore: 0,
    clickedarray: []
  }

   randomOrder = () => {
    return this.state.images.sort(() => Math.random() - 0.5);
  };

  handleImageClick = event => {
    const currentLegend = event.target.id;

    const legendClicked = this.state.clickedarray.indexOf(currentLegend) > -1;
    if (legendClicked){
      this.setState({
        images: this.randomOrder(),
        clickedarray:[],
        score:0,
      })
    alert("Sorry, try Again.")
    }
    else {
      this.setState({
        images: this.randomOrder(),
        clickedarray:this.state.clickedarray.concat(currentLegend),
        score:this.state.score + 1
      })
    }

    //update topscore
    if (this.state.score > this.state.topscore){
      this.setState({ topscore: this.state.score});
    }
    if (this.state.score === 11){
      alert("YOU WON!!! GREAT JOB!!!! NOW DO IT AGAIN.")
      this.setState({
        images: this.randomOrder(),
        clickedarray:[],
        score:0,
      })
    }
    
  }
  
  render() {
  return (
    <div>
    <Navbar score={this.state.score} topscore={this.state.topscore}/>
    <Header />
    <Main handleimageclick={this.handleImageClick} />
    <Footer />
    </div>
  );
  }
}

export default App;
