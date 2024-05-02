import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import users from "../components/users";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Create() {

    let history = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const ids = uuid();
    let uni = ids.slice(0, 8);
    let a = name,
      b = email,
      c = mobilenumber,
      d = age;

    if (name === "" || email === "" || mobilenumber === "" || age === "") {
      alert("Invalid Input");
      return;
    }

    users.push({
      id: uni,
      Name: a,
      Email: b,
      MobileNumber: c,
      Age: d
    })
    history("/")

  }


  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
        <Form.Group className="mb-3" controlId="Name">
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Email">
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter Email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="MobileNumber">
          <Form.Control
            onChange={(e) => setMobileNumber(e.target.value)}
            type="text"
            placeholder="Enter MobileNumber"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Age">
          <Form.Control
            onChange={(e) => setAge(e.target.value)}
            type="text"
            placeholder="Enter Age"
            required
          />
        </Form.Group>
        <Button
          onClick={(e) => handleSubmit(e)}
          variant="success"
          type="submit"
        >
          Submit
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

export default Create;
