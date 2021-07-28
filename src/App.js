import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import Filter from './components/filter';

import './index.css';


// import SelectedBeast from './components/selectedBeast';

class App extends React.Component{

  

  render(){
    return(
      <>
      <Header />
      <Filter/> 
      <Main/>
      {/* <SelectedBeast/> */}
      
      <Footer />
      </>

    )
  }


  
}
export default App;
