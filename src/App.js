import React, { useState} from 'react';
import { Jumbotron, Container, Form, Button } from 'react-bootstrap';
import './App.css';
import ItemForm from './ItemForm';
import JobsTable from './JobsTable';
import { Job, scheduleJobs } from './interval';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [scheduledJobs, setOrderedJobs] = useState([]);
  const [maxJobs, setMaxJobs] = useState(10);
  const [profit, setProfit] = useState(0);

  const updateJobs = (newJob) => {
    const job = new Job(newJob.name, newJob.deadline, newJob.profit);    
    setJobs([...jobs, job]);
  }

  const orderBySchedule = () => {
    const {scheduledJobs, profit} = scheduleJobs(jobs, maxJobs);
    setOrderedJobs(scheduledJobs);
    setProfit(profit);
  };

  return (
    <Container className="p-3">
      <Jumbotron>
        <h2 className="header">Coloque aqui seus trabalhos</h2>
        <ItemForm updateJobs={updateJobs}/>
      </Jumbotron>
      <h3> Jobs Listing </h3>
      <JobsTable jobs={jobs}/>
      <h3> Schedule </h3>
      <Form>
        <Form.Group controlId="maxJobs">
          <Form.Label>Max Jobs</Form.Label>
          <Form.Control type="number" placeholder="Max Jobs" value={maxJobs} onChange={(e) => setMaxJobs(e.target.value)}/>
        </Form.Group>
      </Form>
      <Button style={{marginTop: '5px'}} className="btn btn-primary" onClick={orderBySchedule}>Schedule</Button>
      <h4> Schedule Listing </h4>
      <span> Total profit: {profit} </span>
      <JobsTable jobs={scheduledJobs}/>
    </Container>
  );
};

export default App;
