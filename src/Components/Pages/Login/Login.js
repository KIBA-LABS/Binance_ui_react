import { Fragment } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { Typography } from "@material-ui/core";
import { Image } from "react-bootstrap";

const Login = () => {
  const formInitialSchema = {
    phonenumber: "",
    password: "",
  };

  const formValidationSchema = yup.object().shape({
    phonenumber: yup.string().required("Phone number is required"),
    password: yup.string().required("Password is required"),
  });

  const handleFormSubmit = (values) => {
    console.log("Log In", values);
  };

  return (
    <Fragment>
      <div
        style={{
          display: "inline-block",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            width: "50%",
            height: "80vh",
            float: "left",
          }}
        >
          <div
            style={{
              display: "inline-block",
              margin: "auto",
              marginRight: "41px",
              marginTop: "100px",
            }}
          >
            <div className="col-md-12">
              <h1 className="text-center">Binance Account Login</h1>
              <h5 Style={{ color: "gray" }}>
                Welcome back!Log In with your Phone number or QR code
              </h5>
            </div>

            <div className="col-md-8 offset-md-2">
              <Formik
                initialValues={formInitialSchema}
                validationSchema={formValidationSchema}
                onSubmit={(values) => handleFormSubmit(values)}
              >
                <Form>
                  <div className="col-md-12 mt-4">
                    <Field
                      type="phone number"
                      name="phone number"
                      placeholder="Enter your phone number"
                      className="form-control"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="Phone number" />
                    </p>
                  </div>
                  <div className="col-md-12 mt-4">
                    <Field
                      type="text"
                      name="password"
                      placeholder="Enter your Password"
                      className="form-control"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="password" />
                    </p>
                  </div>

                  <div className="col-md-12 mt-4">
                    <button className="btn btn-primary btn-block" type="submit">
                      Log In
                    </button>
                    <Typography style={{ fontSize: "12px", color: "red" }}>
                      Forgot password?
                    </Typography>
                    <Typography style={{ fontSize: "12px", color: "red" }}>
                      Register now?
                    </Typography>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "inline-flex",
            width: "50%",
            height: "80vh",
          }}
        >
          <Image
            src="myqr.png"
            style={{
              border: "none",
              width: "400px",
              height: "400px",
              margin: "auto",
              opacity: "100px",
              marginTop: "100px",
            }}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
