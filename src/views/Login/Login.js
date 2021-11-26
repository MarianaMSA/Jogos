import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <Form className="cadastro">
        <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Logar
        </Button>
      </Form>
    </div>
  );
};

export default Login;
