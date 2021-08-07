import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import selectedBeast  from './selectedBeast ';

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
      };
  
      getData=() =>{
        this.props.handleopen();
        this.props.handleData(this.props.title,this.props.imgUrl,this.props.description,this.incremenclicks());
      }

      

    render (){
        return(
          
            <>
           <Col>

            

<Card className="card" onClick={this.getData}>

  <Card.Img  onClick={this.incremenclicks} variant="top" src={this.props.imgUrl} style={{ width: '18rem' }} />

  <Card.Body>
    <Card.Title>{this.props.description}</Card.Title>
    <Card.Text>
     Number of Likes 🦄 : {this.state.numOfclicks}
    
      </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
</Col>
          

            </>
        )
    }

}

export default Hornedbeastes;