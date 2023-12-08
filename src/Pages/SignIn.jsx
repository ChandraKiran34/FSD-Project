import React, { useState } from "react";
import "../CSS/Signin.css"; // Import your CSS file
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useAuth } from "../FireBase/AuthContexts";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const nav = useNavigate();
  const { user, signIn } = useAuth();

  if (user) {
    nav("/userDashboard");
  }

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };

  const loginUser = async (event) => {
    event.preventDefault();

    try {
      await signIn(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="sign_body">
      <Link to="/">
        {" "}
        <IoArrowBack className="absolute mt-5 ml-5 font-bold text-4xl text-white bg-black  rounded-3xl" />
      </Link>
      <div className="signuppage_card"></div>

      <div className="cont">
        <form className="form sign-in" onSubmit={loginUser}>
          <h2 className="head_h2">Welcome</h2>
          <label className="label_s">
            <input
              name="email"
              className="input_s"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="label_s">
            <input
              name="password"
              className="input_s"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="show-password">
            <input
              type="checkbox"
              name="checkbox1"
              id="check"
              className="check1 mt-[23px] mr-[10px]"
              onChange={handleCheckboxChange}
            />
            <label className="label_s check" htmlFor="check">
              Show Password
            </label>
          </div>
          <br />

          <button type="submit" className="submit_btn button-30">
            Sign In
          </button>
        </form>
        <Link to={"/forgotpassword"}>
          <p className="forgot-pass">Forgot password?</p>
        </Link>
        <div className="img">
          <div className="img__text m--up">
            <h3>Don't have an account? Please Sign up!</h3>
          </div>
          <div className="btn_2">
            <Link to={"/signup"}>
              <button type="button" className="submit_btn2 ">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
