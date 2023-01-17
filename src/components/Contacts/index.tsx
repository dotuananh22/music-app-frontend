/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppDispatch, IRootState } from "app/store";
import BreadCrumb from "components/Common/BreadCrumb";
import InputFormik from "components/Common/InputFormik";
import Input from "components/Common/InputFormik";
import colors from "constants/color";
import emailThunk from "features/email/emailThunk";
import { FastField, Form, Formik } from "formik";
import React, { useState } from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { contactSchema } from "schema";

const Contacts = () => {
  const email = useSelector((state: IRootState) => state.email);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <BreadCrumb baseAddress="Home" mainAddress="Contacts" path="/" />
      <div>
        <div className="flex flex-col gap-8 mt-12">
          <h2 className="text-4xl text-white">Contacts</h2>
          <div className="flex flex-row gap-8">
            <div className="basis-2/3">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  subject: "",
                  message: "",
                }}
                validationSchema={contactSchema.contactBody}
                onSubmit={(values) => {
                  dispatch(emailThunk.sendEmail(values));
                }}
              >
                {(formikProps) => {
                  const { values, errors, touched } = formikProps;
                  return (
                    <Form
                      className={`p-6 border border-[${colors.lineColor}] rounded-lg`}
                    >
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex flex-col gap-2">
                          {/* <Input name="name" type="text" placeHolder="Name" value={contactBody.name} handleChange={handleChange} /> */}
                          <FastField
                            name="name"
                            component={InputFormik}
                            type="text"
                            placeholder="Name"
                            title={touched.name && errors.name}
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          {/* <Input name="email" type="email" placeHolder="Email" value={contactBody.email} handleChange={handleChange} /> */}
                          <FastField
                            name="email"
                            component={InputFormik}
                            type="email"
                            placeholder="Email"
                            title={touched.email && errors.email}
                          />
                        </div>
                        <div className="col-span-2">
                          {/* <Input name="subject" type="text" placeHolder="Subject" value={contactBody.subject} handleChange={handleChange} /> */}
                          <FastField
                            name="subject"
                            component={InputFormik}
                            type="text"
                            placeholder="Subject"
                            title={touched.subject && errors.subject}
                          />
                        </div>
                        <div className="col-span-2">
                          <FastField name="message">
                            {({
                              field,
                              form,
                              meta,
                            }: {
                              field: any;
                              form: any;
                              meta: any;
                            }) => (
                              <textarea
                                {...field}
                                placeholder="Message"
                                className="block pl-5 w-full min-h-[120px] text-white bg-[#222227] rounded-xl outline-none border-none resize-none"
                              />
                            )}
                          </FastField>
                          <span className="text-xs text-red-500">
                            {touched.message && errors.message}
                          </span>
                        </div>
                      </div>
                      <button
                        className={`px-16 py-3 mt-4 bg-[${colors.greenColor}] w-auto rounded-lg text-white font-semibold`}
                        disabled={email.loading.sendEmail}
                      >
                        {email.loading.sendEmail ? "LOADING" : "SEND"}
                      </button>
                    </Form>
                  );
                }}
              </Formik>
            </div>
            <div className="basis-1/3 flex flex-col gap-8">
              <div>
                <h2 className="text-3xl text-white mb-4">Info</h2>
                <p className="text-base text-[#c0c0c0] text-justify">
                  It is a long fact that a reader will be distracted by the
                  readable content of a page when looking at its layout
                </p>
              </div>
              <div className="flex flex-col gap-2 text-white text-base mt-2">
                <span
                  className={`hover:text-[${colors.greenColor}] cursor-pointer`}
                >
                  0123456789
                </span>
                <span
                  className={`hover:text-[${colors.greenColor}] cursor-pointer`}
                >
                  support@amusic.com
                </span>
                <span
                  className={`hover:text-[${colors.greenColor}] cursor-pointer`}
                >
                  Khu pho 6, Linh Trung, Thu Duc, Ho Chi Minh, Viet Nam
                </span>
              </div>
              <div className="flex flex-row gap-4">
                <span className="w-[32px] h-[32px] rounded-full bg-[#3B5998] grid place-items-center cursor-pointer">
                  <FaFacebookF className="text-white" />
                </span>
                <span className="w-[32px] h-[32px] rounded-full bg-[#55ACEE] grid place-items-center cursor-pointer">
                  <AiOutlineTwitter className="text-white" />
                </span>
                <span className="w-[32px] h-[32px] rounded-full bg-[#FFFFFF] grid place-items-center cursor-pointer">
                  <AiOutlineInstagram className="text-black" />
                </span>
                <span className="w-[32px] h-[32px] rounded-full bg-[#010101] grid place-items-center cursor-pointer">
                  <IoLogoTiktok className="text-white" />
                </span>
                <span className="w-[32px] h-[32px] rounded-full bg-[#FF0000] grid place-items-center cursor-pointer">
                  <BsYoutube className="text-white" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
