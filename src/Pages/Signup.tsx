import { useRef } from "react";
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

    if (!username || !password || !email) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Signup with", username, password, email);
    try {
      await axios.post(BACKEND_URL + "/api/v1/signup", {
        username,
        email,
        password,
      });
      alert("Signup successful. Redirecting to Signin...");
      navigate("/signin");
    } catch (error) {
      console.error("Signup failed", error);
      alert("Signup failed. Please try again.");
    }
  }

  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded border min-w-48 p-5">
        <Input ref={usernameRef} type="text" placeholder="Username" />
        <Input ref={emailRef} type="email" placeholder="Email" />
        <Input ref={passwordRef} type="password" placeholder="Password" />
        <div className="flex justify-center items-center pt-4">
          <Button onClick={signup} variant="primary" text="Sign Up" fullwidth={true} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
