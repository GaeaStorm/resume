import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
        {/* Research Anti-Vax */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/gPBvX11/twitterlogo.png) center / cover'}} >Anti-Vax Discussion Graph</CardTitle>
          <CardText>
          Yet to be completed. Research project to graph discussion about vaccination on twitter.
          </CardText>
          <CardActions border>
          <a href='https://github.com/sdevika/AntiVaxAndVape'><Button colored disabled>GitHub</Button></a>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
          </CardMenu>
          </Card>


          {/* DengAI */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/tJ3N0QY/Deng-AIlogo.jpg) center / cover'}} >DengAI Challenge</CardTitle>
            <CardText>
            A partner project to predict Dengue outbreaks based on climatic conditions.
            </CardText>
            <CardActions border>
            <a href='https://github.com/GaiSawant/DengAI-Challenge'><Button colored>GitHub</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
            </CardMenu>
            </Card>

            {/* Fan Tribute */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/F4Hj5GG/fanficlogo.png) center / cover'}} >A Fan's Tribute</CardTitle>
              <CardText>
              Scrapes story from HTML on fanfiction.net and saves it as a pdf.
              </CardText>
              <CardActions border>
              <a href='https://github.com/GaiSawant/FanTribute'><Button colored>GitHub</Button></a>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
              </CardMenu>
              </Card>
              </div>
            )

          } else if(this.state.activeTab === 1) {
            return (
              <div><center><h1>Under Development for Coursework</h1></center></div>
            )
          } else if(this.state.activeTab === 2) {
            return(
                <div>
                    {/* Convalescent */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/WxxHkkY/Title.jpg) center / cover'}} >Convalescent</CardTitle>
                  <CardText>
                    A point-and-click Escape the House game trailer.
                  </CardText>
                  <CardActions border>
                    <a href='https://drive.google.com/uc?id=1kZlHb14ZiKSXmXgtxjD9DLEHLtzDf-hz&export=download'><Button colored>Mac/Linux Download</Button></a>
                    <a href='https://drive.google.com/uc?id=1ImxnDPexRW9rGOf1nAWIRe2gMTHMtqnJ&export=download'><Button colored>Windows Download</Button></a>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
                </div>
              )


          } else if(this.state.activeTab === 3) {
            return (
              <div className="projects-grid">
              {/* EOG Assignment */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/LryvW9S/react-logo-825x510.jpg) center / cover'}} >EOG Bot tracker</CardTitle>
                <CardText>
                A project made for an interview. Bot tracker and live information grapher.
                </CardText>
                <CardActions border>
                  <a href='https://github.com/GaiSawant/gai_sawant-eog-react-assessment'><Button colored>GitHub</Button></a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>

              {/* BeakSpeak */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/cCLjgBq/beakspeak.png) center / cover'}} >BeakSpeak</CardTitle>
                <CardText>
                A Yik-Yak meets Reddit style app for Rice University students.
                </CardText>
                <CardActions border>
                  <a href='https://github.com/rice-apps/BeakSpeak'><Button colored>GitHub</Button></a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>

              {/* Rice Elections */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/G7FHqn9/Screen-Shot-2020-08-26-at-07-52-10.png) center / cover'}} >Rice Elections Website</CardTitle>
                <CardText>
                A secure site to conduct elections within Rice University.
                </CardText>
                <CardActions border>
                  <a href='https://github.com/rice-apps/rice-elections'><Button colored>GitHub</Button></a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
              </div>
            )
          }

        }

        render() {
          return(
            <div>
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab>Python</Tab>
            <Tab>R</Tab>
            <Tab>Java</Tab>
            <Tab>JavaScript</Tab>
            </Tabs>


            <Grid>
            <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
            </Cell>
            </Grid>


            </div>
          )
        }
      }

      export default Projects;

      <div className={classes.size}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="image_url"
              title="title"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                title
              </Typography>
              <Typography component="p">
                info
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              GitHub
            </Button>
          </CardActions>
        </Card>
      </div>
