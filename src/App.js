import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
 
import selectedBeast from './components/selectedBeast';

import './index.css';
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      description: '',
      src: '',
      title: '',
      numOfclick: 0,

    }
  }

  handleopen = () => {
    this.setState({
            show: true

    })
  }

  handleClose = () => {
    this.setState({
            show: false


    })
};

handleData = (title, src, description, numOfclicks)=>{
  this.setState({
    title: title,
    src: src,
    description: description,
    numOfclicks: numOfclicks,

  })
}
  

  render(){
    return(
      <>
      <Header />
     
      <Main

      handleopen={this.handleopen}
      handleData={this.handleData}
      />
      
      <selectedBeast

      show ={this.state.show}
      handleClose = {this.handleClose}
      description = {this.props.description}
      
      title = { this.state.title
      }
      src = {this.state.src}

      numOfclicks={this.props.numOfclicks}
      />

      
      <Footer  />
      
       
     
      </>

    )
  }


  
}
export default App;
