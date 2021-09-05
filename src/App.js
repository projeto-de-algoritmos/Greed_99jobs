import React, { useState} from 'react';
import './App.css';
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
    </Container>
  );
};

export default App;
