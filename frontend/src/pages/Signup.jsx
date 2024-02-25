// react & redux
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
// import { useDispatch } from "react-redux";
// import { loginUser } from "../redux/feature/authSlice";

// images
import logo from "../assets/images/logo.png";

//form
import { Formik, Form } from "formik";
import { MyTextInput } from "../components/form/FormComponents";
import * as Yup from "yup";

// firebase
import { auth, db, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

const Signup = () => {
  const [error, setError] = useState("");

  // const dispatch = useDispatch();
  const navigate = useNavigate();

  async function signup(data) {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = auth.currentUser;
      await updateProfile(user, {
        displayName: `${data.firstName} ${data.lastName}`,
      });
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        location: "",
        website: "",
        createdAt: serverTimestamp(),
      });
      // dispatch(loginUser(auth.currentUser));
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      if (error.code === "auth/email-already-in-use") {
        setError("Email already in use");
      }
    }
  }

  async function handleGoogleAuth() {
    try {
      await signInWithPopup(auth, googleProvider);
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        location: "",
        website: "",
        createdAt: serverTimestamp(),
      });
      // dispatch(loginUser(auth.currentUser));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <header className="container border-b">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="h-24" />
        </Link>
      </header>

      <section className="container grid place-items-center p-5 mt-20 mb-10">
        <div className="max-w-4xl w-full p-6 bg-white rounded-md">
          <h1 className="font-semibold text-2xl mb-2">Signup</h1>
          <p className="font-medium mb-10">Hi, Welcome 👋</p>

          <div>
            <div className="flex justify-center mt-4 mb-4">
              <button
                className="w-full p-3 border border-gray-400 rounded-md text-lg flex items-center justify-center gap-5"
                onClick={handleGoogleAuth}
              >
                <FcGoogle />{" "}
                <span className="text-base">Signup With Google</span>
              </button>
            </div>
            <div className="flex justify-center items-center gap-5 mb-5 text-center">
              <div className="bg-gray-400 h-[1px] w-full hidden md:block"></div>
              <p className="text-center text-[13px] whitespace-nowrap">
                Or login with Email
              </p>
              <div className="bg-gray-400 h-[1px] w-full hidden md:block"></div>
            </div>
          </div>

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
              setSubmitting(true);
              signup(values);
              setSubmitting(false);
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form className="w-full">
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
                {error ? (
                  <div className="text-[13px] text-red-500 mt-[2px]">
                    {error}
                  </div>
                ) : null}
                <button
                  type="submit"
                  className="w-full mb-4 mt-3 py-3 px-5 bg-black hover:bg-opacity-80 transition-all duration-200 text-white rounded-md"
                  disabled={isSubmitting}
                >
                  Login
                </button>
              </Form>
            )}
          </Formik>

          <div>
            <p className="text-center text-[13px]">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="text-blue-600 hover:underline transition-all"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
