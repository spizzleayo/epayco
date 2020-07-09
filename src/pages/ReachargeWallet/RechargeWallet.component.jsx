import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../../context/user";
import { rechargeWallet } from "../../utils/axios/ReachargeWallet";
import './RechargeWallet.styles.scss'

const RechargeWallet = () => {
    const {showAlert} = useContext(UserContext);
    const [document, setDocument] = useState("");
    const [phone, setPhone] = useState("");
    const [value, setValue] = useState(0);
    const [balance, setBalance] = useState('');
  
    let isEmpty = !document || !phone || !value>0;
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await rechargeWallet({ document,phone,value });
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
        <h1>Recharge Wallet</h1>
        {
          balance && <h2>Balance: ${balance}</h2>
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
  export default RechargeWallet;
  