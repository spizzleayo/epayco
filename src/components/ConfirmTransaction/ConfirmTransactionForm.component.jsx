import React from "react";
import { Form, Button } from "react-bootstrap";

const ConfirmTransactionForm = ({setToken,handleSubmit,isEmpty , cancelTransaction}) => {
    return (
      <div>
        <Form>
        <Form.Group controlId="Token">
            <Form.Label>Token</Form.Label>
            <Form.Control
              type="document"
              placeholder="Enter document"
              onChange={(e) => setToken(e.target.value)}
            />
          </Form.Group>
          <Button
            className="btn-primary"
            type="submit"
            onClick={handleSubmit}
            disabled={isEmpty}
            block
          >
            Confirm
          </Button>
          <Button
            className="btn-primary"
            type="submit"
            onClick={cancelTransaction}
            block
          >
            Cancel
          </Button>
        </Form>
      </div>
    );
  };
  export default ConfirmTransactionForm;