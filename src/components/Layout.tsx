// Layout Component
import React from 'react';
import { Button, CheckBox, Img, List, Text } from "components";
import { Link } from 'react-router-dom';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
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
                  <Link to="/registration/index">
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
      <main>{children}</main>
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
            </div>    </footer>
    </div>
  );
};

export default Layout;
