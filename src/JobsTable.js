import React from "react";
import { Table } from "react-bootstrap";

const renderTable = (data) => {
    const mapItems = (data) => {
      return data.map((job) => {
        return (
          <>
            <tr>
              <td> {job.name} </td>
              <td> {job.deadline} </td>
              <td> {job.profit} </td>
            </tr>
          </>
        );
      });
    };
    return data.length ? mapItems(data) : "Loading...";
 };

const JobsList = ({ jobs }) => {
  return (
    <>
      {jobs.length ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Deadline</th>
              <th>Profit</th>
            </tr>
          </thead>
          <tbody>{renderTable(jobs)}</tbody>
        </Table>
      ) : (
        <div className="alert alert-info"> No jobs </div>
      )}
    </>
  );
};

export default JobsList;
