"use client";

import React from "react";
import Skeleton from "react-loading-skeleton";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
  borderColor: "blue",
};

const loading = ({ loading }) => {
  return (
    <>
      <ClipLoader
        color="blue"
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
      />
      <h3 className="my-auto mx-auto">Loading ...</h3>
    </>
  );
};

export default loading;
