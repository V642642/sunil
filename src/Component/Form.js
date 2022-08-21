import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import { signupschema } from "../schemas/validation";
import Submit from "./Submit";

const initialValues = {
  name: "",
  dob: "",
  gender: "",
  number: "",
  id: "",
  govid: "",
  enterlabal:"",
  guardian:"",
  email:"",
  contact:"",
  address:"",
  state:"" ,
  city:"",
  pincode :"",
  country:"",
  occupation:"",
  religion:"",
  martial:"",
  group:"",
  nation:""
};

const Form = () => {
  const [users, setUsers] = useState([]);

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupschema,
      onSubmit: (values, action) => {
        setUsers([...users, values]);
        console.log(values);
      },
    });
  return (
<>

    <div className=" p-6 w-full bg-gray-100 ">
      <form className="form w-full" onSubmit={handleSubmit}>
        <div className="personal_details">
          <div className="logo_name  underline font-bold  capitalize ">
            Personal_details
          </div>

          <div className="mt-8 flex justify-between w-full  gap-20">
            <div className="name flex lg:w-1/2  space-x-3  items-center ">
              <labal>Name</labal>
              <div className="flex flex-col items-baseline w-full ">
                <input
                  type="name"
                  className="border-gray-300 rounded-md border w-full p-2   bg-gray-100"
                  placeholder="Enter Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? (
                  <p className="form-error text-red-600 ">{errors.name}</p>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="w-1/2 flex gap-12">
              <div className="name flex w-full  space-x-3 items-center ">
                <labal>Date of Birth of age</labal>
                <input
                  type="date"
                  className="border-gray-300 rounded-md border w-full p-2   bg-gray-100"
                  placeholder="Enter Name"
                  name="dob"
                  value={values.dob}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <div className="name flex w-full  space-x-2 items-center ">
                <labal>Sex</labal>
                <select
                  className=" p-3 bg-gray-100 border w-full border-gray-300 px-2"
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option>gender</option>
                  <option>male</option>
                  <option>female</option>
                </select>
              </div>
            </div>
          </div>

          <div className="personal_2  mt-8 flex w-full justify-between items-center gap-20">
            <div className="mobile space-x-2 w-1/2">
              <labal>Mobile</labal>
              <input
                type="number"
                className="border border-gray-300     w-2/3 p-2 bg-gray-100 rounded"
                placeholder="Enter mobile "
                name="number"
                value={values.number}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.number && touched.number ? (
                <p className="form-error text-red-600 ">{errors.number}</p>
              ) : (
                ""
              )}
            </div>

            <div className="govt w-1/2  flex  space-x-4  gap-6  items-center">
              <labal className="w-[200px]">Govt issued ID</labal>
              <select
                className=" border border-gray-200 w-2/5  px-3 p-3"
                name="id"
                value={values.id}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option>id Type</option>
                <option>2</option>
                <option>2</option>
              </select>
              <input
                type="text"
                className="border border-gray-300     w-full p-2 bg-gray-100 rounded"
                placeholder="Enter govt ID "
                name="govid"
                value={values.govid}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>
        </div>

        <div className="conatact_details   mt-5 ">
          <div className="contact_name underline  font-bold">
            Conatact_details
          </div>

          <div className="mt-3 w-full flex justify-between gap-20 ">
            <div className="flex  lg:w-1/2 items-center justify-between ">
              <span>Guardian Details</span>

              <select
                className="w-[40%] p-3 bg-gray-100 border border-gray-300 rounded"
                name="enterlabal"
                value={values.enterlabal}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option>enter labal</option>
                <option>labal1</option>
                <option>labal2</option>
              </select>
              <input
                type="text"
                className="border border-gray-200 w-[40%] p-3 bg-gray-100  rounded"
                placeholder="Enter gaurdian name"
                name="guardian"
                value={values.guardian}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="w-1/2 flex items-center justify-between space-x-3">
              <labal>Email</labal>
              <input
                type="text"
                className="border border-gray-200 w-[40%] p-3 bg-gray-100  rounded"
                placeholder="Enter Email"
                name="email"
                
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <labal>Emergency Conatact Number</labal>
              <input
                type="number"
                className="border border-gray-200 w-[40%] p-3 bg-gray-100  rounded"
                placeholder="Enter gaurdian name"
                name="contact"
                value={values.contact}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>
        </div>

        <div className="address_details mt-5">
          <labal className="underline font-bold">Address Details</labal>

          <div className="w-full mt-8 flex gap-20">
            <div className="address w-1/2 flex items-center space-x-4 ">
              <labal>Address</labal>
              <input
                type="text"
                className="border-gray-300 rounded-md border w-full p-2   bg-gray-100"
                placeholder="Enter Name"
                name="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="w-1/2 flex justify-between items-center ">
              <labal>State</labal>
              <select className=" border border-gray-200 bg-gray-100 w-2/5 rounded px-3 p-3"
              name="state"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
              >
                <option>uttar pradesh</option>
                <option>rajasthan</option>
              </select>
              <label>City</label>
              <select className=" border border-gray-200 w-2/5 bg-gray-100 rounded px-3 p-3"
              name="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              >
                <option>delhi</option>
                <option>mumbai</option>
              </select>
            </div>
          </div>

          <div className="w-full mt-10 flex gap-20">
            <div className="country  w-1/2 flex space-x-3 items-center">
              <label>Country</label>
              <div className="  border border-gray-300  w-2/3 px-2   flex items-center justify-between">
                <input
                  className="p-2  bg-gray-100 "
                  type="text"
                  
                  name="country"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                <FontAwesomeIcon icon={faXmark} className="text-3xl" />
              </div>
            </div>
            <div className="pin flex items-center  w-1/2  space-x-4">
              <labal>Pincode </labal>
              <input
                type="number"
                className="border-gray-300 rounded-md border w-1/2 p-2   bg-gray-100"
                placeholder="Enter pincode"
                name="pincode"
                value={values.pincode}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>
        </div>

        <div className="w-full mt-8">
          <labal className="underline font-bold ">Other Details</labal>
          <div className="w-full flex justify-between items-center mt-6 gap-16">
            <div className="occupation  space-x-4 flex items-center w-1/4">
              <labal>Occupation</labal>
              <input
                type="text"
                className="border-gray-300 rounded-md border w-full  p-2   bg-gray-100"
                placeholder="Enter Name"
                name="occupation"
                value={values.occupation}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="religion space-x-4  flex items-center w-1/4">
              <labal>Religion</labal>
              <select className=" border border-gray-200  bg-gray-100 w-full  px-3 p-3"
              
              
              name="religion"
                value={values.religion}
                onChange={handleChange}
                onBlur={handleBlur}>
                <option>hindu</option>
                <option>muslim</option>
              </select>
            </div>
            <div className="status space-x-4 flex items-center w-1/4">
              <labal>Martial status</labal>
              <select className=" border  bg-gray-100 border-gray-200  w-full  px-3 p-3"
              name="martial"
              value={values.martial}
              onChange={handleChange}
              onBlur={handleBlur}
              
              >
                <option>Enter maritial status</option>
