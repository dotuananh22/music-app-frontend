import { AppDispatch, IRootState } from "app/store";
import InputFormik from "components/Common/InputFormik";
import Input from "components/Common/InputFormik";
import colors from "constants/color";
import authThunk from "features/auth/authThunk";
import { FastField, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSchema } from "schema";

const ChangePassword = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const user = useSelector((state: IRootState) => state.auth);
  const handleSubmit = (values: userSchema.UserUpdatePasswordInput) => {
    dispatch(authThunk.updateUserPassword(values)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        dispatch(authThunk.logout());
        navigate("/signin");
      }
    });
  };

  return (
    <Formik
      initialValues={{
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      }}
      validationSchema={userSchema.updateUserPasswordSchema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        return (
          <Form
            className={`p-6 border border-[${colors.lineColor}] rounded-lg basis-1/3`}
          >
            <h6 className="mb-4 text-white font-semibold text-md">
              Change password
            </h6>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="oldPassword">Old password</label>
                <FastField
                  name="oldPassword"
                  component={InputFormik}
                  type="password"
                  placeholder="Old password"
                  title={touched.oldPassword && errors.oldPassword}
                />
                {/* <Input
                name="oldPassword"
                type="password"
                placeHolder="Old password"
                value={changePasswordBody.oldPassword}
                handleChange={handleChange}
              /> */}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="newPassword">New password</label>
                {/* <Input
                name="newPassword"
                type="password"
                placeHolder="New Password"
                value={changePasswordBody.newPassword}
                handleChange={handleChange}
              /> */}
                <FastField
                  name="newPassword"
                  component={InputFormik}
                  type="password"
                  placeholder="new password"
                  title={touched.newPassword && errors.newPassword}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="confirmPassword">Confirm New Password</label>
                {/* <Input
                name="confirmPassword"
                type="password"
                placeHolder="Confirm New Password"
                value={changePasswordBody.confirmPassword}
                handleChange={handleChange}
              /> */}
                <FastField
                  name="confirmPassword"
                  component={InputFormik}
                  type="password"
                  placeholder="confirm password"
                  title={touched.confirmPassword && errors.confirmPassword}
                />
              </div>
            </div>
            <button
              className={`px-16 py-3 mt-4 bg-[${colors.greenColor}] w-auto rounded-lg text-white font-semibold transition ease-linear delay-50 hover:text-[${colors.greenColor}] hover:bg-[#222227]`}
              type="submit"
            >
              {user.loading.updateUserPassword ? "LOADING" : "SAVE"}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ChangePassword;
