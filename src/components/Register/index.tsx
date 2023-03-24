import {
  AiOutlineGoogle,
  AiOutlineRight,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import MainLogo from "assets/images/logo/main-logo.png";
import { FastField, Field, Form, Formik } from "formik";
import { userSchema } from "schema";
import InputFormik from "components/Common/InputFormik";
import { useDispatch, useSelector } from "react-redux";
import authThunk from "features/auth/authThunk";
import { AppDispatch, IRootState } from "app/store";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: IRootState) => state.auth);

  const handleSubmit = (values: userSchema.UserRegisterInput) => {
    dispatch(
      authThunk.register({
        password: values.password,
        username: values.username,
        email: values.email,
      })
    ).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        navigate("/signin");
      }
    });
  };

  return (
    <div>
      <div className="flex flex-row gap-2 items-center text-sm">
        <div className="hover:text-[#25A56A]">
          <NavLink to={"/"}>Home</NavLink>
        </div>
        <AiOutlineRight className="w-[10px] h-[10px] mt-0.5" />
        <span>Sign up</span>
      </div>
      <div className="flex flex-col items-center mt-8">
        <div className="flex flex-col items-center justify-center w-[420px] h-[600px] border rounded-lg border-[#222227]">
          <div className="mb-8">
            <img src={MainLogo} alt="main-logo" className="h-[30px]" />
          </div>
          <Formik
            initialValues={{
              username: "",
              password: "",
              confirmPassword: "",
              email: "",
              agreePolicy: false,
            }}
            validationSchema={userSchema.userRegisterSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ values, errors, touched }) => {
              console.log(errors);
              return (
                <Form className="flex flex-col gap-4">
                  <div className="flex flex-col gap-5">
                    {/* <Input
                type="text"
                name="fullName"
                placeHolder="Name"
                value={registerBody.fullName}
                handleChange={handleChange}
              /> */}
                    <FastField
                      name="username"
                      component={InputFormik}
                      type="text"
                      placeholder="Username"
                      title={touched.username && errors.username}
                    />
                    <FastField
                      name="email"
                      component={InputFormik}
                      type="email"
                      placeholder="Email"
                      title={touched.email && errors.email}
                    />
                    <FastField
                      name="password"
                      component={InputFormik}
                      type="password"
                      placeholder="Password"
                      title={touched.password && errors.password}
                    />
                    <FastField
                      name="confirmPassword"
                      component={InputFormik}
                      type="password"
                      placeholder="Confirm Password"
                      title={touched.confirmPassword && errors.confirmPassword}
                    />
                  </div>
                  <div className="flex flex-row items-center">
                    <Field>
                      {({ field }: { field: any }) => (
                        <input
                          name="agreePolicy"
                          id="policy"
                          onChange={field.onChange}
                          type="checkbox"
                          className="w-5 h-5 text-[#222227] bg-[#222227] rounded border-none outline-none"
                        />
                      )}
                    </Field>
                    <label htmlFor="policy" className="ml-2 cursor-pointer">
                      I agree to the
                    </label>
                    <NavLink
                      to={"/policy"}
                      className="text-[#25A56A] hover:underline ml-1"
                    >
                      Privacy Policy
                    </NavLink>
                  </div>
                  <span className="text-xs text-red-500">
                    {touched.agreePolicy && errors.agreePolicy}
                  </span>
                  <div className="flex flex-col items-center gap-2 mt-4">
                    <div>
                      <button
                        className="h-[52px] w-[340px] bg-[#25A56A] border-transparent rounded-xl font-semibold text-white text-sm transition ease-linear delay-50 hover:text-[#25A56A] hover:bg-[#222227]"
                        type="submit"
                      >
                        {auth.loading.login ? "LOADING" : "SIGN UP"}
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
                      <span className="text-white">
                        Already have an account?
                      </span>
                      <div className="text-[#25A56A] hover:underline">
                        <NavLink to={"/signin"}>Sign in!</NavLink>
                      </div>
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

export default Register;
