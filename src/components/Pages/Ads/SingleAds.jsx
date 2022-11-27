import React, { useContext } from "react";
import { BsBookmarksFill } from "react-icons/bs";
import { HiShieldCheck } from "react-icons/hi";
import { AuthContext } from "../../../Context/ContextProvider";

const SingleAds = ({ ads, setInfo }) => {
  const { user, dbUser } = useContext(AuthContext);

  const {
    name,
    category,
    seller,
    newdate,
    duration,
    image,
    location,
    originalPrice,
    sellPrice,
    dayMonthYear,
    _id,
  } = ads;


  const handleAddToBookmark = (product) => {
    console.log(product._id);
    const name = product.name;
    const sold = product.sold;
    const productId = product._id;
    const price = product.sellPrice;
    const image = product.image;
    const email = user?.email;
    const bookmark = {
      name,
      productId,
      price,
      image,
      email,
    };

    fetch("http://localhost:5000/bookmarks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookmark),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Added to Wishlist");
      });
  };

  return (
    <div>
      {ads?.sold === "unsold"  ? (
        <div className=" p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
          <div className="relative">
            <img
              src={image}
              alt=""
              className="object-cover object-center w-full rounded-md h-40 dark:bg-gray-500"
            />
            <div
              title="Sell Price"
              className="absolute text-base top-2 left-0 rounded-r-full btn btn-xs btn-warning"
            >
              ৳{sellPrice}
            </div>
            <div
              title="Original Price"
              className="absolute top-9 left-0 rounded-r-full btn btn-ghost hover:bg-white btn-xs text-black bg-white text-base line-through"
            >
              ৳{originalPrice}
            </div>
            <div
              title={`Product Used ${duration} ${dayMonthYear}`}
              className="absolute text-base top-2 right-0 rounded-l-full btn btn-xs btn-warning"
            >
              Used {duration}
              {dayMonthYear === "Year" && "y"}
            </div>
            <div
              title="Brand"
              className="absolute text-base top-9 right-0 btn rounded-l-full btn-xs btn-warning"
            >
              {category}
            </div>
            <div
              onClick={() => handleAddToBookmark(product)}
              title="Add To Bookmark"
              className="absolute text-base bottom-0 right-0 btn btn-xs rounded-l-full btn-active"
            >
              <BsBookmarksFill className="text-warning" />
            </div>
          </div>
          <div className="mt-6 mb-2">
            <div className="flex justify-between">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                {newdate}
              </span>
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                {location}
              </span>
            </div>
            <p className="dark:text-gray-100 text-base font-bold">
              <span className="gap-2 rounded-xl flex items-center">
                {seller}
                {dbUser.verify === "verified" && (
                  <HiShieldCheck className="text-xl text-blue-400" />
                )}
              </span>
            </p>
            <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
          </div>
          {ads?.email !== user?.email ? (
            <label
              onClick={() => setInfo(ads)}
              htmlFor="open_ads"
              className="btn btn-warning w-full "
            >
              Buy Now
            </label>
          ) : (
            <label
              onClick={() => setInfo(ads)}
              htmlFor="open_ads"
              className="btn btn-disabled w-full "
            >
              Buy Now
            </label>
          )}
        </div>
      ) : (
        ""
      )}


    </div>
  );
};

export default SingleAds;
