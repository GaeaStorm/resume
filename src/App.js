import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  hideToggle() {
    var selectorId = document.querySelector('.mdl-layout');
    selectorId.MaterialLayout.toggleDrawer();
}

  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/MyPortfolio/">MyPortfolio</Link>}>
            <Navigation>
                <a href="https://gaisawant.github.io/resume/">Resume</a>
                <a href="https://gaisawant.github.io/projects/">Projects</a>
                <a href="https://gaisawant.github.io/contact/">Contact</a>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/MyPortfolio/">MyPortfolio</Link>}>
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

export default App;
