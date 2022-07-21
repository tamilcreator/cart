import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import axios from 'axios';

class Test extends React.Component {


  state = { persons:[],Cart:''}

componentDidMount(){
    var url = window.location.pathname;
var id = url.substring(url.lastIndexOf('/') + 1);
console.log(id);
  axios.get('http://localhost:8080/cart').then(res =>{
        // console.log(res.data);
        const persons = res.data.data;
        this.setState({persons});
        console.log(this.state.persons);
})}

  handleClick = event=> {
   window.location.href = '/cingle/'+event.currentTarget.id;
  console.log(this.state);
 
}
  render(){
  return (
    <div>
    <h1>Shopping Cart</h1>
    {this.state.persons.map((person) => (
    <Card sx={{ maxWidth: 345 }} onClick={this.handleClick.bind()}
              key={person._id}
              id={person._id}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {person.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {person.Vendor}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
))}
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</div>
  );
}}
export default Test;