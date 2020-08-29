import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {

  render() {
    return(
      <Grid>
      <Cell col={4}>
      <p>{this.props.startYear} - {this.props.endYear}</p>
      </Cell>
      <Cell col={8}>
      <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
      <ul>
      {this.props.description1==="" ? <div/> : <li>{this.props.description1}</li>}
      {this.props.description2==="" ? <div/> : <li>{this.props.description2}</li>}
      {this.props.description3==="" ? <div/> : <li>{this.props.description3}</li>}
      </ul>
      </Cell>
      </Grid>
    )
  }
}

export default Experience;
