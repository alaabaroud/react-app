import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';

class App extends React.Component{
  render(){
    return(
      <>
      <Header />
            <Main maincomp={<h2> Hello world</h2>}/>
            {/* <Main maincomp={<img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" }  /> */}
            < Main maincomp={<p> lurem epsm </p>}/>

      <Footer />
      </>

    )
  }
}
export default App;
