import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, CheckBox, Img, Input, List, Text } from "components";
import Confirmation from "components/Confirmation";

const DesktopRegisterOnePage: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [userEmail, setUserEmail] = useState(""); // Define userEmail state

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Simulate a successful registration for demonstration purposes
    // Replace this with your actual registration logic
    console.log(data); // Data from the form

    // Set isRegistered to true to trigger the confirmation pop-up
    setIsRegistered(true);
  };
  const handleRegistration = (data) => {
    // Perform registration logic...
    // After successful registration, set userEmail
    setUserEmail(data.Email);
    setIsRegistered(true);
  };

  const closeConfirmation = () => {
    setIsRegistered(false); // Close the confirmation pop-up
  };
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
                {/* Confirmation Popup */}
                {isRegistered && (
                  <div className="confirmation">
                    <h2>Registration Successful!</h2>
                    <p>Thank you for registering.</p>
                    <Button onClick={closeConfirmation}>Close</Button>
                  </div>
                )}
                <form
                  onSubmit={handleSubmit(handleRegistration)}
                  className="flex flex-col gap-2 items-start justify-start w-[392px] sm:w-full"
                >
                  <Input
                    name="FirstName"
                    placeholder="first name"
                    className="capitalize md:h-auto p-0 placeholder:text-gray-700_01 sm:h-auto text-left text-xs w-full"
                    wrapClassName="w-full"
                    type="text"
                    {...register("LastName", { required: true })}
                  />
                  {errors.FiestName?.type === "required" && (
                    <span>First Name is required</span>
                  )}

                  <Input
                    name="LastName"
                    placeholder="last name"
                    className="capitalize md:h-auto p-0 placeholder:text-gray-700_01 sm:h-auto text-left text-xs w-full"
                    wrapClassName="w-full"
                    type="text"
                    {...register("LastName", { required: true })}
                  />
                  {errors.LastName?.type === "required" && (
                    <span>Last Name is required</span>
                  )}
                  <Input
                    name="inputorginal_Two"
                    placeholder="email"
                    className="capitalize md:h-auto p-0 placeholder:text-gray-700_01 sm:h-auto text-left text-xs w-full"
                    wrapClassName="w-full"
                    type="email"
                    {...register("Email")}
                  ></Input>
                  <Input
                    name="inputorginal_Two"
                    placeholder="password"
                    className="capitalize md:h-auto p-0 placeholder:text-gray-700_01 sm:h-auto text-left text-xs w-full"
                    type="password"
                    {...register("Password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                      },
                    })}
                  />

                  <Button
                    className="capitalize cursor-pointer h-10 mt-4 text-center text-sm w-[392px] "
                    shape="square"
                    color="#5a6d57"
                    size="sm"
                    variant="fill"
                    type="submit"
                  >
                    Register Now
                  </Button>
                </form>
                {isRegistered && (
        <div className="overlay">
        <Confirmation onClose={closeConfirmation} userEmail={userEmail} />
      </div>
    )}
                <div className="flex flex-row items-center justify-center md:ml-[0] ml-[53px] mt-2 w-[285px]">
                  <Text
                    className="capitalize text-black-900 text-sm w-auto"
                    size="txtMontserratRomanRegular14"
                  >
                    Already have an account?{" "}
                  </Text>
                  <a
                    href="/Login"
                    className="bg-transparent capitalize cursor-pointer h-10 text-center text-gray-600 text-sm w-[98px] inline-block"
                  >
                    Log In
                  </a>
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
