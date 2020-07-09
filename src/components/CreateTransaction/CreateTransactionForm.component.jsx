import React from "react";
import { Form, Button } from "react-bootstrap";

const CreateTransaction = ({setDocument,setPhone,setValue,handleSubmit,isEmpty}) => {
    return (
      <div>
        <Form>
        <Form.Group controlId="Email">
            <Form.Label>Document</Form.Label>
            <Form.Control
              type="document"
              placeholder="Enter document"
              onChange={(e) => setDocument(e.target.value)}
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
          <Form.Group controlId="Value">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter amount"
              onChange={(e) => setValue(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="secondary"
            type="submit"
            onClick={handleSubmit}
            disabled={isEmpty}
            block
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  };
  export default CreateTransaction;