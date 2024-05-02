import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import users from "../components/users";

function Edit() {
    let history = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  let index = users.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || mobileNumber === "" || age === "") {
        alert("Invalid Input");
        return;
      }
    let a = users[index];
    a.Name = name;
    a.Email = email;
    a.MobileNumber = mobileNumber;
    a.Age = age;

    
    history("/")

  }

  useEffect(()=>{
    setName(localStorage.getItem("Name"))
    setEmail(localStorage.getItem("Email"))
    setMobileNumber(localStorage.getItem("MobileNumber"))
    setAge(localStorage.getItem("Age"))
    setId(localStorage.getItem("id"))
  }, []);

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
        <Form.Group className="mb-3" controlId="Name">
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Email">
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter Email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="MobileNumber">
          <Form.Control
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            type="text"
            placeholder="Enter MobileNumber"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Age">
          <Form.Control
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="text"
            placeholder="Enter Age"
          />
        </Form.Group>
        <Button
          onClick={(e) => handleSubmit(e)}
          variant="success"
          type="submit"
        >
          Update
        </Button>
        <Link className="d-grid gap-2" to="/">
          <Button variant="info" size="lg">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Edit;
