import { connect } from "mongoose";

export default async function mongooseConnect(): Promise<void> {
  const mondodbURI = process.env.MONGODB_URI ?? "mongodb://localhost:27017";
  await connect(mondodbURI);
}
