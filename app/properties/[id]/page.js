"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import React from "react";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import { fetchProperty } from "@/utils/request";

const PropertyPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;
      try {
        const property = await fetchProperty(id);

        setProperty(property);
      } catch (error) {
        console.error("failed to fetch property: ", error);
      } finally {
        setLoading(false);
      }
      if (property === null) {
        fetchPropertyData();
      }
    };
  }, [id, property]);

  if (!property && !loading) return <h1> No Property Found </h1>;
  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <h1> propertyPAge</h1>
    </>
  );
};

export default PropertyPage;
