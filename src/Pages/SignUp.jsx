import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../CSS/Signin.css";
import validateForm from "./validateForm";
import { IoArrowBack } from "react-icons/io5";
import { useAuth } from "../FireBase/AuthContexts";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../FireBase/config";

const SignUpComp = () => {
  const { signUp, user } = useAuth();
  const navigate = useNavigate();

  if (user) {
    navigate("/userDashboard");
  }

  // const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [recentUsers, setRecentUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    address: "",
  });

  // const handleCheckboxChange = () => {
  //   setShowPassword(!showPassword);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("checkpt 1");

    if (formData.password === formData.confirmPassword) {
      const validationError = validateForm(
        formData.name,
        formData.email,
        formData.phoneNumber,
        formData.password,
        formData.address
      );
      console.log("checkpt 2");
      if (validationError) {
        console.log("checkpt 3");
        console.log(validationError);
        setErrorMessage(validationError);
      } else {
        // Simulate user registration
        try {
          const data = {
            name: formData.name,
            email: formData.email,
            mobile: formData.phoneNumber,
            address: formData.address,
          };
          const res = await signUp(formData.email, formData.password);

          if (res) {
            const collectionRef = collection(db, "users");
            await addDoc(collectionRef, { ...data, uid: res.user.uid });
          }

          alert("User registered successfully!");
        } catch (error) {
          console.error(error);
          alert("An error occured!");
        }
        const newUser = {
          ...formData,
          id: Date.now() /* Use a better ID logic */,
        };
        console.log("checkpt 4");
        // Dispatch action to add user to Redux store
        setRecentUsers((prevUsers) => [...prevUsers, newUser]);

        console.log("Form Data:", formData);
        console.log("Recently registered users:", recentUsers);
        navigate("/signin");
      }
    } else {
      alert("password and confirm password not same");
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="sign_body">
        <Link to="/">
          {" "}
          <IoArrowBack className="absolute mt-5 ml-5 font-bold text-4xl text-white bg-black  rounded-3xl" />
        </Link>
        <div className="signuppage_card"></div>
        <div className="cont s--signup">
          <div className="img">
            <div className="img__text m--in">
              <h3>If you already have an account, just sign in.</h3>
            </div>
            <div className="btn_2">
              <Link to={"/signin"}>
                <button type="button" className="submit_btn2">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form sign-up">
              <h2 className="head_h2">Create your Account</h2>
              <label className="label_s">
                <input
                  className="input_s"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </label>

              <label className="label_s">
                <input
                  className="input_s"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>
              <label className="label_s">
                <input
                  className="input_s"
                  type="text"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </label>
              <label className="label_s">
                <input
                  className="input_s"
                  // type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                {/* <input
                  type="checkbox"
                  name="checkbox"
                  id="check"
                  className="check2 mt-8"
                  onChange={handleCheckboxChange}
                /> */}
              </label>
              <label className="label_s">
                <input
                  className="input_s"
                  // type={showPassword ? "text" : "password"}
                  placeholder="confirm Password"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                {/* <input
                  type="checkbox"
                  name="checkbox"
                  id="check"
                  className="check2 mt-8"
                  onChange={handleCheckboxChange}
                /> */}
              </label>
              <label className="label_s">
                <input
                  className="input_s"
                  type="text"
                  placeholder="(Address, pincode, state)"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </label>

              <button type="submit" className="submit_btn button-30">
                Sign Up
              </button>
              {errorMessage && (
                <div className="error-message">{errorMessage}</div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpComp;
