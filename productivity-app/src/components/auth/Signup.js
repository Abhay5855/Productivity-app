import {useState} from "react";
import "./signup.css";
import "../global/global.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //  handling the form submission

  const handleSignup = (e) => {
    e.preventDefault();

    const body = {
      email: email,
      password: password,
    };

    console.log(body);
  };

  return (
    <>
      <main className="signup__container">
        <form onSubmit={handleSignup} autoComplete="off">
          <input
            type="email"
            required
            placeholder="Enter Email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="on"
          />
          <input
            type="password"
            required
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />

          <button type="submit">Signup</button>
        </form>
      </main>
    </>
  );
};

export default Signup;
