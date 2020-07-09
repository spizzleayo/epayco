import React from "react";
import { Form, Button } from "react-bootstrap";

const SignUp = () => {
  return (
    <React.Fragment>
      <h1>ePayco</h1>
      <Form>
        <Form.Group controlId="Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange="" />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" onChange="" />
        </Form.Group>
        <Form.Group controlId="LastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" onChange="" />
        </Form.Group>
        <Form.Group controlId="Phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="number" placeholder="Enter phone" onChange="" />
        </Form.Group>
        <Button className="btn-primary" type="submit" onClick="" block>
          Submit
        </Button>
      </Form>
    </React.Fragment>
  );
};
export default SignUp;
