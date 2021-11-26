import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Cadastro.css";
import Api from "./../../Api/Api";

const Registrar = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const hadleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: name,
      email: email,
      nickname: nickname,
      password: password,
      passwordConfirmation: passwordConfirmation,
    };
    console.log(user);

    Api.fetchPostUser(user);
  };

  return (
    <div className="container">
      <Form onSubmit={hadleSubmit} className="cadastro">
        <Form.Group className="mb-3 w-100" controlId="Name">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="nickName">
          <Form.Label>Nick Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Nick Name"
            onChange={(event) => setNickname(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="Password">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="PasswordConfirmation">
          <Form.Label>Confirme a senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => setPasswordConfirmation(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Registrar
        </Button>
      </Form>
    </div>
  );
};

export default Registrar;
