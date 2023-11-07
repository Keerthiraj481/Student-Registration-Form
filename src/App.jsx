import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const App = () => {
  const onChange = () => {};
  return (
    <main
      className="w-full
    h-full
    bg-gradient-to-r from-emerald-500 from-10% via-blue-400 via-purple-500 via-50% to-pink-500 to-90%
    background-animate flex items-center justify-center"
    >
      <div className="card w-[50rem] bg-white min-h-[80rem] mt-10 border-pink-700 border-solid">
        <h1 className="text-rose-600 text-3xl font-bold flex items-center justify-center">
          STUDENT REGISTRATION FORM
        </h1>
        <form>
          <div>
            <div className="first-name flex items-center justify-evenly">
              <label className="text-base font-bold text-rose-800">
                First Name
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-blue-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30rem] p-2 dark:bg-white-700 dark:border-rose-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter First Name"
              />
            </div>
          </div>
          <div className="last-name flex items-center justify-evenly">
            <label className="last-name text-base font-bold text-rose-800">
              Last Name
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-blue-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30rem] p-2 dark:bg-white-700 dark:border-rose-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Last Name"
            />
          </div>
          <div className="flex items-center justify-evenly">
            <p className="text-base font-bold text-rose-800">Gender</p>
            <form className="flex items-center justify-around">
              <input type="radio" name="gender" value="Male" />
              <label htmlFor="Male">Male</label>
              <input type="radio" name="gender" value="Female" />
              <label htmlFor="Female">Female</label>
            </form>
          </div>
          <div className="flex items-center justify-evenly">
            <label className="text-base font-bold text-rose-800">Age</label>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-blue-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30rem] p-2 dark:bg-white-700 dark:border-rose-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your Age"
            />
          </div>
          <div className="flex items-center justify-evenly">
            <label className="text-base font-bold text-rose-800">
              Date of Birth
            </label>
            <input
              type="date"
              className="bg-gray-50 border border-gray-300 text-blue-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30rem] p-2 dark:bg-white-700 dark:border-rose-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="dd-mm-yyyy"
            />
          </div>
          <div className="flex items-center justify-evenly">
            <label className="text-base font-bold text-rose-800">
              Email Address
            </label>
            <input
              type="email"
              className="bg-gray-50 border border-gray-300 text-blue-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30rem] p-2 dark:bg-white-700 dark:border-rose-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex items-center justify-evenly">
            <label className="text-base font-bold text-rose-800">
              Password
            </label>
            <input
              type="password"
              minLength="8"
              className="bg-gray-50 border border-gray-300 text-blue-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30rem] p-2 dark:bg-white-700 dark:border-rose-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter a Password min 8 characters"
            />
          </div>
          <div className="flex items-center justify-evenly">
            <label className="text-base font-bold text-rose-800">
              Confirm Password
            </label>
            <input
              type="password"
              minLength="8"
              className="bg-gray-50 border border-gray-300 text-blue-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30rem] p-2 dark:bg-white-700 dark:border-rose-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Confirm Password"
            />
          </div>
          <div className="flex items-center justify-evenly">
            <label className="text-base font-bold text-rose-800">
              Phone Number
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-blue-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[4rem] p-2 dark:bg-white-700 dark:border-rose-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="phone-id"
              id="phone-id "
            >
              <option value="india">+91</option>
            </select>
            <input
              type="tel"
              className="bg-gray-50 border border-gray-300 text-blue-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[22rem] p-2 dark:bg-white-700 dark:border-rose-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your Phone Number"
            />
          </div>
          <div className="flex items-center justify-evenly">
            <label className="text-base font-bold text-rose-800">Address</label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-blue-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30rem] p-[4.5rem] dark:bg-white-700 dark:border-rose-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your Address"
            />
          </div>
          <div className="flex items-center justify-evenly">
            <label className="text-base font-bold text-rose-800">State</label>
            <select
              name="state"
              id="select-state"
              className="bg-gray-50 border border-gray-300 text-blue-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30rem] p-2 dark:bg-white-700 dark:border-rose-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="--Select your State--"
            >
              <option value="" selected disabled>
                --Select your State--
              </option>
              <option value="" className="font-bold">
                Andaman and Nicobar Islands
              </option>
              <option value="" className="font-bold">
                Andhra Pradesh
              </option>
              <option value="" className="font-bold">
                Arunachal Pradesh
              </option>
              <option value="" className="font-bold">
                Assam
              </option>
              <option value="" className="font-bold">
                Bihar
              </option>
              <option value="" className="font-bold">
                Chhattisgarh
              </option>
              <option value="" className="font-bold">
                Goa
              </option>
              <option value="" className="font-bold">
                Gujarat
              </option>
              <option value="" className="font-bold">
                Haryana
              </option>
              <option value="" className="font-bold">
                Himachal Pradesh
              </option>
              <option value="" className="font-bold">
                Jharkand
              </option>
              <option value="" className="font-bold">
                Karnataka
              </option>
              <option value="" className="font-bold">
                Kerala
              </option>
              <option value="" className="font-bold">
                Madhya Pradesh
              </option>
              <option value="" className="font-bold">
                Maharashtra
              </option>
              <option value="" className="font-bold">
                Manipur
              </option>
              <option value="" className="font-bold">
                Meghalaya
              </option>
              <option value="" className="font-bold">
                Mizoram
              </option>
              <option value="" className="font-bold">
                Nagaland
              </option>
              <option value="" className="font-bold">
                Odisha
              </option>
              <option value="" className="font-bold">
                Punjab
              </option>
              <option value="" className="font-bold">
                Rajasthan
              </option>
              <option value="" className="font-bold">
                Sikkim
              </option>
              <option value="" className="font-bold">
                Tamil Nadu
              </option>
              <option value="" className="font-bold">
                Telangana
              </option>
              <option value="" className="font-bold">
                Tripura
              </option>
              <option value="" className="font-bold">
                Uttar Pradesh
              </option>
              <option value="" className="font-bold">
                Uttarakhand
              </option>
              <option value="" className="font-bold">
                West Bengal
              </option>
            </select>
          </div>
          <div className="flex items-center justify-evenly">
            <label className="text-base font-bold text-rose-800">
              Pin Code
            </label>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-blue-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30rem] p-2 dark:bg-white-700 dark:border-rose-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your Pin Code"
            />
          </div>
          <div className="flex items-center justify-evenly">
            <label className="text-base font-bold text-rose-800">Hobbies</label>
            <input type="checkbox" id="music" />
            <label
              htmlFor="music"
              className="text-base font-bold text-rose-800"
            >
              Music
            </label>
            <input type="checkbox" id="movies" />
            <label
              htmlFor="movies"
              className="text-base font-bold text-rose-800"
            >
              Movies
            </label>
            <input type="checkbox" id="sports" />
            <label
              htmlFor="sports"
              className="text-base font-bold text-rose-800"
            >
              Sports
            </label>
            <input type="checkbox" id="travel" />
            <label
              htmlFor="travel"
              className="text-base font-bold text-rose-800"
            >
              Travel
            </label>
          </div>
          <div className="flex items-center justify-evenly">
            <label className="text-base font-bold text-rose-800">
              Upload Photo
            </label>
            <p className="text-rose-500">*Max size 100kb.</p>
            <input type="file" />
          </div>
          <div className="flex items-center justify-evenly">
            <input type="checkbox" className="ml-[1rem] w-4 h-4" />
            <p>
              I hereby declare that the above information provided is true and
              correct.
            </p>
          </div>
          <div>
            <ReCAPTCHA
              sitekey="6LfSgQMpAAAAAIaCXn3kuQ8nLYgqVmE8sWsfEC8t"
              onChange={onChange}
            />
            ,
          </div>
          <div className="flex items-center justify-evenly">
            <button className="bg-rose-700 px-[5rem] py-1 font-bold text-white rounded-md">
              Register
            </button>
            <button className="bg-rose-700 px-[5rem] py-1 font-bold text-white rounded-md">
              Reset
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default App;
