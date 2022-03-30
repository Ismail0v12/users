import React, {useCallback, useState} from 'react';
import {Link} from "react-router-dom";
import {Formik} from "formik";
import './sign-up.scss';
import {Data} from "../../api/base-api";
import SpinnerIcon from "../../assets/icons/spinner-icon";
import * as Yup from "yup";
import {useNavigate} from "react-router";

function SignUpPage() {
  const [loading, setLoading] = useState(false);
  const apiCall = new Data();
  const navigate = useNavigate();
  const ValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please fill out this field")
      .required("Please fill out this field"),
    password: Yup.string()
      .min(5, "Password must be at least 6 digits")
      .required("Please fill out this field"),
    password_confirm: Yup.string()
      .min(5, "Password must be at least 6 digits")
      .required("Please fill out this field")
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

  const submitHandler = useCallback(({...props}) => {
    const {values, setFieldValue, setFieldError} = props;
    const data = {
      email: values.email,
      password: values.password,
    };
    setLoading(true);
    apiCall.postData("register", {...data})
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          setFieldError("email", res.error);
          setFieldValue("password", "");
          setFieldValue("password_confirm", "");
        } else {
          navigate("/sign-in");
        }
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="sign-up">
      <div className="container">
        <div className="register-form">
          <h3>Sign up</h3>
          <Formik
            initialValues={{
              email: "",
              password: "",
              password_confirm: ""
            }}
            validationSchema={ValidationSchema}
            validateOnBlur={true}
            validateOnChange={false}
            onSubmit={(values, {setFieldValue, setFieldError}) => {
              submitHandler({values, setFieldError, setFieldValue});
            }}>
            {({values, handleChange, handleSubmit, errors}) => (
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="input"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  placeholder="Your email"
                  required={true}
                />
                {errors.email && <div className="errors">{errors.email}</div>}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  className="input"
                  placeholder="Your password"
                  required={true}
                />
                {errors.password && <div className="errors">{errors.password}</div>}
                <input
                  name="password_confirm"
                  onChange={handleChange}
                  value={values.password_confirm}
                  type="password"
                  className="input"
                  placeholder="Type password again"
                  required={true}
                />
                {errors.password_confirm && <div className="errors">{errors.password_confirm}</div>}
                <button type="submit" className="button">
                  {loading ? <SpinnerIcon/> : "Submit"}
                </button>
              </form>
            )}
          </Formik>
          <div className="register-form__link">
            Have an account? <Link to="/sign-in">Sign in.</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpPage;