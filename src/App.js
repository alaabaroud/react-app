
// class App extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       show: false,
//       description: '',
//       imgUrl: 'URL',
//       title: '',

//     }
//   }
//   handleData = (title, imgUrl, description, show)=>{
//     this.setState({
//       title: title,
//       imgUrl: imgUrl,
//       description: description,
//       show: show,
  
//     })
//   }

//   

import React from 'react';
import Header from './components/header';

import Main from './components/Main';

import './App.css';

import SelectedBeast from './components/SelectedBeast';

import Footer from './components/footer';
import Data from './components/HornedData.json';

  class App extends React.Component{
      constructor(props) {
        super(props);
        this.state = {
          show: false,
          description: '',
          imgUrl: 'URL',
          title: '',
    
        }
      }

  handleData = (title, imgUrl, description, show) => {
    this.setState({
       title: title,
        imgUrl: imgUrl,
           description: description,
          show: show });
  };

  modal = (show) =>{
     this.setState ({
       show:show
      })
}
  render() {
    return (
      <>
        <Header />
        <SelectedBeast
         title={this.state.title}
          imgUrl={this.state.imgUrl}
           description={this.state.description}
            handleOpen={this.state.show}
            handleClose = {this.modal} />
        <Main data={Data}
         handleData={this.handleData} />
        <Footer />
      </>
    )
  }
}

export default App;
