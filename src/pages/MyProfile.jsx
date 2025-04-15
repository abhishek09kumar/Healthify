import React, { useState } from "react";
import { assets } from "../assets/healthify_assets/assets_frontend/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Abhishek Kumar",
    image: assets.profile_pic,
    email: "thor715318@gmail.com",
    mobile: "9625754736",
    address: "New Delhi 110043",
    gender: "Male",
    dob: "2001-06-xx",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="dark:bg-gray-900   text-sm text-white p-5">
      <div className="max-w-lg flex flex-col gap-4">
      <img src={userData.image} alt="Profile" className="w-36 rounded mt-16" />

      {/* Name Field */}
      {isEdit ? (
        <input
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
          className="text-gray-700 bg-gray-200 p-1 rounded"
        />
      ) : (
        <p className="dark:bg-gray-900">{userData.name}</p>
      )}

      <hr className="w-48" />

      {/* Contact Information */}
      <div className="grid grid-cols-2 gap-2">
        <p className="font-semibold">Contact Information</p>
        <p>Email: {userData.email}</p>

        <p>Mobile:</p>
        {isEdit ? (
          <input
            type="text"
            value={userData.mobile}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, mobile: e.target.value }))
            }
            className="text-gray-700 bg-gray-200 p-1 rounded"
          />
        ) : (
          <p className="dark:bg-gray-900">{userData.mobile}</p>
        )}

        <p>Address:</p>
        {isEdit ? (
          <input
            type="text"
            value={userData.address}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, address: e.target.value }))
            }
            className="text-gray-700 bg-gray-200 p-1 rounded"
          />
        ) : (
          <p className="dark:bg-gray-900">{userData.address}</p>
        )}
      </div>

      {/* Basic Information */}
      <div>
        <p className="font-semibold">Basic Information</p>
        <div>
          <p>Gender:</p>
          {isEdit ? (
            <select
              value={userData.gender}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              className="text-gray-700 bg-gray-200 p-1 rounded"
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}
        </div>
      </div>

      {/* Date of Birth */}
      <div>
        <p>Date of Birth:</p>
        {isEdit ? (
          <input
            type="date"
            value={userData.dob}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, dob: e.target.value }))
            }
            className="text-gray-700 bg-gray-200 p-1 rounded"
          />
        ) : (
          <p>{userData.dob}</p>
        )}
      </div>

      {/* Edit & Save Button */}
      <div className="flex justify-center mt-4">
        {isEdit ? (
          <button
            onClick={() => setIsEdit(false)}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-36"
          >
            Edit
          </button>
        )}
      </div>
    </div>
    </div>
  );
};

export default MyProfile;
