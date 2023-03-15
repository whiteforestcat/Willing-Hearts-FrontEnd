import React, { useState } from "react";
import Footer from "../comp-commons/Footer";
import BaseInput from "../comp-commons/BaseInput";
import BaseButton from "../comp-commons/BaseButton";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(inputId, inputVal) {
    if (inputId === "email") {
      setEmail(inputVal);
    } else if (inputId === "password") {
      setPassword(inputVal);
    }
  }

  // Setting the Function to call API ---------
  async function postData() {
    // Default options are marked with *
    // console.log(url);
    // console.log(data);

    try {
      const response = await fetch("http://127.0.0.1:5001/users/login", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (response.status !== 200) {
        alert("Login Failed, Incorrect Email or Password");
        throw new Error("Login Failed, Incorrect Email or Password");
      }

      const dataReturn = await response.json();
      alert(`Logged in as ${email} `);
      console.log(dataReturn);

      return dataReturn; // parses JSON response into native JavaScript objects
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const pwMinimalLength = 8;
    if (password.length >= pwMinimalLength) {
      postData();
    }
  };

  return (
    <div className="bg-secondary text-greyscale1 pt-24 flex flex-col 2xl:h-screen">
      <div className="2xl:flex-grow mb-16">
        <h1 className="text-center mb-8">SIGN IN TO YOUR ACCOUNT</h1>
        <div className="bg-white rounded-2xl w-[792px] mx-auto py-[60px] px-[100px]">
          <p className="mb-[51px]">
            Don't have an account?{" "}
            <span className="underline">Sign up here.</span>
          </p>
          <form onSubmit={handleSubmit}>
            <BaseInput
              type="string"
              id="email"
              value={email}
              handleChange={handleChange}
              required={true}
              placeholder="Email Address"
              className="mb-[36px]"
            />
            <BaseInput
              type="password"
              id="password"
              value={password}
              handleChange={handleChange}
              required={true}
              placeholder="Password"
              className="mb-3"
            />
            <p className="underline mb-14">Forgot Password?</p>
            <BaseButton type="submit" label="Sign In" colour="red" />
          </form>
        </div>
      </div>

      {/* Section 3: Footer */}
      <Footer />
    </div>
  );
};

export default LoginPage;
