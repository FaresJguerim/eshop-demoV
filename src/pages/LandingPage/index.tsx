import React from "react";

import { Button, CheckBox, Img, List, Text } from "components";
import Modiweekcard from "components/Modiweekcard";
import Productcard from "components/Productcard";


const LandingPage: React.FC = () => {
  const ProductcardPropList = [
    {},
    {
      // Product 1 properties

      productname: "Technical Silk",
      productprice: "$120",
      productdescription: "Make A Splash",
      productimage: "images/img_rectangle12348_438x392.png",
    },
    {
      // Product 2 properties
      productname: "Cool Weave",
      productprice: "$210",
      productdescription: "Anywhere Dress",
      productimage: "images/img_rectangle12348_1.png",
    },
  ];
  const ModiweekcardPropList = [
    {},
    {
      // Modiweek card properties for different weekdays
      weekdaytext: "Monday",
      userimage: "images/img_rectangle12349_426x288.png",
    },
    { weekdaytext: "Tuesday", userimage: "images/img_rectangle12349_1.png" },
    { weekdaytext: "Wednesday", userimage: "images/img_rectangle12349_2.png" },
    {
      weekdaytext: "Thursday",
      userimage: "images/img_rectangle12349_426x280.png",
    },
  ];

  return (
    // JSX structure for the landing page layout

    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start overflow-auto w-full">
          
          <div
            className="bg-cover bg-no-repeat flex flex-col gap-[27px] h-[600px] items-start justify-end p-[103px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_hero.png')" }}
          >
            <Text
              className="capitalize italic leading-[180.00%] md:ml-[0] ml-[5px] mt-[197px] sm:text-3xl md:text-[32px] text-[34px] text-black-900 w-[24%] sm:w-full"
              size="txtGillSansMTItalic34"
            >
              Elegance in simplicity, Earth’s harmony
            </Text>
            <Button
              className="capitalize cursor-pointer font-montserrat h-10 md:ml-[0] ml-[5px] text-center text-sm w-[184px]"
              shape="square"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              New In
            </Button>
          </div>
          <div className="flex flex-row md:gap-10 items-start justify-between max-w-[1224px] mt-[90px] mx-auto md:px-5 w-full">
            <Text
              className="capitalize mb-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
              size="txtMontserratSemiBold32"
            >
              Best Sellers
            </Text>
            <div className="flex flex-col h-10 md:h-auto items-center justify-center mt-[5px] pl-4 py-4 w-[102px]">
              <a
                href="javascript:"
                className="capitalize text-gray-700 text-right text-sm w-auto"
              >
                <Text size="txtMontserratRomanRegular14">view all</Text>
              </a>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1224px] mt-[21px] mx-auto pb-1.5 md:px-5 w-full"
            orientation="horizontal"
          >
            {ProductcardPropList.map((props, index) => (
              <React.Fragment key={`DesktopLandingOneProductcard${index}`}>
                <Productcard
                  className="flex flex-1 flex-col items-center justify-start w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
          <Text
            className="capitalize mt-[89px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
            size="txtMontserratSemiBold32"
          >
            Collection
          </Text>
          <List
            className="sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 justify-center max-w-[1224px] mt-[27px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col md:gap-10 gap-16 items-center justify-start w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[518px] items-end justify-end p-4 w-full"
                style={{ backgroundImage: "url('images/img_pic2.png')" }}
              >
                <Button
                  className="capitalize cursor-pointer h-10 mt-[446px] text-center text-sm w-[185px]"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  Boluses
                </Button>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[837px] items-end justify-end p-4 w-full"
                style={{ backgroundImage: "url('images/img_pic1.png')" }}
              >
                <Button
                  className="capitalize cursor-pointer h-10 mt-[765px] text-center text-sm w-[185px]"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  Dresses
                </Button>
              </div>
            </div>
            <div className="flex flex-1 flex-col md:gap-10 gap-36 items-center justify-start w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[840px] items-start justify-end p-4 w-full"
                style={{
                  backgroundImage: "url('images/img_pic1_840x600.png')",
                }}
              >
                <Button
                  className="capitalize cursor-pointer h-10 mt-[768px] text-center text-sm w-[185px]"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  Pants
                </Button>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[435px] items-end justify-end p-4 w-full"
                style={{
                  backgroundImage: "url('images/img_pic1_435x600.png')",
                }}
              >
                <Button
                  className="capitalize cursor-pointer h-10 mt-[363px] text-center text-sm w-[167px]"
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  Outwear
                </Button>
              </div>
            </div>
          </List>
          <Text
            className="capitalize mt-[89px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
            size="txtMontserratSemiBold32"
          >
            Modiweek
          </Text>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 mt-[27px] md:px-5 w-full"
            orientation="horizontal"
          >
            {ModiweekcardPropList.map((props, index) => (
              <React.Fragment key={`DesktopLandingOneModiweekcard${index}`}>
                <Modiweekcard
                  className="flex flex-1 flex-col items-center justify-start pb-[7px] w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
          <div
            className="bg-cover bg-no-repeat flex flex-col gap-3 h-[526px] items-end justify-end mt-[88px] p-[43px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_sustainability.png')" }}
          >
            <Text
              className="capitalize leading-[180.00%] mr-[65px] mt-[316px] text-gray-900_01 text-xl w-[37%] sm:w-full"
              size="txtMontserratRomanRegular20"
            >
              Stylish sustainability in clothing promotes eco-friendly choices
              for a greater future
            </Text>
            <Button
              className="capitalize cursor-pointer h-10 mr-[65px] text-center text-sm w-[183px]"
              shape="square"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              Sustainability
            </Button>
          </div>
          <Text
            className="capitalize mt-[92px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
            size="txtMontserratSemiBold32"
          >
            Follow us @modimal
          </Text>
          <div className="flex md:flex-col flex-row md:gap-5 h-[751px] md:h-auto items-center justify-center max-w-[1224px] mt-6 mx-auto md:px-5 w-full">
            <Img
              className="flex-1 md:flex-none md:h-[751px] sm:h-auto h-full max-h-[751px] object-cover sm:w-[] md:w-[]"
              src="images/img_frame427319383.png"
              alt="frame427319383"
            />
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 h-[751px] md:h-auto items-start justify-start w-[621px] md:w-full">
              <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
                <Img
                  className="md:h-auto h-full object-cover w-full"
                  src="images/img_frame427319384.png"
                  alt="frame427319384"
                />
                <Img
                  className="md:h-auto h-full object-cover w-full"
                  src="images/img_frame427319386.png"
                  alt="frame427319386"
                />
              </div>
              <div className="flex flex-1 flex-col h-full items-end justify-center w-full">
                <Img
                  className="md:h-auto h-full object-cover w-full"
                  src="images/img_frame427319385.png"
                  alt="frame427319385"
                />
                <Img
                  className="md:h-auto h-full object-cover w-full"
                  src="images/img_frame427319387.png"
                  alt="frame427319387"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default LandingPage;
