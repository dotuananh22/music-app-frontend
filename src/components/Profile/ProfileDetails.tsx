import { AppDispatch, IRootState } from "app/store";
import Input from "components/Common/Input";
import InputFormik from "components/Common/InputFormik";
import colors from "constants/color";
import authThunk from "features/auth/authThunk";
import { FastField, Form, Formik } from "formik";
import moment from "moment";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSchema } from "schema";

const ProfileDetails = () => {
  const auth = useSelector((state: IRootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  if (auth.loading.getUser) return <div>Loading</div>;

  const handleSubmit = (values: userSchema.UserUpdateInput) => {
    dispatch(authThunk.update(values));
  };

  return (
    <Formik
      initialValues={{
        fullName: auth.user?.fullName,
        phoneNumber: auth.user?.phoneNumber,
        email: auth.user?.email,
        // convert birthday to mm/dd/yyyy format
        birthday: moment(auth.user?.birthday).format("yyyy-MM-DD"),
        imageUrl: auth.user?.imageUrl,
      }}
      validationSchema={userSchema.userUpdateSchema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        return (
          <Form
            className={`p-6 border border-[${colors.lineColor}] rounded-lg basis-2/3`}
          >
            <h6 className="text-white font-semibold text-md mb-4">
              Profile details
            </h6>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="username">Username</label>

                <Input
                  disabled={true}
                  type="string"
                  value={auth.user?.username as string}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="fullName">Full Name</label>
                <FastField
                  name="fullName"
                  component={InputFormik}
                  type="text"
                  placeholder="Full name"
                  disabled={auth.loading.getUser}
                  title={errors.fullName}
                />
                {/* <Input name="fullName" type="text" placeHolder="Full Name" handleChange={handleChange} value={profileDetailsBody.fullName} /> */}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phoneNumber">Phone Number</label>
                <FastField
                  name="phoneNumber"
                  component={InputFormik}
                  type="text"
                  placeholder="Phone number"
                  disabled={auth.loading.getUser}
                  title={errors.phoneNumber}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <FastField
                  name="email"
                  component={InputFormik}
                  type="text"
                  placeholder="Email"
                  disabled={auth.loading.getUser}
                  title={errors.email}
                />
                {/* <Input name="email" type="email" placeHolder="Email" value={profileDetailsBody.email} handleChange={handleChange} /> */}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="birthday">Birthday</label>
                <FastField
                  name="birthday"
                  component={InputFormik}
                  type="date"
                  patern="dd/mm/yyyy"
                  disabled={auth.loading.getUser}
                  value={values.birthday}
                  title={errors.birthday}
                />
                {/* <Input name="birthday" type="date" placeHolder="" handleChange={handleChange} value={profileDetailsBody.birthday} /> */}
              </div>
              <div className="flex flex-col gap-2">
                <label className="block" htmlFor="file_input">
                  Avatar
                </label>
                {/* File must be image */}
                <FastField name="imageUrl">
                  {/*@ts-ignore*/}
                  {({ field, form, meta }) => (
                    <input
                      className="block w-full text-[#C0C0C0] bg-[#222227] border-none rounded-lg cursor-pointer focus:outline-none"
                      id="imageUrl"
                      name="imageUrl"
                      onChange={field.onChange}
                      type="file"
                      accept="image/*"
                    />
                  )}
                </FastField>
              </div>
            </div>
            <button
              className={`px-16 py-3 mt-4 bg-[${colors.greenColor}] w-auto rounded-lg text-white font-semibold transition ease-linear delay-50 hover:text-[${colors.greenColor}] hover:bg-[#222227]`}
              type="submit"
            >
              {auth.loading.updateUser ? "LOADING" : "SAVE"}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ProfileDetails;
