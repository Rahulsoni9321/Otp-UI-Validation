import { useState } from "react";
import Otpinput from "./Otpinput";
import { useNavigate } from "react-router-dom";

const Phoneotplogin = () => {
  const [phonenumber, setphonenumber] = useState<string>("");
  const [isotp, setisotp] = useState<boolean>(false);
  const navigate=useNavigate();

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setphonenumber(e.target.value);
  };
  const handlesubmit = (e: any) => {
    e.preventDefault();
    const regex = /[^0-9]/g;

    if (phonenumber.length < 10 || regex.test(phonenumber)) {
      alert("Invalid Phone number");
      return;
    }

    setisotp(true);
  };

  const onotpsubmit = (otp: string) => {
    console.log("Login successful", otp);
    navigate("/nothing")
  };

  if (isotp) {
    return (
      <div className="flex flex-col gap-8 text-white items-center">
        Enter OTP sent to {phonenumber}
        <Otpinput length={4} onotpsubmit={onotpsubmit}></Otpinput>
      </div>
    );
  }
  return (
    <div className='flex flex-col items-center pt-24 gap-12 bg-[#16181f] h-screen w-full'>
    <div className="flex flex-col items-center gap-8">
      <div className="text-white/80 font-semibold font-serif  text-4xl">
        Please Enter your Phone Number to login
      </div>
      <form onSubmit={handlesubmit} className="flex flex-col  items-center gap-8">
        <input
          type="text"
          value={phonenumber}
          onChange={handlechange}
          placeholder="Mobile number"
          className="px-4 py-2.5 w-80 bg-[#16181f] border border-1 border-gray-300/40 outline-none font-thin text-sm text-white/80 mx-4 rounded-lg"
        ></input>
        {phonenumber.length >= 10 ? (
          <button
            className="bg-gradient-to-r w-80 from-[#084dd1] to-[#072c9c] text-white/80 text-sm font-normal  py-2 rounded-lg"
            type="submit"
          >
            Get OTP
          </button>
        ) : (
          <div></div>
        )}
      </form>
    </div>
    </div>

  );
};

export default Phoneotplogin;
