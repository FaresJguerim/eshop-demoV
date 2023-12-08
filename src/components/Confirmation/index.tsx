import React from "react";

import { Img, Text } from "..";

const DesktopRegisterTwoPage: React.FC = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex flex-col font-montserrat h-[1024px] items-center justify-start mx-auto shadow-bs1 w-full"
        style={{ backgroundImage: "url('images/img_desktopregistertwo.png')" }}
      >
        <div className="bg-black-900_7a_01 flex flex-col items-center justify-center p-[268px] md:px-10 sm:px-5 w-full">
          <div className="bg-white-A700 flex flex-col gap-11 justify-start my-[21px] p-6 md:px-5 w-[95%] md:w-full">
            <Img className="h-6 w-6" src="images/img_stylesharp_98.svg" alt="close" />
            <Text className="capitalize font-semibold md:ml-[0] ml-[189px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center">
              verify your email address
            </Text>
            <div className="flex flex-col gap-[39px] items-center justify-start mb-11 mx-auto">
              <Text className="capitalize leading-[180.00%] text-black-900 text-center text-lg w-full">
                We’ve sent an email to nina@gmail.com to verify your email address and activate your account. the link
                in the email will expire in 24 hours.
              </Text>
              <Text className="capitalize leading-[180.00%] text-black-900 text-center text-lg w-full">
                Click here if you did not receive an email or would like to change the email address you registered with
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopRegisterTwoPage;