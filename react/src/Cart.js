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
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

class Cart extends React.Component {



state = { persons:[]}

componentDidMount(){
  axios.get('http://localhost:8080/cart').then(res =>{
    console.log(res.data);
    const persons = res.data.data;
    this.setState({persons});
console.log(this.state.persons.length);
    const total=(persons.reduce((total,currentItem) =>  total = total + (currentItem['Variant Price']*currentItem.Cart) , 0 ));
    console.log(total);
    this.setState({total});

    
  })

}

handleClick = event=> {
   // window.location.href = '/cingle/'+event.currentTarget.id;
  console.log(this.state);
 
}

 handleButton = (e,id) => {
 console.log(document.getElementById('click').value);
 e.stopPropagation();

 }
render(){

return(
  <div>
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
        image="https://previews.123rf.com/images/cosmaa/cosmaa1801/cosmaa180100341/94225476-vector-cartoon-illustration-of-empty-wicker-basket-isolated-on-white.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          Oops !
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Your Cart is Empty<br>< /br>
          Please Move to Products Page
        </Typography>
      </CardContent>
      <CardActions   >
<Box 
  justify="center" sx={{
    pl:6.5,
          mb: 2,
          mr: 2,
          
        }}>
          <Button size="medium" variant="contained" color="warning"><Link to="/"><span style={{color:'white'}}>Product</span> </Link></Button>
</Box>
      </CardActions>
    </Card>
</Grid></Grid>


  : 

<Container fluid="md" >
 <h4>Shopping Cart</h4>

<TableContainer component={Paper} variant = 'dark'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell align="Left">Title</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Vendor</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">SubTotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {this.state.persons.map((person) => (
            <TableRow  onClick={this.handleClick.bind()}
              key={person._id}
              id={person._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="Left" >{person.Title}</TableCell>
              <TableCell align="center" ><img class='img' src = {person['Image Src']} /></TableCell>
              <TableCell align="center">{person.Vendor}</TableCell>
              <TableCell align="center">{person.Type}</TableCell>
              <TableCell align="center">{person.Cart} Nos</TableCell>
              <TableCell align="center">${person['Variant Price']}</TableCell>
              <TableCell align="center" >${person['Variant Price']*person.Cart}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <h5 class='right'>Total({this.state.persons.length} Items):<b>${this.state.total}</b></h5>
      </Table>
    </TableContainer>


   
</Container>
 }
 </div>
  );
}}
export default Cart;