import React from "react";

import { Button, Input, Img,  List, Text } from "components";
const DesktopRegisterOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1121px] mt-8 mx-auto md:px-5 w-full">
            <Img
              className="h-[837px] md:h-auto object-cover"
              src="images/img_frame26086866.png"
              alt="frame26086866"
            />
            <div className="flex flex-col gap-[38px] items-center justify-start md:mt-0 mt-[123px]">
              <Text
                className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                size="txtMontserratSemiBold32"
              >
                Create Account
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-[392px] sm:w-full">
                  <Input
                    name="inputorginal"
                    placeholder="first name"
                    className="capitalize md:h-auto p-0 placeholder:text-gray-700_01 sm:h-auto text-left text-xs w-full"
                    wrapClassName="w-full"
                    type="text"
                  ></Input>
                  <Input
                    name="inputorginal_One"
                    placeholder="last name"
                    className="capitalize md:h-auto p-0 placeholder:text-gray-700_01 sm:h-auto text-left text-xs w-full"
                    wrapClassName="w-full"
                    type="text"
                  ></Input>
                  <Input
                    name="inputorginal_Two"
                    placeholder="email"
                    className="capitalize md:h-auto p-0 placeholder:text-gray-700_01 sm:h-auto text-left text-xs w-full"
                    wrapClassName="w-full"
                    type="email"
                  ></Input>
                  <Button
                    className="cursor-pointer flex h-10 items-center justify-center w-full"
                    rightIcon={
                      <Img
                        className="h-4 ml-[35px]"
                        src="images/img_visibilityoff.svg"
                        alt="visibility_off"
                      />
                    }
                    shape="square"
                    color="gray_700_01"
                    size="sm"
                    variant="outline"
                  >
                    <div className="capitalize text-left text-xs">password</div>
                  </Button>
                </div>
                <Button
                  className="capitalize cursor-pointer h-10 mt-4 text-center text-sm w-[392px]"
                  shape="square"
                  color="gray_700"
                  size="sm"
                  variant="fill"
                >
                  Register Now
                </Button>
                <div className="flex flex-row items-center justify-center md:ml-[0] ml-[53px] mt-2 w-[285px]">
                  <Text
                    className="capitalize text-black-900 text-sm w-auto"
                    size="txtMontserratRomanRegular14"
                  >
                    Already have an account?{" "}
                  </Text>
                  <Button
                    className="bg-transparent capitalize cursor-pointer h-10 text-center text-gray-600 text-sm w-[98px]"
                    size="sm"
                  >
                    log in
                  </Button>
                </div>
                <Text
                  className="capitalize h-[15px] ml-44 md:ml-[0] mt-[19px] text-black-900 text-xs"
                  size="txtMontserratRomanRegular12"
                >
                  or
                </Text>
                <div className="flex flex-row gap-[17px] items-center justify-center md:ml-[0] ml-[121px] mt-[27px] w-[36%] md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[35px] md:h-auto items-start justify-start w-[35px]"
                    style={{
                      backgroundImage: "url('images/img_socialmediasign.svg')",
                    }}
                  >
                    <Img
                      className="h-5 w-4"
                      src="images/img_user.svg"
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
                <Text
                  className="capitalize leading-[180.00%] mt-6 text-black-900 text-center text-xs w-full"
                  size="txtMontserratRomanRegular12"
                >
                  <span className="text-black-900 font-montserrat font-normal">
                    by clicking register now’’you agree to
                  </span>
                  <span className="text-black-900 font-montserrat font-normal">
                    {" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-gray-600 font-montserrat font-normal underline"
                  >
                    terms& conditions
                  </a>
                  <span className="text-black-900 font-montserrat font-normal">
                    {" "}
                    and{" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-gray-600 font-montserrat font-normal underline"
                  >
                    privacy policy
                  </a>
                  <span className="text-black-900 font-montserrat font-normal">
                    .{" "}
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopRegisterOnePage;
