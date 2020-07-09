import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../../context/user";
import { consultWallet } from "../../utils/axios/ConsultWallet";
import './ConsultWallet.styles.scss'

const ConsultWallet = () => {
    const {showAlert} = useContext(UserContext);
    const [document, setDocument] = useState("");
    const [phone, setPhone] = useState("");
    const [balance, setBalance] = useState('');
  
    let isEmpty = !document || !phone;
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      const response = await consultWallet({ document,phone });
      if(response.data.status === 'error'){
        setBalance('')
        showAlert({msg:response.data.message,type:'danger'})
      }else{
        setBalance(response.data.balance)
        showAlert({
          msg:response.message
        })
      }
    };
  
    return (
      <div className="login-container">
        <h1>Consult Wallet</h1>
        {
          balance && <h2>${balance}</h2>
        }
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
  export default ConsultWallet;
  