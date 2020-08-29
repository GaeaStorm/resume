import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 1024;
    console.log(isMobile)
    if (isMobile) {
      return (
        <div className="demo-big-content">
        <Layout fixedHeader>
        <Header transparent className="header-color" title={<a></a>}>

        </Header>
        <Drawer title={<a style={{textDecoration: 'none', color: 'black'}} href="https://gaisawant.github.io/MyPortfolio/">MyPortfolio</a>}>
        <Navigation>
        <a href="https://gaisawant.github.io/resume/">Resume</a>
        <a href="https://gaisawant.github.io/projects/">Projects</a>
        <a href="https://gaisawant.github.io/contact/">Contact</a>
        </Navigation>
        </Drawer>
        <Content>
        <div className="page-content"/>
        <Main/>
        </Content>
        </Layout>
        </div>

      );
    } else {
      return (
        <div className="demo-big-content">
        <Layout>
        <Header transparent className="header-color" title={<a style={{textDecoration: 'none', color: 'white'}} href="https://gaisawant.github.io/MyPortfolio/">MyPortfolio</a>}>
        <Navigation>
        <a href="https://gaisawant.github.io/resume/">Resume</a>
        <a href="https://gaisawant.github.io/projects/">Projects</a>
        <a href="https://gaisawant.github.io/contact/">Contact</a>
        </Navigation>
        </Header>
        <Drawer title={<a style={{textDecoration: 'none', color: 'black'}} href="https://gaisawant.github.io/MyPortfolio/">MyPortfolio</a>}>
        <Navigation>
        <a href="https://gaisawant.github.io/resume/">Resume</a>
        <a href="https://gaisawant.github.io/projects/">Projects</a>
        <a href="https://gaisawant.github.io/contact/">Contact</a>
        </Navigation>
        </Drawer>
        <Content>
        <div className="page-content"/>
        <Main/>
        </Content>
        </Layout>
        </div>

      );
    }
  }

}

export default App;
