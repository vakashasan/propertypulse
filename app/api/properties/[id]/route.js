import connectDB from "@/config/database";
import mongoose from "mongoose";
import Property from "@/Models/Property";

export const GET = async (request, { params }) => {
  try {
    await connectDB();
    const singleproperty = await Property.findById(params.id);

    if (!singleproperty) return new Response("Property Not Found");

    return new Response(JSON.stringify(singleproperty), {
      status: 200,
    });
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};
