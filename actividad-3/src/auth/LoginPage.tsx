import { Card } from "antd";
import { Field, Form, Formik } from "formik";

const LoginPage = () => {
  return (
    <div className="flex h-screen flex-row items-center justify-center bg-blue-200 text-3xl">
      {" "}
      <div className="flex flex-col gap-8">
        You are in the login page!
        <Card
          title="Please enter your credentials"
          className="w-80"
          bordered={false}
          actions={[
            <button type="submit" key="submitButton" form="loginForm">
              Login
            </button>,
          ]}
        >
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={({ email, password }) => {
              //TODO: send credentials to backend and authenticate
              console.log({ email, password });
            }}
          >
            <Form className="flex flex-col gap-3" id="loginForm">
              <div className="flex flex-row justify-between">
                <label htmlFor="email">Email</label>
                <Field //TODO validation
                  id="email"
                  name="email"
                  type="email"
                  className="rounded-md border-2 border-blue-200 focus:border-blue-600 focus:bg-blue-300 focus:outline-none"
                />
              </div>
              <div className="flex flex-row justify-between">
                <label htmlFor="password" className="">
                  Password
                </label>
                <Field //TODO validation
                  id="password"
                  name="password"
                  type="password"
                  className="rounded-md border-2 border-blue-200 focus:border-blue-600 focus:bg-blue-300 focus:outline-none"
                />
              </div>
            </Form>
          </Formik>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
