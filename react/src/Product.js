import axios from 'axios';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {Link} from "react-router-dom";
import { Navbar, Nav, Container ,Form,Button,FormControl } from 'react-bootstrap';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



class Product extends React.Component {



state = { persons:[]}

componentDidMount(){
	axios.get('http://localhost:8080/').then(res =>{
		// console.log(res.data);
		const persons = res.data.data;
		this.setState({persons});
    console.log(persons);
	})
}

handleClick = event=> {
  this.setState({ id: event.currentTarget.id });
  window.location.href = '/single/'+event.currentTarget.id;
  console.log(this.state);

  // const myElement = <Link to={'/single/' + event.currentTarget.id}></Link> ;  
    // this.props.history.push("/cart"); 
  // items.push(this.state.message);

 
}





filterOnchange =(event) =>{
console.log(event.target.value)
const get = event.target.value
    axios.get('http://localhost:8080/find/'+get).then(res =>{
    console.log(res.data);
    const persons = res.data.data;
    this.setState({persons});
  })
}

render(){

return(
    <span>

     <Navbar bg="light" expand="lg" sticky="top">
  <Container fluid>
    
      
      <Form className="ml-auto d-flex" >
        <FormControl
          onChange={this.filterOnchange.bind()}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          disabled={this.state.isDisabled}
        />
      </Form>
  </Container>
</Navbar>

{this.state.persons.length == 0 ? 

<Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '80vh' }}
>

  <Grid item xs={3}>

   <Card ml={{ maxWidth: 1500}} >
      <CardMedia
        component="img"
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO7TX1S38IL59ym0jplH4-3xSm3e9HImwQ3g&usqp=CAU"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          Oops !
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <br>< /br>
          Type a keyword to find your Product
        </Typography>
      </CardContent>
      <CardActions   >
      </CardActions>
    </Card>
</Grid></Grid>


  : 

<div>
 

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="Left">Title</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Vendor</TableCell>
            <TableCell align="center">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {this.state.persons.map((person) => (

            <TableRow  onClick={this.handleClick.bind()}
              key={person._id}
              id={person._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="Left" > {person.Title}</TableCell>

              <TableCell align="center"><img class='img' src = {person['Image Src']} /></TableCell>
              <TableCell align="center">{person.Type}</TableCell>
              <TableCell align="center">{person.Vendor}</TableCell>
              <TableCell align="center"> $ {person['Variant Price']}</TableCell>
            </TableRow >

          ))}
        </TableBody>
      </Table>
    </TableContainer>
</div>

  }  
</span>
	);
}}
export default Product;
