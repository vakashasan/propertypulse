import Link from "next/link";
import React from "react";

const Infobox = ({
  heading,
  backgroundcolor = "bg-grey-100",
  textcolor = "text-grey-100",
  buttoninfo,
  children,
}) => {
  return (
    <div className={`${backgroundcolor} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{heading}</h2>
      <p className="mt-2 mb-4">{children}</p>
      <Link
        href="/properties"
        className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
      >
        {buttoninfo.link}
      </Link>
    </div>
  );
};

export default Infobox;
