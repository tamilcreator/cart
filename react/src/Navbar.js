import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Cart from './Cart';
import Single from './Single';
import Product from './Product';
import Cingle from './Cingle';
import Test from './Test';
import React from 'react';
import { Navbar, Nav, Container ,Form,Button,FormControl } from 'react-bootstrap';
import axios from 'axios';
import * as Icon from 'react-bootstrap-icons';
import Badge from '@mui/material/Badge';


class Navba extends React.Component {
  state = { persons:[]}

componentDidMount(){
  axios.get('http://localhost:8080/cart').then(res =>{
    console.log(res.data);
    const persons = res.data.data;
    this.setState({persons});
    console.log(this.state.persons.length);


    
  })

}
  
render() {
	return (
	<Router>
		<div className="Navbar">

			<Navbar bg="light" expand="lg" sticky="top">
  <Container fluid>
    <Navbar.Brand href="/">Cart App</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ml-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Product</Nav.Link>
        <Nav.Link href="/cart">Cart {this.state.persons.length == 0 ? <Badge badgeContent={this.state.persons.length} color="primary"><Icon.Minecart size={25}/></Badge>: <Badge badgeContent={this.state.persons.length} color="primary"><Icon.MinecartLoaded size={25}/></Badge> }</Nav.Link>
        
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
		<Routes>
				<Route exact path='/' element={< Product />}></Route>
				<Route exact path='/cart' element={< Cart />}></Route>
        <Route exact path='/single/:id' element={< Single />}></Route>
        <Route exact path='/cingle/:id' element={< Cingle />}></Route>
				<Route exact path='/test' element={< Test />}></Route>
		</Routes>
		</div>
	</Router>
);
}
}

export default Navba;