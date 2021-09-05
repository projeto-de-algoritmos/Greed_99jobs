import React, { useState} from 'react';
import './App.css';
import ItemForm from './ItemForm';
import JobsTable from './JobsTable';
import {Job} from './interval';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const updateJobs = (newJob) => {
    const job = new Job(newJob.name, newJob.deadline, newJob.profit);    
    setJobs([...jobs, job]);
  }
  return (
    <Container className="p-3">
      <Jumbotron>
        <h2 className="header">Coloque aqui seus trabalhos</h2>
        <ItemForm updateJobs={updateJobs}/>
      </Jumbotron>
      <h3> Jobs Listing </h3>
      <JobsTable jobs={jobs}/>
      <h3> Schedule </h3>
    </Container>
  );
};

export default App;
