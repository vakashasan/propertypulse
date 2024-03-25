import connectDB from "@/config/database";
import mongoose from "mongoose";
import Property from "@/Models/Property";

export const GET = async (request) => {
  try {
    await connectDB();
    const properties = await Property.find({});

    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};
