import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
class selectedBeast extends React.Component{

    render(){

        return(
            <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Dialog >
  <Modal.Header  closeButton>
    <Modal.Title>{this.props.Title}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <Modal.Img  onClick={this.incremenclicks}  src={this.props.imgUrl} style={{ width: '18rem' }} />
    <p> Likes : 🦄 : {this.props.numOfclicks} </p>
    <p>{this.props.description}</p>


  </Modal.Body>

  <Modal.Footer>
    <Button onClick ={this.props.handleClose}>Close</Button>
    
  </Modal.Footer>
</Modal.Dialog>
</Modal>

        )
    }
}
export default selectedBeast;