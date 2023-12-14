import React from "react";

import { Button, Img, Text } from "components";

const Welcome: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 font-montserrat h-[1024px] mx-auto relative w-full">
        <Img
          className="h-[1024px] m-auto object-cover w-full"
          src="images/img_image28.png"
          alt="imageTwentyEight"
        />
        <div className="absolute bg-black-900_7a flex flex-col h-full inset-[0] items-center justify-center m-auto p-[259px] md:px-10 sm:px-5 w-full">
          <div className="bg-white-A700 flex flex-col h-[446px] md:h-auto items-start justify-start max-w-[854px] mb-[60px] md:px-5 px-6 py-8 w-full">
            <div className="flex flex-col gap-8 h-full items-center justify-center w-full">
              <Img
                className="h-6 w-6"
                src="images/img_stylesharp_98.svg"
                alt="close"
              />
              <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start">
                <Text
                  className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
                  size="txtMontserratSemiBold32"
                >
                  welcome to modimal
                </Text>
                <Text
                  className="capitalize italic text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
                  size="txtMontserratRomanRegular18"
                >
                  Elegance in simplicity, Earth’s harmony
                </Text>
              </div>
              <Text
                className="capitalize text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
                size="txtMontserratSemiBold32"
              >
                is it your first experience on modimal?
              </Text>
              <Button
                className="capitalize cursor-pointer h-[43px] text-base text-center w-[392px]"
                shape="square"
                color="gray_700"
                size="sm"
                variant="fill"
              >
                create your own style
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
