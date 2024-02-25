// react
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { loginUser } from "../redux/feature/authSlice";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

// images
import logo from "../assets/images/logo.png";

// forms
import { useFormik } from "formik";
import * as Yup from "yup";

// firebase
import { auth, googleProvider } from "../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Login = () => {
  const [error, setError] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  function handleToggle() {
    setPasswordType(passwordType === "password" ? "text" : "password");
  }

  // const dispatch = useDispatch();
  const navigate = useNavigate();

  async function signIn(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // dispatch(loginUser(auth.currentUser));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-credential") {
        setError("Email or password is invalid");
      }
    }
  }

  async function handleGoogleAuth() {
    try {
      await signInWithPopup(auth, googleProvider);
      // dispatch(loginUser(auth.currentUser));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("This field is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("This field is required"),
    }),
    onSubmit: (values) => {
      signIn(values.email, values.password);
    },
  });

  return (
    <>
      <header className="container border-b">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="h-24" />
        </Link>
      </header>

      <section className="container grid place-items-center p-5 mt-20 mb-10">
        <div className="max-w-md w-full p-6 bg-white rounded-md">
          <h1 className="font-semibold text-2xl mb-2">Login</h1>
          <p className="font-medium mb-10">Hi, Welcome back👋</p>

          <div>
            <div className="flex justify-center mt-4 mb-4">
              <button
                className="w-full p-3 border border-gray-400 rounded-md text-lg flex items-center justify-center gap-5"
                onClick={handleGoogleAuth}
              >
                <FcGoogle />{" "}
                <span className="text-base">Login With Google</span>
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
          <div>
            <form onSubmit={formik.handleSubmit}>
              {/* <MyTextInput name={"email"} /> */}
              <div className="mb-4">
                <input
                  className="w-full border border-gray-400 rounded-md py-3 px-5 outline-none transition-all focus:border-black"
                  placeholder="Email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-[13px] text-red-500 mt-[2px]">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>

              <div className="mb-4 relative">
                <input
                  className="w-full border border-gray-400 rounded-md py-3 px-5 outline-none transition-all focus:border-black"
                  placeholder="Password"
                  type={passwordType}
                  {...formik.getFieldProps("password")}
                />
                {passwordType === "password" ? (
                  <div
                    className="absolute right-5 top-[17px] cursor-pointer"
                    onClick={handleToggle}
                  >
                    <FaRegEye />
                  </div>
                ) : (
                  <div
                    className="absolute right-5 top-[17px] cursor-pointer"
                    onClick={handleToggle}
                  >
                    <FaRegEyeSlash />
                  </div>
                )}
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-[13px] text-red-500 mt-[2px]">
                    {formik.errors.password}
                  </div>
                ) : null}
                {error ? (
                  <div className="text-[13px] text-red-500 mt-[2px]">
                    {error}
                  </div>
                ) : null}
              </div>

              <button
                type="submit"
                className="w-full mb-4 mt-3 py-3 px-5 bg-black hover:bg-opacity-80 transition-all duration-200 text-white rounded-md"
              >
                Login
              </button>
            </form>
          </div>

          <div>
            <p className="text-center text-sm">
              Not registered yet?{" "}
              <Link
                to={"/signup"}
                className="text-blue-600 hover:underline transition-all"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
