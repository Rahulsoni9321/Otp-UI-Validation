import React, { useEffect, useRef, useState } from "react";

const Otpinput = ({ length,onotpsubmit }: { length: number,onotpsubmit:(otp:string)=>void }) => {
  const [otp, setotp] = useState(new Array(length).fill(""));
  const inputref: any = useRef([]);

  const handleclick = (index:number) => {
    inputref.current[index].setSelectionRange(1,1);

    if (index>0 && !otp[index-1]){
        inputref.current[otp.indexOf("")].focus()
    }
    
  };

  const handlechange = (e:React.ChangeEvent<HTMLInputElement>,index:number) => {
           const otpnumber=e.target.value;
           if (isNaN(Number(otpnumber))){
            return;
           }
           const newotp=[...otp];
           newotp[index]=otpnumber.substring(otpnumber.length-1);
           setotp(newotp)
           if (otpnumber && index < length-1 && inputref.current[index+1]){
            if (newotp[index+1]){
                inputref.current[newotp.indexOf("")].focus();                
            }
            else{

                inputref.current[index+1].focus();
            }
           }

           const finalotp=newotp.join("");
           console.log(finalotp,newotp)
           if (finalotp.length===4){
               onotpsubmit(finalotp);
           }
  };

  const handlekeydown = (e:any,index:number) => {
            if (e.key==="Backspace" && index>0 && !otp[index] )  {
                inputref.current[index-1].focus();

            }
  };
  useEffect(() => {
    if (inputref.current[0]) {
      inputref.current[0].focus();
    }
  }, []);
  return (
    <div className="flex gap-4 justify-center">
      {otp.map((value, index) => (
        <input
          key={index}
          value={value}
          ref={(input) => (inputref.current[index] = input)}
          onClick={()=>handleclick(index)}
          onChange={(e)=>handlechange(e,index)}
          onKeyDown={(e:any)=>handlekeydown(e,index)}
          
          type="text"
          className=" rounded-lg w-16 p-6 border border-1 text-black border-gray-300"
        ></input>
      ))}
    </div>
  );
};

export default Otpinput;
