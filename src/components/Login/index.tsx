import InputFormik from "components/Common/InputFormik";
import React, { useEffect, useState } from "react";
import {
  AiOutlineGoogle,
  AiOutlineRight,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import MainLogo from "assets/images/logo/main-logo.png";
import { useDispatch, useSelector } from "react-redux";
import authThunk from "../../features/auth/authThunk";
import { Formik, Form, Field, FastField } from "formik";
import * as Yup from "yup";
import { userSchema } from "schema";
import { AppDispatch } from "app/store";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const auth = useSelector((state: any) => state.auth);

  if (auth.loggedIn) {
    navigate("/");
  }

  const handleSubmit = (values: userSchema.UserLoginInput) => {
    dispatch(authThunk.login(values));
  };

  return (
    <div>
      <div className="flex flex-row gap-2 items-center text-sm">
        <div className="hover:text-[#25A56A]">
          <NavLink to={"/"}>Home</NavLink>
        </div>
        <AiOutlineRight className="w-[10px] h-[10px] mt-0.5" />
        <span>Sign in</span>
      </div>
      <div className="flex flex-col items-center mt-8">
        <div className="flex flex-col items-center justify-center w-[420px] h-[560px] border rounded-lg border-[#222227]">
          <div className="mb-8">
            <img src={MainLogo} alt="main-logo" className="h-[30px]" />
          </div>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={userSchema.userLoginSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            {(formikProps) => {
              const { values, errors, touched } = formikProps;
              console.log({ values, errors, touched });

              return (
                <Form className="flex flex-col gap-4">
                  <div className="flex flex-col gap-5">
                    <FastField
                      name="username"
                      component={InputFormik}
                      type="text"
                      placeholder={"Username or Email"}
                      disabled={auth.loading}
                      title={touched.username && errors.username}
                    />

                    {/* <Input
                      name="username"
                      placeHolder="Username or Email"
                      type="text"
                      value={loginBody.username}
                      handleChange={handleChange}
                    /> */}
                    <FastField
                      name="password"
                      component={InputFormik}
                      type="password"
                      placeholder="Password"
                      disabled={auth.loading}
                      title={touched.password && errors.password}
                    />
                  </div>
                  <div className="flex flex-row items-center">
                    <input
                      id="rememberPassword"
                      type="checkbox"
                      className="w-5 h-5 text-[#222227] bg-[#222227] rounded border-none outline-none"
                    />
                    <label
                      htmlFor="rememberPassword"
                      className="ml-2 cursor-pointer"
                    >
                      Remember Me
                    </label>
                  </div>
                  <div className="flex flex-col items-center gap-2 mt-4">
                    <div>
                      <button className="h-[52px] w-[340px] bg-[#25A56A] border-transparent rounded-xl font-semibold text-white text-sm transition ease-linear delay-50 hover:text-[#25A56A] hover:bg-[#222227]">
                        {auth.loading ? "LOGGING IN" : "SIGN IN"}
                      </button>
                    </div>
                    <div>or</div>
                    <div className="flex flex-row items-center justify-between gap-4 w-[340px] mt-2">
                      <span className="w-[100px] h-[46px] rounded-xl bg-[#3B5998] grid place-items-center text-xl text-white cursor-pointer transition ease-linear delay-50 hover:text-[#3B5998] hover:bg-[#C0C0C0]">
                        <FaFacebookF />
                      </span>
                      <span className="w-[100px] h-[46px] rounded-xl bg-[#55ACEE] grid place-items-center text-xl text-white cursor-pointer transition ease-linear delay-50 hover:text-[#55ACEE] hover:bg-[#C0C0C0]">
                        <AiOutlineTwitter />
                      </span>
                      <span className="w-[100px] h-[46px] rounded-xl bg-[#DF4A32] grid place-items-center text-xl text-white cursor-pointer transition ease-linear delay-50 hover:text-[#DF4A32] hover:bg-[#C0C0C0]">
                        <AiOutlineGoogle />
                      </span>
                    </div>
                    <div className="flex flex-row gap-1 items-center mt-6">
                      <span className="text-white">Don't have an account?</span>
                      <div className="text-[#25A56A] hover:underline">
                        <NavLink to={"/signup"}>Sign up!</NavLink>
                      </div>
                    </div>
                    <div className="text-[#25A56A] mt-2 hover:underline">
                      <NavLink to={"#"}>Forgot password?</NavLink>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
