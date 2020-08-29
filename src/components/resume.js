import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
      <Grid>
      <Cell col={4}>
      <div style={{textAlign: 'center'}}>
      <img
      src="https://i.ibb.co/N6fNHMy/Icon-1.png"
      alt="avatar"
      style={{height: '300px'}}
      />
      </div>

      <center>
      <h2 style={{paddingTop: '0em'}}>Gayatri Sawant</h2>
      <h4 style={{color: 'grey'}}>Computer Science Student</h4>
      <hr style={{borderTop: '3px solid #040F2E', width: '50%'}}/>
      <p>Computer Science Student at Rice University with a specialization in Data Science. Graduating May 2021.</p>
      <hr style={{borderTop: '3px solid #040F2E', width: '50%'}}/>

      <h5>Address</h5>
      <p>6360 Main Street, Rice University, Houston, TX-77005</p>

      <h5>Phone</h5>
      <p>(346) 777-4542</p>

      <h5>Email</h5>
      <p>gtrswnt@gmail.com</p>

      <h5>Relevant Coursework</h5>
      <p>Advanced Object Oriented Programming <br/>
      Practical Data Science<br/>
      Parallel Programming<br/>
      Intro to Systems<br/>
      Program Design and Data Structures<br/>
      Algorithmic Thinking<br/>
      Statistics for Data Science<br/>
      Fundamentals of Computer Engineering<br/>
      Linear Algebra<br/>
      Business Communications</p>

      <hr style={{borderTop: '3px solid #040F2E', width: '50%'}}/>
      </center>

      </Cell>

      <Cell className="resume-right-col" col={8}>
      <a href='/files/GRS_Resume.pdf' download><Button raised colored>Download Resume</Button></a>
      <h2>Education</h2>


      <Education
      startYear={2017}
      endYear={2021}
      schoolName="Rice University | BS in Computer Science"
      schoolDescription="Major in Computer Science with a capstone in Data Science. Minors in Mathematics and Data Science."
      />

      <hr style={{borderTop: '3px solid #ffffff'}} />

      <h2>Experience</h2>

      <Experience
      startYear={"May 2020"}
      endYear={"July 2020"}
      jobName="ThoughtTrace | Data Science Summer Intern"
      description1="Applied statistical and algebraic techniques to improve page feature recognition (maps, stamps, signatures, forms)"
      description2="Improved page feature by 112% for maps and implemented systems to identify stamps and forms which were previously unidentified."
      description3="Presented demo of completed project to audience of 50+ full-time engineers."
      />

      <Experience
      startYear={"May 2019"}
      endYear={"August 2019"}
      jobName="Harbinger LLC | Machine Learning Intern"
      description1="Boosted Question Generation and Question Answering by hyper-parameter tuning and creating new neural networks."
      description2="Improved Question Generation by 10% by formulating new NLP processes and wrote professional-level documents for the same."
      description3=""
      />

      <Experience
      startYear={"May 2018"}
      endYear={"July 2018"}
      jobName="Canarys Automations | Full-Stack Intern"
      description1="Developed an app to perceive user emotions based on facial movement with a team of 4 employees."
      description2="Collaborated with other developers to identify and alleviate the number of bugs and errors in software."
      description3="Spearheaded the design and setup of micro services in Docker to meet client requirements for functionality, scalability, and performance."
      />

      <Experience
      startYear={"August 2018"}
      endYear={"December 2018"}
      jobName="Rice Apps | Developer"
      description1="Updated and redesigned a website for conducting elections within Rice University."
      description2="Developed, with a 6 student team, Beak Speak, a Yik-Yak style, anonymous experience app."
      description3="Managed all aspects of a mobile app life-cycle (9-month) from research and planning through deployment and post-launch support (Beak Speak)"
      />

      <Experience
      startYear={"August 2018"}
      endYear={"December 2018"}
      jobName="Rice University | Teacher's Assistant"
      description1="Mentored students through office hours and 1-on-1 communication."
      description2="Assisted faculty with clerical tasks such as correcting papers, collecting assignments, and preparing materials for upcoming classes."
      description3="Organized review sessions before exams."
      />
      <hr style={{borderTop: '3px solid #ffffff'}} />
      <h2>Research</h2>
      <Experience
      startYear={"December 2018"}
      endYear={"Present"}
      jobName="Dr. Devika Subramanian | Research Assistant"
      description1="Conducted research in the breadth of the anti-vaccination discussion on twitter with a team of 4 undergraduates and faculty."
      description2="Performed statistical, qualitative, and quantitative analysis on a twitter dataset of 3 million to map the discussion network."
      description3="Previous Topic: Negative Sentiment Analysis of 10-K’s to find a positive relationship between the use of positive words and a long term increase in the stock prices of a company."
      />

      <hr style={{borderTop: '3px solid #ffffff'}} />
      <h2>Leadership/Community Service</h2>
      <ul>
      <li>Led a 100-student conference in Timor Leste to promote development</li>
      <li>Trained a class of 30 migrant workers in Singapore in computers to improve job qualification</li>
      <li>Worked in Epic Arts, Cambodia to explore art skills for the differently-abled</li>
      <li>Traveled to 50+ countries across the globe to understand international culture</li>
      <li>Student Representative for college</li>
      <li>Organized orientation for new incoming students</li>
      </ul>

      </Cell>
      </Grid>
      </div>
    )
  }
}

export default Resume;
