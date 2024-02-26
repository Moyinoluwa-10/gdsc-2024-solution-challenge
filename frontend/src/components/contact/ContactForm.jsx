// form
import { Formik, Field, Form, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";

// axios
import axios from "axios";

const ContactForm = () => {
  return (
    <>
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
          const toastID = toast.loading("Submitting...");
          axios
            .post(`${import.meta.env.VITE_API_URL}/api/v1/contact`, values)
            // eslint-disable-next-line
            .then((response) => {
              resetForm();
              toast.success("Form submitted successfully", {
                id: toastID,
              });
              setSubmitting(false);
              // console.log(response);
            })
            // eslint-disable-next-line
            .catch((error) => {
              toast.error("Error submitting form", {
                id: toastID,
              });
              setSubmitting(false);
              // console.log(error);
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form className="max-w-5xl mx-auto mb-20">
            <div>
              <Field
                name="name"
                type="text"
                className="transition-all border border-black focus:border-2 focus:border-secondary  py-4 px-5 rounded-2xl w-full outline-none"
                placeholder="Your Name"
              />
              <div className="text-red-500 text-sm">
                <ErrorMessage name="name" />
              </div>
              <div>
                <Field
                  name="email"
                  type="email"
                  className="transition-all border border-black focus:border-2 focus:border-secondary  py-4 px-5 rounded-2xl w-full outline-none"
                  placeholder="Email Address"
                />
                <div className="text-red-500 text-sm">
                  <ErrorMessage name="email" />
                </div>
              </div>
            </div>

            <div>
              <Field
                name="message"
                as={"textarea"}
                cols="30"
                rows="10"
                className="transition-all border border-black focus:border-2 focus:border-secondary py-4 px-5 rounded-2xl w-full outline-none resize-none"
                placeholder="Your Message"
              />
              <div className="text-red-500 text-sm">
                <ErrorMessage name="message" />
              </div>
            </div>

            <button
              type="submit"
              // className="uppercase py-5 px-14 md:px-20 bg-secondary disabled:bg-gray-700 disabled:cursor-not-allowed rounded-2xl text-white block mx-auto mt-10"
              className="py-4 px-14 md:px-20 z-0 block overflow-hidden bg-secondary text-2xl  disabled:bg-gray-700 disabled:cursor-not-allowed mx-auto mt-10 rounded-md text-white relative border border-transparent hover:border-secondary hover:text-secondary transition-all duration-300 before:absolute before:block before:top-0 before:-left-[100%] before:w-full before:h-full before:bg-white before:-z-10 hover:before:left-0 before:transition-all before:duration-300"
              disabled={isSubmitting}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
