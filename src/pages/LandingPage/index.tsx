import React from "react";

import { Button, CheckBox, Img, List, Text } from "components";
import DesktopLandingOneModiweekcard from "components/Modiweekcard";
import DesktopLandingOneProductcard from "components/Productcard";

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
                      <Img
                        className="h-2.5 w-2.5"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
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
                  <div className="flex flex-col items-start justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_person4.svg"
                      alt="personFour"
                    />
                  </div>
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
                <DesktopLandingOneProductcard
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
                <DesktopLandingOneModiweekcard
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
          <footer className="bg-gray-800 flex items-center justify-center mt-12 md:px-5 w-full">
            <div className="flex flex-col items-center justify-center mb-8 mt-12 mx-auto w-[85%]">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <ul className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-1.5 w-[41%] md:w-full common-column-list">
                  <li>
                    <a
                      href="javascript:"
                      className="capitalize text-white-A700 text-xl"
                    >
                      <Text size="txtMontserratBold20">
                        Join our club, get 15% off for your Birthday
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex flex-col gap-4 items-start justify-start mt-6 sm:w-full">
                        <Button
                          className="cursor-pointer flex h-10 items-center justify-center w-[496px]"
                          rightIcon={
                            <Img
                              className="h-4 ml-3"
                              src="images/img_arrowright.svg"
                              alt="arrow_right"
                            />
                          }
                          shape="square"
                          color="blue_gray_100"
                          size="sm"
                          variant="outline"
                        >
                          <div className="capitalize text-left text-xs">
                            Enter Your Email Address
                          </div>
                        </Button>
                        <div className="flex flex-col items-center justify-center w-[496px] sm:w-full">
                          <CheckBox
                            className="font-semibold leading-[normal] text-left text-xs tracking-[0.80px]"
                            inputClassName="border border-gray-200 border-solid h-4 mr-[5px] w-4"
                            name="bysubmittngyour_One"
                            id="bysubmittngyour_One"
                            label="By Submittng your email, you agree to receive advertising emails from Modimal."
                          ></CheckBox>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex flex-row gap-4 items-center justify-center mt-[104px]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_info.svg"
                          alt="info"
                        />
                        <Button
                          className="flex h-6 items-center justify-center w-6"
                          shape="circle"
                          color="white_A700"
                          variant="fill"
                        >
                          <Img src="images/img_facebook.svg" alt="facebook" />
                        </Button>
                        <Img
                          className="h-6 w-6"
                          src="images/img_settings_white_a700.svg"
                          alt="settings_One"
                        />
                        <Img
                          className="h-6 rounded-md w-6"
                          src="images/img_socialmedia.svg"
                          alt="socialmedia"
                        />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex flex-row gap-2 items-center justify-center mt-[43px]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_copyright.svg"
                          alt="copyright"
                        />
                        <Text
                          className="capitalize text-blue_gray-100_01 text-xs w-auto"
                          size="txtMontserratRomanRegular12"
                        >
                          2023 modimal. All Rights Reserved.
                        </Text>
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="flex flex-col relative w-[51%] md:w-full">
                  <div className="flex md:flex-col flex-row gap-6 items-start justify-center mx-auto w-[624px] md:w-full">
                    <div className="flex flex-col gap-6 items-center justify-center w-52">
                      <Text
                        className="capitalize text-white-A700 text-xl w-auto"
                        size="txtMontserratBold20"
                      >
                        About Modimal
                      </Text>
                      <div className="flex flex-col gap-2 items-start justify-center w-[196px]">
                        <div className="flex flex-col items-start justify-start pr-1 py-1 w-full">
                          <Text
                            className="capitalize text-lg text-white-A700"
                            size="txtMontserratRomanRegular18"
                          >
                            Collection
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-end pr-[3px] py-[3px] w-full">
                          <Text
                            className="capitalize mt-0.5 text-lg text-white-A700"
                            size="txtMontserratRomanRegular18"
                          >
                            Sustainability
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-end pr-[3px] py-[3px] w-full">
                          <a
                            href="javascript:"
                            className="capitalize mt-0.5 text-lg text-white-A700"
                          >
                            <Text size="txtMontserratRomanRegular18">
                              Privacy Policy
                            </Text>
                          </a>
                        </div>
                        <div className="flex flex-col items-start justify-end pr-[3px] py-[3px] w-full">
                          <Text
                            className="capitalize mt-0.5 text-lg text-white-A700"
                            size="txtMontserratRomanRegular18"
                          >
                            Support System
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start pr-1 py-1 w-full">
                          <Text
                            className="capitalize text-lg text-white-A700"
                            size="txtMontserratRomanRegular18"
                          >
                            Terms & Condition
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-end pr-[3px] py-[3px] w-full">
                          <Text
                            className="capitalize mt-0.5 text-lg text-white-A700"
                            size="txtMontserratRomanRegular18"
                          >
                            Copyright Notice
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 items-center justify-center w-[184px]">
                      <Text
                        className="capitalize text-white-A700 text-xl w-auto"
                        size="txtMontserratBold20"
                      >
                        Help & Support
                      </Text>
                      <div className="flex flex-col gap-2 items-start justify-center w-[184px]">
                        <div className="flex flex-col items-start justify-end pr-[3px] py-[3px] w-full">
                          <Text
                            className="capitalize mt-0.5 text-lg text-white-A700"
                            size="txtMontserratRomanRegular18"
                          >
                            Orders & Shipping
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start pr-1 py-1 w-full">
                          <Text
                            className="capitalize text-lg text-white-A700"
                            size="txtMontserratRomanRegular18"
                          >
                            Returns & Refunds
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                          <a
                            href="javascript:"
                            className="capitalize text-lg text-white-A700"
                          >
                            <Text size="txtMontserratRomanRegular18">FAQs</Text>
                          </a>
                        </div>
                        <div className="flex flex-col items-start justify-start pr-1 py-1 w-full">
                          <a
                            href="javascript:"
                            className="capitalize text-lg text-white-A700"
                          >
                            <Text size="txtMontserratRomanRegular18">
                              Contact Us
                            </Text>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 items-center justify-center w-[184px]">
                      <Text
                        className="capitalize text-white-A700 text-xl w-auto"
                        size="txtMontserratBold20"
                      >
                        Join Up
                      </Text>
                      <div className="flex flex-col gap-2 items-start justify-center w-[172px]">
                        <div className="flex flex-col items-start justify-start pr-1 py-1 w-full">
                          <Text
                            className="capitalize text-lg text-white-A700"
                            size="txtMontserratRomanRegular18"
                          >
                            Modimal Club
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start pr-1 py-1 w-full">
                          <a
                            href="javascript:"
                            className="capitalize text-lg text-white-A700"
                          >
                            <Text size="txtMontserratRomanRegular18">
                              Careers
                            </Text>
                          </a>
                        </div>
                        <div className="flex flex-col items-start justify-start pr-1 py-1 w-full">
                          <Text
                            className="capitalize text-lg text-white-A700"
                            size="txtMontserratRomanRegular18"
                          >
                            Visit Us
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-700 border border-solid border-white-A700 flex flex-col items-center justify-start ml-auto mt-[-19px] p-3 w-[9%] z-[1]">
                    <Img className="h-6 w-6" src="images/img_3p.svg" alt="3p" />
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
