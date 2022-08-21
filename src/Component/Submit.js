import React from "react";

const Submit = ({ users }) => {
  return (
    <>
      {users?.map((data) => (
        <div className="submit_form mt-10 flex justify-center items-center mb-9  ">
          <div className="personal_details   border border-gray-200 capitalize space-y-6 w-1/2  p-10 ">
            <div className="name space-x-4 font-bold">
              <labal>name:</labal>
              <span>{data.name}</span>
            </div>
            <div className="dob space-x-4 font-bold">
              <labal>Date of birth :</labal>
              <span>{data.dob}</span>
            </div>

            <div className="gender space-x-4 font-bold">
              <labal>sex:</labal>
              <span>{data.gender}</span>
            </div>

            <div className="number space-x-4 font-bold ">
              <labal>mobile:</labal>
              <span>{data.number}</span>
            </div>

            <div className="govissue id space-x-4 font-bold ">
              <labal>Gov issed id:</labal>
              <span>{data.id}</span>
            </div>

            <div className="gov_id space-x-4 font-bold">
              <labal>gov_id</labal>
              <span>{data.govid}</span>
            </div>

            <div className="guardian space-x-4 font-bold">
              <labal>guardian labal:</labal>
              <span>{data.enterlabal}</span>
            </div>

            <div className="guardian_name space-x-4 font-bold">
              <labal>guardian name</labal>
              <span>{data.guardian}</span>
            </div>

            <div className="email space-x-4 font-bold">
              <labal>Email:</labal>
              <span>{data.email}</span>
            </div>
            <div className="emergency_conatact space-x-4 font-bold">
              <labal>Emergency Conatact Number:</labal>
              <span>{data.contact}</span>
            </div>
            <div className="address space-x-4 font-bold">
              <labal>Address:</labal>

              <span>{data.address}</span>
            </div>

            <div className="state space-x-4 font-bold">
              <labal>state:</labal>
              <span>{data.state}</span>
            </div>

            <div className="city space-x-4 font-bold">
              <labal>city:</labal>
              <span>{data.city}</span>
            </div>

            <div className="country space-x-4 font-bold">
              <labal>country:</labal>
              <span>{data.country}</span>
            </div>

            <div className="pincode space-x- font-bold  ">
              <labal>pincode :</labal>
              <span>{data.pincode}</span>
            </div>

            <div className="occupation space-x-4 font-bold ">
              <labal>occupation :</labal>
              <span>{data.occupation}</span>
            </div>

            <div className="religion space-x-4 font-bold">
              <labal>religion :</labal>
              <span>{data.religion}</span>
            </div>

            <div className="martial status  space-x-4 font-bold">
              <labal>martial :</labal>
              <span>{data.martial}</span>
            </div>

            <div className="group  space-x-4 font-bold">
              <labal>blood group :</labal>
              <span>{data.group}</span>
            </div>

            <div className="nationlity space-x-4 font-bold">
              <labal>natinality:</labal>
              <span>{data.nation}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Submit;
