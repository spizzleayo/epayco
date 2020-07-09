import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../../context/user";
import { createUser } from "../../utils/axios/CreateUser";

const SignUp = () => {
  const {alert,showAlert} = useContext(UserContext);
  const [document, setDocument] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  let isEmpty = !email || !name || !lastName || !phone;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await createUser({ document,email, name, lastName,phone });
    if(response.data.status === 'error'){
      showAlert({msg:response.data.message,type:'danger'})
    }else{
      showAlert({
        msg:`User created`
      })
    }
  };

  return (
    <React.Fragment>
      <h1>ePayco</h1>
      <Form>
      <Form.Group controlId="Email">
          <Form.Label>Document</Form.Label>
          <Form.Control
            type="document"
            placeholder="Enter document"
            onChange={(e) => setDocument(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="LastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="Phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Button
          className="btn-primary"
          type="submit"
          onClick={handleSubmit}
          disabled={isEmpty}
          block
        >
          Submit
        </Button>
      </Form>
    </React.Fragment>
  );
};
export default SignUp;
