import { Form, Formik } from "formik";
import { MyTextInput } from "../components/form/FormComponents";
import * as Yup from "yup";

const Dashboard = () => {
  return (
    <>
      <div>Dashboard</div>;
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          message: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="w-full">
            <div className="mb-10">
              <h2 className="uppercase font-medium mb-1">
                Personal information
              </h2>
              <hr />
            </div>

            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-10">
              <MyTextInput
                name="firstName"
                type="text"
                placeholder="First Name"
              />

              <MyTextInput
                name="lastName"
                type="text"
                placeholder="Last Name"
              />

              <MyTextInput
                name="email"
                type="email"
                placeholder="Email Address"
              />

              <MyTextInput
                name="phoneNumber"
                type="tel"
                placeholder="Phone number"
              />

              <MyTextInput
                name="password"
                type="password"
                placeholder="Password"
              />

              <MyTextInput
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
              />
            </div>

            <div className="mb-10">
              <h2 className="uppercase font-medium mb-1">
                Company information
              </h2>
              <hr />
            </div>

            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-10">
              <MyTextInput name="company" type="text" placeholder="Name" />

              <MyTextInput
                name="position"
                type="text"
                placeholder="Position in company"
              />

              <MyTextInput name="address" type="text" placeholder="Address" />

              <MyTextInput name="phoneNumber" type="text" placeholder="City" />

              <MyTextInput name="phoneNumber" type="text" placeholder="State" />

              <MyTextInput
                name="phoneNumber"
                type="text"
                placeholder="Zip Code"
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Dashboard;
