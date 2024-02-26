// react
import { Link } from "react-router-dom";

// components
import { MyCheckbox, MyTextInput } from "../form/FormComponents";

// form
import { ErrorMessage } from "formik";

export const CompanyInfo = () => {
  return (
    <>
      <div className="mb-10 mt-20">
        <h2 className="uppercase font-pt-bold text-2xl mb-1">
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

        <MyTextInput name="phoneNumber" type="text" placeholder="Zip Code" />
      </div>

      <MyCheckbox name="termsAndConditions">
        <p>
          By submitting this you are agreeing to our{" "}
          <Link
            to={"/terms-and-conditions"}
            className="text-secondary inline"
            target="_blank"
          >
            Terms & Conditions
          </Link>{" "}
          for any services rendered
        </p>
      </MyCheckbox>
      <div className="text-red-500 text-sm">
        <ErrorMessage name="termsAndConditions" />
      </div>
    </>
  );
};

export default CompanyInfo;
