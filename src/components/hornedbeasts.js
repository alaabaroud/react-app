import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

class Hornedbeastes extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            numOfclicks : 0
        }
    }
    
      incremenclicks = () => {
        this.setState({
            numOfclicks: this.state.numOfclicks + 1
        })
    }

    render (){
        return(
            <>
            {/* <h2> {this.props.title}</h2>
            <img 
            src= {this.props.imgurl}
            alt= {this.props.title}
            title= {this.props.title}/>
            <p>{this.props.description}</p> */}


            

<Card className="card">

  <Card.Img  onClick={this.incremenclicks} variant="top" src={this.props.imgurl} style={{ width: '18rem' }} />

  <Card.Body>
    <Card.Title>{this.props.description}</Card.Title>
    <Card.Text>
     Number of votes 🦄 : {this.state.numOfclicks}
    
      </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

          

            </>
        )
    }

}

export default Hornedbeastes;