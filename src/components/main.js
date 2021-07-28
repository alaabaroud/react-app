import React from 'react';
import Hornedbeastes from './hornedbeasts';
// import '../App.css';
import HornedData from './HornedData.json';
// import { CardColumns } from 'react-bootstrap';

import Form from 'react-bootstrap/Form';
// import Row from'react-bootstrap/Row';
// import  Container  from 'react-bootstrap';
import { Col,Row,Container } from "react-bootstrap";



class main extends React.Component {
    constructor (props){
    super(props);
    this.state = {
        Numberofhornes:0,
        title: "item.title",
        imageUrl: "item.image_url",
         description: "item.description",
        hornedData : HornedData,
    }
}

ChangeInput = (event) => {
    event.preventDefault();
    this.setState({
        Numberofhornes: parseInt(event.target.value) 
    })
}



    render () {
        return(
            <> 
             <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> Horned Beast Number</Form.Label>
                        <Form.Control as="select" custom onChange={this.submitForm} >
                            <option value="">All</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="100">woow</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                
                            
            <Container>
                
                <Row>

                <h1> Horned Beastes </h1>
                {this.props.data.filter((element) => {
           if (this.state.Numberofhornes===0)
           return true;
           else 
           return this.state.Numberofhornes===element.horns
             }).map((item, index) => {
                    // return (
            //    { this.state.hornedData.map(item => {
                        return (
                            
                            <Hornedbeastes
                            title= {item.title}
                            imgUrl = {item.image_url}
                            description = {item.description}
                        />
                        
            
                        )
                        }
               )}
  
   </Row>
   </Container>
   </>
   

 
             )
    }
}



export default main;