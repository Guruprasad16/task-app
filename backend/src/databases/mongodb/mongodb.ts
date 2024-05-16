import mongoose, { connect } from "mongoose";

export default async function mongooseConnect(): Promise<void> {
  const mondodbURI = process.env.MONGODB_URI ?? "mongodb://localhost:27017";
  mongoose.connection.on("connected", () => console.log("Database connected"));
  mongoose.connection.on("open", () => console.log("open"));
  mongoose.connection.on("disconnected", () => console.log("disconnected"));
  mongoose.connection.on("reconnected", () => console.log("reconnected"));
  mongoose.connection.on("disconnecting", () => console.log("disconnecting"));
  mongoose.connection.on("close", () => console.log("close"));
  await connect(mondodbURI);
}
