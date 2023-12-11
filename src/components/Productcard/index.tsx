import React, { useContext } from "react";
import { Img, Text } from "components"; // Import your components
import { FavoritesContext, Product } from "services/FavoritesContext";

interface ProductcardProps {
  className?: string;
  productimage?: string;
  productname?: string;
  productdescription?: string;
  productprice?: string;
}

const Productcard: React.FC<ProductcardProps> = (props) => {
  const { addToFavorites } = useContext(FavoritesContext);

  const handleAddToFavorites = () => {
    const {
      productimage = "images/img_rectangle12348.png",
      productname = "tailored stretch",
      productdescription = "turn it up pants",
      productprice = "$180",
    } = props;

    const productToAdd: Product = {
      productimage,
      productname,
      productdescription,
      productprice,
      productId: Math.floor(Math.random() * 1000), // Generate a random ID (replace this with your own unique identifier)
    };

    addToFavorites(productToAdd);
  };

  return (
    <div className={props.className}>
      <div className="h-[438px] relative w-full">
        <Img
          className="h-[438px] m-auto object-cover w-full"
          alt="rectangle12348"
          src={props?.productimage}
        />
        <div className="absolute flex flex-col h-6 items-center justify-start right-[6%] top-[5%] w-6">
          <Img
            className="h-6 w-6 cursor-pointer"
            src="images/img_favorite.svg"
            alt="favorite"
            onClick={handleAddToFavorites}
          />
        </div>
      </div>
      <div className="flex sm:flex-col flex-row sm:gap-10 h-[102px] md:h-auto items-center justify-between px-2 w-[392px] md:w-full">
        <div className="flex flex-col gap-2 items-start justify-start w-full">
          <Text
            className="capitalize text-base text-black-900 w-full"
            size="txtMontserratBold16"
          >
            {props?.productname}
          </Text>
          <Text
            className="capitalize text-base text-black-900 w-full"
            size="txtMontserratRomanRegular16"
          >
            {props?.productdescription}
          </Text>
          <div className="flex flex-row gap-2 items-end justify-start w-full">
            <div className="bg-black-900 h-6 rounded-[50%] w-6"></div>
            <div className="bg-light_blue-200 h-6 rounded-[50%] w-6"></div>
            <div className="bg-gray-600 h-6 rounded-[50%] w-6"></div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-end pl-[5px] py-[5px]">
          <Text
            className="capitalize text-base text-black-900"
            size="txtMontserratBold16"
          >
            {props?.productprice}
          </Text>
        </div>
      </div>
    </div>
  );
};

Productcard.defaultProps = {
  productimage: "images/img_rectangle12348.png",
  productname: "tailored stretch",
  productdescription: "turn it up pants",
  productprice: "$180",
};

export default Productcard;
