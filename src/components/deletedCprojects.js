
else if(this.state.activeTab === 3) {
  return (

    <div className="projects-grid">
    {/* Kernel */}
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/VWZXtLg/OS.jpg) center / cover'}} >Kernel</CardTitle>
    <CardText>

    </CardText>
    <CardActions border>
    <a href=''><Button colored>GitHub</Button></a>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
    <IconButton name="share" />
    </CardMenu>
    </Card>

    {/* Unix? */}
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/VWZXtLg/OS.jpg) center / cover'}} >A Fan's Tribute</CardTitle>
    <CardText>

    </CardText>
    <CardActions border>
    <a href=''><Button colored>GitHub</Button></a>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
    <IconButton name="share" />
    </CardMenu>
    </Card>

    </div>
  )
}

<Tab>C</Tab>
