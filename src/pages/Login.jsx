import {
  Button,
  Input,
  Layout,
  PasswordInput,
  Spinner,
} from "components/common";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  box-sizing: border-box;
  color: black;
  border-radius: 5px;
  padding: 16px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }

  ${Button}:first-of-type {
    margin-top: 40px;
  }
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  let timeout;

  useEffect(() => {
    return () => timeout && clearTimeout(timeout);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Layout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {!loading ? (
          <>
            <Input
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <PasswordInput
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        ) : (
          <Spinner />
        )}
        <Button large type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </Button>
        {!loading && (
          <>
            <div className="alt-text">or</div>
            <Button secondary type="button">
              Register
            </Button>
          </>
        )}
      </Form>
    </Layout>
  );
};

export default Login;
