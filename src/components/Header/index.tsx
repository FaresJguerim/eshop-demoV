import React from "react";
import { Button, CheckBox, Img, List, Text } from "components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white-A700 flex flex-col items-center justify-center md:px-5 w-full">
      <div className="flex flex-col gap-4 items-center justify-center mb-[18px] w-full">
        <div className="bg-gray-700 flex flex-col items-center justify-end p-[5px] w-full">
          <Text
            className="mt-[3px] text-center text-white-A700 text-xs tracking-[0.80px]"
            size="txtMontserratRomanSemiBold12"
          >
            Enjoy Free Shipping On All Orders
          </Text>
        </div>
        <div className="flex md:flex-col flex-row font-leaguespartan md:gap-10 items-center justify-between w-[85%] md:w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[77%] md:w-full">
            <div className="flex flex-col gap-2 h-[46px] md:h-auto items-center justify-center w-[184px]">
              <div className="flex flex-row gap-px items-end justify-center w-auto">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-800 tracking-[3.20px] w-auto"
                  size="txtLeagueSpartanBold32"
                >
                  modimal
                </Text>
              </div>
              <Text
                className="text-[10px] text-center text-gray-800 tracking-[1.00px] w-auto"
                size="txtLeagueSpartanRegular10"
              >
                women clothing
              </Text>
            </div>
            <div className="flex flex-row flex-wrap font-montserrat gap-6 items-center justify-center max-w-[648px] w-full">
              <Button
                className="bg-transparent capitalize cursor-pointer min-w-[104px] text-center text-gray-800 text-lg"
                size="xs"
              >
                Collection
              </Button>
              <Button
                className="bg-transparent capitalize cursor-pointer min-w-[104px] text-center text-gray-800 text-lg"
                size="xs"
              >
                New In
              </Button>
              <Button
                className="bg-transparent capitalize cursor-pointer min-w-[104px] text-center text-gray-800 text-lg"
                size="xs"
              >
                Modiweek
              </Button>
              <Button
                className="bg-transparent capitalize cursor-pointer min-w-[104px] text-center text-gray-800 text-lg"
                size="xs"
              >
                Plus Size
              </Button>
              <Button
                className="bg-transparent capitalize cursor-pointer min-w-[128px] text-center text-gray-800 text-lg"
                size="xs"
              >
                Sustainability
              </Button>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-6 grid grid-cols-4 h-8 justify-center w-[184px]"
            orientation="horizontal"
          >
            <div className="flex flex-col h-6 items-center justify-start w-full">
              <Img
                className="h-6 w-6"
                src="images/img_search.svg"
                alt="search"
              />
            </div>
            <Link to="/registration">
              <div className="flex flex-col items-start justify-start w-full">
                <img
                  className="h-6 w-6"
                  src="images/img_person4.svg"
                  alt="personFour"
                />
              </div>
            </Link>
            <div className="flex flex-col h-6 items-center justify-start w-full">
              <Img
                className="h-6 w-6"
                src="images/img_favorite.svg"
                alt="favorite"
              />
            </div>
            <div className="flex flex-col items-start justify-center w-full">
              <Img
                className="h-6 w-6"
                src="images/img_shoppingbag.svg"
                alt="shoppingbag"
              />
            </div>
          </List>
        </div>
      </div>
    </header>
  );
};

export default Header;