<option>married</option>
<option>unmarried</option>
              </select>
            </div>
            <div className="blood space-x-4 flex items-center w-1/4">
              <labal>Blood Group</labal>
              <select className=" border  bg-gray-100 w-full border-gray-200   px-3 p-3"
              name="group"
              value={values.group}
              onChange={handleChange}
              onBlur={handleBlur}>
                <option>A</option>
                <option>B</option>
              </select>
            </div>
          </div>

          <div className="natinality  mt-8">
            <div className="country  w-1/4 flex space-x-10 items-center">
              <label>Natinality</label>
              <div className="  border border-gray-300  w-2/3 px-2   flex items-center justify-between">
                <input
                  className="p-2  bg-gray-100 "
                  type="text"
                  
                  name="nation"
                value={values.nation}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                <FontAwesomeIcon icon={faXmark} className="text-3xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="buttons justify-end flex mt-16">
          <div className="flex gap-32">
            <button className=" border border-red-600 text-red-600 p-3 px-20 ">
              <div className="button_name flex flex-col space-y-3 items-center">
                <span className="font-bold">CANCEL</span>
                <span>(ESC)</span>
              </div>
            </button>
            <button
              className="border border-green-600 bg-green-600 text-white p-3 px-20"
              type="submit"
            >
              <div className="button_name flex flex-col space-y-3 items-center">
                <span className="font-bold"> SUBMIT</span>
                <span>(S)</span>
              </div>
            </button>
          </div>
        </div>
      </form>
    </div>

<Submit   users = {users}/>

    </>
  );
};

export default Form;
