import React, {useCallback, useContext, useState} from 'react';
import './sign-in.scss';
import {Link} from "react-router-dom";
import {Formik} from "formik";
import {Data} from "../../api/base-api";
import SpinnerIcon from "../../assets/icons/spinner-icon";
import * as Yup from "yup";
import {useNavigate} from "react-router";
import AuthenticationContext from "../../store/authentication-context-provider";


function SignInPage() {
  const [loading, setLoading] = useState(false);
  const apiCall = new Data();
  const navigate = useNavigate();
  const {logIn} = useContext(AuthenticationContext);
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please fill out this field")
      .required("Please fill out this field"),
    password: Yup.string()
      .min(5, "Password must be 6 digits")
      .required("Please fill out this field")
  });

  const submitHandler = useCallback(({...props}) => {
    const {values, setFieldValue, setFieldError} = props;
    setLoading(true);
    apiCall.postData("login", {...values})
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          setFieldError("email", "Email or password are incorrect");
          setFieldValue("password", "");
        } else {
          logIn(res.token);
          navigate("/profile");
        }
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="sign-in">
      <div className="container">
        <div className="register-form">
          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            validationSchema={LoginSchema}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={(values, {setFieldError, setFieldValue}) => {
              submitHandler({values, setFieldError, setFieldValue});
            }}
          >
            {({values, handleSubmit, handleChange, errors}) => (
              <form onSubmit={handleSubmit}>
                <h3>Sign in</h3>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Your email"
                  required={true}
                  onChange={handleChange}
                  value={values.email}
                />
                <div className="errors">{errors.email}</div>
                <input
                  type="password"
                  className="input"
                  placeholder="Your password"
                  required={true}
                  onChange={handleChange}
                  name="password"
                  value={values.password}
                />
                <button type="submit" className="button">
                  {loading ? <SpinnerIcon/> : "Submit"}
                </button>
              </form>
            )}
          </Formik>
          <div className="register-form__link">
            Dont have account yet? <Link to="/sign-up">Sign up.</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignInPage;