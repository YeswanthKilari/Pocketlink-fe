import React, { useRef } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const email = emailRef.current?.value;
    console.log("Signup with", username, password, email);
    await axios.post(BACKEND_URL + "/api/v1/signup", {
      username,
      email,
      password,
    });
    navigate("/signin");
  }

  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded border min-w-48 p-5">
        <Input ref={usernameRef} placeholder="username" />
        <Input ref={passwordRef} placeholder="password" />
        <Input ref={emailRef} placeholder="email" />
        <div className="flex justify-center items-center pt-4">
          <Button onClick={signup} variant="primary" text="Signup" fullwidth={true} />
        </div>
      </div>
    </div>
  );
}

export default Signup;
