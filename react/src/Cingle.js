import axios from 'axios';
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';
import Stack from '@mui/material/Stack';
import * as Icon from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button'



class Cingle extends React.Component {

state = { persons:[],Cart:''}

componentDidMount(){
    var url = window.location.pathname;
var id = url.substring(url.lastIndexOf('/') + 1);
console.log(id);
	axios.get('http://localhost:8080/cart/'+ id).then(res =>{
        // console.log(res.data);
        const persons = res.data.data;
        this.setState({persons});
        console.log(this.state.persons);
})}

handleChange = event=> {
    let id = event.currentTarget.value;
    console.log(id);
    this.setState(prevState => ({
    persons: {                   
        ...prevState.persons,    
        Cart: id      
    }
}))
  this.setState({ Cart: event.currentTarget.value });
  console.log(this.state);
}
onSend = event =>{
    var url = window.location.pathname;
var id = url.substring(url.lastIndexOf('/') + 1);
const Cart = this.state.Cart; 
const article = {Cart : Cart};
console.log(article);       
    const response = axios.put('http://localhost:8080/cart/'+id, article);
   window.location.href = '/cart';



  }




render(){

return(
    
<Container>
      
      <Row class= 'row'>
        
        <Col xs={4} >
<img class = 'fit-image' src = {this.state.persons['Image Src']}/>
        </Col>

        <Col xs={4}>
<Stack gap={4} className="col mx-auto bg-light border" >
<h3>{this.state.persons.Title}</h3>
<h4><span class= 'span'>-10%</span> ${this.state.persons['Variant Price']}</h4>
<p>{this.state.persons.Body}</p>


      
    </Stack>




        </Col>
       < Col xs={3}>
<Stack gap={4} className="col mx-auto bg-light border" >
<h3 >${this.state.persons['Variant Price']}</h3>
<p>FREE delivery  on first order. Order within 21 hrs 16 mins.</p>
<h5 style={{color: "green"}}>In stock.</h5>
<h6>Sold by<span style={{color: "darkblue"}}> Appario Retail Private Ltd</span> </h6>
      <div>
<label style={{alignItems:'center'}}>
          Quantity:  
          <select value={this.state.persons.Cart} onChange={this.handleChange} style={{borderRadius: '5px'}}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </label>

      </div>
  <Button variant="warning" onClick = {this.onSend}>Add to cart</Button>{' '}
      
    </Stack>




        </Col>
      </Row>
    </Container>




    	)
}
}
export default Cingle;
