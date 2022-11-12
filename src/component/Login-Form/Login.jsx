import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const initialvalue = {
    FirstName: "",
    LastName: "",
    Password: "",
    ConfirmPassword: "",
    Gender: "",
    Email: "",
    Phone: "",
    SelectYou: "",
    Answer: "",
  };
  const onsubmit = (values) => {
    alert(`Hello ${values.FirstName}.You Register succesfully`)
    console.log(values);
  };
  const validationSchema = Yup.object({
    FirstName: Yup.string().min(3).max(10).required(),
    LastName: Yup.string().min(3).max(10).required(),
    Password: Yup.string().min(3).max(10).required(),
    ConfirmPassword: Yup.string().oneOf([Yup.ref("Password"),null],"Password does not match").required(),
    Gender: Yup.string().required(),
    Email: Yup.string().email().required(),
    Phone: Yup.string().min(10).max(12).required(),
    SelectYou: Yup.string().required(),
    Answer: Yup.string().min(5).max(50).required(),
  });
  return (
    <div className="loginpage">
      <div className="blue-container">
        <div className="login-left">
          <div className="welcome-div">
            <div>
              <p className="welcome-text">Welcome</p>
              <br></br>
              <p className="welcome-text2">
                Please Register <br></br> and <br></br> Enjoy our Services{" "}
              </p>
            </div>
            <button className="login-button">
              <NavLink to="/userlogin" className="nav-link">
                Login
              </NavLink>
            </button>
          </div>
        </div>
        <div className="login-right">
          <div className="employee-hirer">
            <div className="employee-hirer-bg">
              <p className="employee">
                <NavLink to="/employee" className="employee-nav-link">
                  Emplyoee
                </NavLink>
              </p>
              <p className="employeepage-hirer">
                <NavLink to="/hirer" className="hirer-nav-link">
                  Hirer
                </NavLink>
              </p>
            </div>
          </div>
          <div className="heading">
            <span>Apply as a Emplyoee</span>
          </div>
          <Formik
            initialValues={initialvalue}
            onSubmit={onsubmit}
            validationSchema={validationSchema}
          >
            {({ handleChange, values, handleBlur, errors,touched }) => (
              <Form>
                <div className="form">
                  <div className="form-left">
                    <input
                      type="text"
                      name="FirstName"
                      value={values.FirstName}
                      placeholder="First Name *"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className="error-massege">
                    {
                      errors.FirstName && touched.FirstName ?(
                        <span >{errors.FirstName}</span>
                      ):null
                    }
                    </p>
                    
                    <input
                      type="text"
                      name="LastName"
                      value={values.LastName}
                      placeholder="Last Name *"
                      onChange={handleChange}
                      onBlur={handleBlur}

                    />
                     <p className="error-massege">
                    {
                      errors.LastName && touched.LastName ?(
                        <span >{errors.LastName}</span>
                      ):null
                    }
                    </p>
                    <input
                      type="password"
                      name="Password"
                      value={values.Password}
                      placeholder="Password *"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                     <p className="error-massege">
                    {
                      errors.Password && touched.Password ?(
                        <span >{errors.Password}</span>
                      ):null
                    }
                    </p>
                    <input
                      type="password"
                      name="ConfirmPassword"
                      value={values.ConfirmPassword}
                      placeholder="Confirm Password *"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                     <p className="error-massege">
                    {
                      errors.ConfirmPassword && touched.ConfirmPassword ?(
                        <span >{errors.ConfirmPassword}</span>
                      ):null
                    }
                    </p>
                    <div>
                      <input
                        type="radio"
                        name="Gender"
                        value="male"
                      onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      Male
                      <input
                        type="radio"
                        name="Gender"
                        value="female"
                      onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      Female
                    </div>
                    <p className="error-massege">
                    {
                      errors.Gender && touched.Gender ?(
                        <span >{errors.Gender}</span>
                      ):null
                    }
                    </p>
                  </div>
                  <div className="form-right">
                    <input
                      type="email"
                      name="Email"
                      value={values.Email}
                      placeholder="Your Email *"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                     <p className="error-massege">
                    {
                      errors.Email && touched.Email ?(
                        <span >{errors.Email}</span>
                      ):null
                    }
                    </p>
                    <input
                      type="text"
                      name="Phone"
                      value={values.Phone}
                      placeholder="Your Phone *"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                     <p className="error-massege">
                    {
                      errors.Phone && touched.Phone ?(
                        <span >{errors.Phone}</span>
                      ):null
                    }
                    </p>
                      
                    <select name="SelectYou" onBlur={handleBlur} onChange={handleChange}>
                      <option
                        className="selectBox"
                        value=""
                        disabled
                        selected
                        hidden
                      >
                        Please select you
                      </option>

                      <option value="As intern">Intern</option>
                      <option value="As fresher">Fresher</option>
                      <option value="As experience">Experience</option>
                    </select>
                    <p className="error-massege">
                    {
                      errors.SelectYou && touched.SelectYou ?(
                        <span >{errors.SelectYou}</span>
                      ):null
                    }
                    </p>
                    <input
                      type="text"
                      name="Answer"
                      value={values.Answer}
                      placeholder="Enter your answer*"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className="error-massege">
                    {
                      errors.Answer && touched.Answer ?(
                        <span >{errors.Answer}</span>
                      ):null
                    }
                    </p>
                  </div>
                </div>
                <button type="submit" className="register-button">
                  Register
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
