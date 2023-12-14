import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Button, CheckBox, Img, Input, List, Text } from "components";
const Login = () => {
  const { handleSubmit, register } = useForm();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleLogin = (data) => {
    // Perform login authentication (can be an API call or any authentication logic)
    // For demonstration, just setting isLoggedIn to true if email is provided
    if (data.Email) {
      setUserEmail(data.Email);
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail("");
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1122px] mt-[31px] mx-auto md:px-5 w-full">
            <Img
              className="h-[837px] md:h-auto object-cover"
              src="images/img_frame26086866.png"
              alt="frame26086866"
            />
            <div className="flex flex-col gap-[38px] items-center justify-start md:mt-0 mt-[132px]">
              <Text
                className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                size="txtMontserratSemiBold32"
              >
                Log in
              </Text>
              <form>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-[392px] sm:w-full">
                  <Input
                    name="Email"
                    placeholder="Email"
                    className="capitalize md:h-auto p-0 placeholder:text-gray-700_01 sm:h-auto text-left text-xs w-full"
                    wrapClassName="w-full"
                    type="email"
                  ></Input>

                  <Input
                    name="Password"
                    placeholder="Password"
                    className="capitalize md:h-auto p-0 placeholder:text-gray-700_01 sm:h-auto text-left text-xs w-full"
                    wrapClassName="w-full"
                    type="password"
                  ></Input>
                  
                </div>
                <a
                  href="javascript:"
                  className="capitalize mt-3 text-base text-gray-600"
                >
                  <Text size="txtMontserratRomanRegular16">
                    Forgot your password?
                  </Text>
                </a>
                <Button
                  className="capitalize cursor-pointer h-10 ml-0.5 md:ml-[0] mt-7 text-center text-sm w-[392px] bg-gray-700"
                  shape="square"
                  color="gray_700"
                  size="sm"
                  variant="fill"
                >
                  log in
                </Button>
                <Text
                  className="capitalize h-5 md:ml-[0] ml-[185px] mt-[35px] text-base text-black-900 text-center"
                  size="txtMontserratSemiBold32"
                >
                  Or
                </Text>
                <div className="flex flex-row gap-[17px] items-start justify-start md:ml-[0] ml-[125px] mt-7 w-auto">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[35px] md:h-auto items-start justify-start w-[35px]"
                    style={{
                      backgroundImage: "url('images/img_socialmediasign.svg')",
                    }}
                  >
                    <Img
                      className="h-5 w-4"
                      src="images/img_apple.svg"
                      alt="user"
                    />
                  </div>
                  <div className="flex flex-col h-[35px] items-center justify-start w-[35px]">
                    <Img
                      className="h-[35px] w-[35px]"
                      src="images/img_google.svg"
                      alt="google"
                    />
                  </div>
                  <div className="flex flex-col h-[35px] items-center justify-start w-[35px]">
                    <Button
                      className="flex h-[35px] items-center justify-center w-[35px]"
                      shape="circle"
                      color="blue_A400"
                      variant="fill"
                    >
                      <Img src="images/img_facebook.svg" alt="facebook" />
                    </Button>
                    </div>

                  </div>
                </div>
                </form>
                <Text
                  className="capitalize md:ml-[0] ml-[47px] mt-[27px] text-base text-black-900 text-center"
                  size="txtMontserratSemiBold32"
                >
                  <span className="text-black-900 font-montserrat font-normal">
                    New to modimal?{" "}
                  </span>
                  <span className="text-gray-600 font-montserrat font-normal">
                    create an account
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Login;
