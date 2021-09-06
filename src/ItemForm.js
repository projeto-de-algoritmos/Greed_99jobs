import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ItemForm = ({ updateJobs }) => {
  const initialInputState = { name: "job", profit: 1, deadline: 1 };
  const [eachEntry, setEachEntry] = useState(initialInputState);

  const handleInputChange = (e) => {
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    updateJobs(eachEntry);
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Job name</Form.Label>
        <Form.Control
          placeholder={eachEntry.name}
          name="name"
          type="text"
          className={`form-control`}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Profit:</Form.Label>
        <Form.Control
          placeholder={eachEntry.profit}
          name="profit"
          type="text"
          className={`form-control`}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Deadline: </Form.Label>
        <Form.Control
          placeholder={eachEntry.deadline}
          name="deadline"
          type="text"
          className={`form-control`}
          onChange={handleInputChange}
        />
      </Form.Group>

        <Button onClick={onSubmit} className="btn btn-primary" style={{marginTop: '5px'}}>
          Add
        </Button>
    </Form>
  );
};

export default ItemForm;
