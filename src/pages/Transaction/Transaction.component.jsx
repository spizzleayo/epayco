import React, { useState, useContext } from "react";
import { UserContext } from "../../context/user";
import { createTransaction } from "../../utils/axios/CreateTransaction";
import { confirmTransaction } from "../../utils/axios/ConfirmTransaction";
import CreateTransactionForm from "../../components/CreateTransaction/CreateTransactionForm.component";
import ConfirmTransactionForm from "../../components/ConfirmTransaction/ConfirmTransactionForm.component";
import "./Transaction.styles.scss";

const Transaction = () => {
  const { showAlert, session_id, setSession, deleteSession } = useContext(
    UserContext
  );
  const [document, setDocument] = useState("");
  const [phone, setPhone] = useState("");
  const [value, setValue] = useState(0);
  const [token, setToken] = useState("");

  let isTransactionEmpty = !document || !phone || !value > 0;

  let isConfirmTransactionEmpty = !token;

  const createTransactionSubmit = async (e) => {
    e.preventDefault();
    const response = await createTransaction({ document, phone, value });
    if (response.data.status === "error") {
      showAlert({ msg: response.data.message, type: "danger" });
    } else {
      setSession(response.data.session_id);
      showAlert({
        msg: response.message,
      });
    }
  };

  const confirmTransactionSubmit = async (e) => {
    e.preventDefault();
    const response = await confirmTransaction({ token, session_id });
    console.log(response);
    if (response.data.status === "error") {
      showAlert({ msg: response.data.message, type: "danger" });
    } else {
      deleteSession();
      showAlert({
        msg: response.message,
      });
    }
  };

  return (
    <div className="login-container">
      <h1>Pay</h1>
      {session_id ? (
        <ConfirmTransactionForm
          setToken={setToken}
          handleSubmit={confirmTransactionSubmit}
          isEmpty={isConfirmTransactionEmpty}
          cancelTransaction={deleteSession}
        />
      ) : (
        <CreateTransactionForm
          setDocument={setDocument}
          setPhone={setPhone}
          setValue={setValue}
          handleSubmit={createTransactionSubmit}
          isEmpty={isTransactionEmpty}
        />
      )}
    </div>
  );
};
export default Transaction;
