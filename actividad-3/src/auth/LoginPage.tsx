import { Card } from "antd";
import { Field, Form, Formik } from "formik";

const LoginPage = () => {
  return (
    <div className="flex h-screen flex-row items-center justify-center text-3xl">
      {" "}
      <div className="flex flex-col gap-4">
        You are in the login page!{" "}
        <Card
          title="Please enter your credentials"
          className="w-80"
          bordered={false}
          actions={[
            <button type="submit" key="submitButton">
              Login
            </button>,
          ]}
        >
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form className="flex flex-col gap-3">
              <div>
                <label htmlFor="email" className="mr-3">
                  Email
                </label>
                <Field id="email" name="email" type="email" />
              </div>
              <div>
                <label htmlFor="password" className="mr-3">
                  Password
                </label>
                <Field id="password" name="password" type="password" />
              </div>
            </Form>
          </Formik>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
