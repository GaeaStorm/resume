import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
      <Grid className="contact-grid">
      <Cell col={6}>
      <h2>Gayatri Sawant</h2>
      <img
      src="https://i.ibb.co/RPyVgz1/Icon-2.png"
      alt="avatar"
      style={{height: '250px'}}
      />
      <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
      Computer Science Developer and Researcher studying at Rice University with a specialization in Data Science. Graduating May 2021.
      </p>

      </Cell>
      <Cell col={6}>
      <h2>Contact Me</h2>
      <hr/>

      <div className="contact-list">
      <List>
      <ListItem>
      <ListItemContent style={{fontSize: '30px'}}>
      <i className="fa fa-phone-square" aria-hidden="true"/>
      +13467774542
      </ListItemContent>
      </ListItem>

      <ListItem>
      <ListItemContent style={{fontSize: '30px'}}>
      <i className="fa fa-phone-square" aria-hidden="true"/>
      +917503603142
      </ListItemContent>
      </ListItem>

      <ListItem>
      <ListItemContent style={{fontSize: '30px'}}>
      <i className="fa fa-envelope" aria-hidden="true"/>
      gtrswnt@gmail.com
      </ListItemContent>
      </ListItem>

      <ListItem>
      <ListItemContent style={{fontSize: '30px'}}>
      <i className="fa fa-envelope" aria-hidden="true"/>
      grs7@rice.edu
      </ListItemContent>
      </ListItem>


      </List>
      </div>
      </Cell>
      </Grid>
      </div>

    )
  }
}

export default Contact;
