import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaBed,
  FaBath,
  FaRuler,
  FaMapMarker,
  FaMoneyBill,
} from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PropertyCard = ({ property }) => {
  const { rates } = property;

  const getRateDisplay = () => {
    if (rates.monthly) {
      return `${rates.monthly}/mo`;
    }
    if (rates.weekly) {
      return `${rates.weekly}/wk`;
    }
    if (rates.nightly) {
      return `${rates.nightly}/nightly`;
    }
  };

  return (
    <>
      <div className="rounded-xl shadow-md relative">
        <Image
          src={`/images/properties/${property.images[0]}`}
          alt=""
          height={0}
          width={0}
          sizes="100vw"
          className="w-full h-auto rounded-t-xl"
        />
        <div className="p-4">
          <div className="text-left md:text-center lg:text-left mb-6">
            <div className="text-gray-600">{property.type}</div>
            <h3 className="text-xl font-bold">
              {property.name || <Skeleton />}
            </h3>
          </div>
          <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
            $ {getRateDisplay()}
          </h3>

          <div className="flex justify-center gap-4 text-gray-500 mb-4">
            <p>
              <FaBed className="inline mr-2" /> {property.beds}{" "}
              <span className="md:hidden lg:inline"></span>Beds
            </p>
            <p>
              <FaBath className="inline mr-2" /> {property.baths}{" "}
              <span className="md:hidden lg:inline">Baths</span>
            </p>
            <p>
              <FaRuler className="inline mr-2" />
              {property.square_feet}{" "}
              <span className="md:hidden lg:inline">sqft</span>
            </p>
          </div>

          <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
            {rates.nightly && (
              <p>
                <FaMoneyBill className="inline mr-2" /> Nightly
              </p>
            )}
            {rates.weekly && (
              <p>
                <FaMoneyBill className="inline mr-2" /> Weekly
              </p>
            )}
            {rates.monthly && (
              <p>
                <FaMoneyBill className="inline mr-2" /> Montly
              </p>
            )}
          </div>

          <div className="border border-gray-100 mb-5"></div>

          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="flex align-middle gap-2 mb-4 lg:mb-0">
              <FaMapMarker className="inline mt-1 text-orange-700" />
              <span className="text-orange-700">
                {" "}
                {property.location.city} {property.location.state}{" "}
              </span>
            </div>
            <Link
              href={`/properties/${property._id}`}
              className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyCard;
