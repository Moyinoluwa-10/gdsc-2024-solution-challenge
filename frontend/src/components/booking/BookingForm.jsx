// react
import PropTypes from "prop-types";

// form
import { Formik, Form } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";

// axios
import axios from "axios";

// components
import ContactInfo from "./ContactInfo";
import CompanyInfo from "./CompanyInfo";

const BookingForm = ({ onSuccess }) => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          address: "",
          city: "",
          state: "",
          cleaningService: "",
          homeType: "",
          homeTypeOther: "",
          commercialType: "",
          commercialTypeOther: "",
          cleaningFrequency: "weekly",
          cleaningMode: "",
          noOfBathrooms: "",
          noOfBedrooms: "",
          noOfLivingRooms: "",
          date: "",
          termsAndConditions: false,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("Required"),
          lastName: Yup.string().required("Required"),
          phoneNumber: Yup.string().required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          address: Yup.string().required("Required"),
          city: Yup.string().required("Required"),
          state: Yup.string()
            .required("Select a state")
            .oneOf(
              ["ekiti", "oyo", "lagos", "abeokuta"],
              "Incorrect selection"
            ),
          cleaningService: Yup.string().required("Required"),
          homeType: Yup.string().when("cleaningService", {
            is: "residential",
            then: () => Yup.string().required("Select an option"),
          }),
          homeTypeOther: Yup.string().when("homeType", {
            is: "others",
            then: () => Yup.string().required("Required"),
          }),
          commercialType: Yup.string().when("cleaningService", {
            is: "commercial",
            then: () => Yup.string().required("Select an option"),
          }),
          commercialTypeOther: Yup.string().when("commercialType", {
            is: "others",
            then: () => Yup.string().required("Required"),
          }),
          cleaningFrequency: Yup.string()
            .required("Select an option")
            .oneOf(
              ["weekly", "biweekly", "monthly", "once"],
              "Incorrect selection"
            ),
          cleaningMode: Yup.string().when("cleaningService", {
            is: (cleaningService) =>
              cleaningService === "residential" ||
              cleaningService === "commercial",
            then: () =>
              Yup.string()
                .required("Required")
                .oneOf(["basic", "deep"], "Incorrect selection"),
          }),
          noOfBathrooms: Yup.string().when("cleaningService", {
            is: "residential",
            then: () =>
              Yup.number()
                .positive("Value must be greater than zero")
                .required("Required"),
          }),
          noOfBedrooms: Yup.string().when("cleaningService", {
            is: "residential",
            then: () =>
              Yup.number()
                .positive("Value must be greater than zero")
                .required("Required"),
          }),
          noOfLivingRooms: Yup.string().when("cleaningService", {
            is: "residential",
            then: () =>
              Yup.number()
                .positive("Value must be greater than zero")
                .required("Required"),
          }),
          date: Yup.date()
            .min(new Date(), "Value must be a future date")
            .required("Choose a date"),
          termsAndConditions: Yup.boolean().oneOf(
            [true],
            "You must agree to the terms and conditions to submit the form"
          ),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const toastID = toast.loading("Submitting...");
          axios
            .post(`${import.meta.env.VITE_API_URL}/api/v1/book`, values)
            // eslint-disable-next-line
            .then((response) => {
              toast.success("Form submitted successfully", {
                id: toastID,
              });
              setSubmitting(false);
              resetForm();
              onSuccess();
            })
            // eslint-disable-next-line
            .catch((error) => {
              toast.error("Error submitting form", {
                id: toastID,
              });
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form className="max-w-5xl mx-auto mb-20">
            <ContactInfo />
            <CompanyInfo values={values} onFieldValue={setFieldValue} />

            <button
              type="submit"
              className="py-4 px-14 md:px-20 z-0 block overflow-hidden bg-secondary text-2xl  disabled:bg-gray-700 disabled:cursor-not-allowed mx-auto mt-10 rounded-md text-white relative border border-transparent hover:border-secondary hover:text-secondary transition-all duration-300 before:absolute before:block before:top-0 before:-left-[100%] before:w-full before:h-full before:bg-white before:-z-10 hover:before:left-0 before:transition-all before:duration-300"
              disabled={isSubmitting}
            >
              Book Appointment
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

BookingForm.propTypes = {
  onSuccess: PropTypes.func,
};

export default BookingForm;
