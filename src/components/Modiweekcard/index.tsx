import React from "react";

import { Img, Text } from "components";

type ModiweekcardProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "userimage" | "weekdaytext"
> &
  Partial<{ userimage: string; weekdaytext: string }>;

const Modiweekcard: React.FC<
  ModiweekcardProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[426px] relative w-full">
          <Img
            className="h-[426px] m-auto object-cover w-full"
            alt="rectangle12349"
            src={props?.userimage}
          />
          <div className="absolute flex flex-col h-6 items-center justify-start right-[8%] top-[6%] w-6">
            <Img
              className="h-6 w-6"
              src="images/img_favorite.svg"
              alt="favorite"
            />
          </div>
        </div>
        <div className="flex flex-col h-[59px] md:h-auto items-end justify-between px-2 w-[280px]">
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="capitalize text-base text-black-900 w-full"
              size="txtMontserratBold16"
            >
              {props?.weekdaytext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

Modiweekcard.defaultProps = {
  userimage: "images/img_rectangle12349.png",
  weekdaytext: "Sunday",
};

export default Modiweekcard;
