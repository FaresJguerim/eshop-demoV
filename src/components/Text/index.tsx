import React from "react";

const sizeClasses = {
  txtMontserratSemiBold32: "font-montserrat font-semibold",
  txtMontserratRomanRegular18: "font-montserrat font-normal",
  txtLeagueSpartanBold32: "font-bold font-leaguespartan",
  txtMontserratBold16: "font-bold font-montserrat",
  txtMontserratRomanSemiBold12: "font-montserrat font-semibold",
  txtMontserratRomanRegular16: "font-montserrat font-normal",
  txtGillSansMTItalic34: "font-gillsansmt font-normal italic",
  txtMontserratBold20: "font-bold font-montserrat",
  txtLeagueSpartanRegular10: "font-leaguespartan font-normal",
  txtMontserratRomanRegular20: "font-montserrat font-normal",
  txtMontserratRomanRegular14: "font-montserrat font-normal",
  txtMontserratRomanRegular12: "font-montserrat font-normal",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
