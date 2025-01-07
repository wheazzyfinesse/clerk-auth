import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL!;

interface MongooseConnection {
	conn: Mongoose | null;
	promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).Mongoose;
if (!cached) {
	cached = (global as any).mongoose = {
		conn: null,
		promise: null,
	};
}
export const connectDB = async () => {
	if (cached.conn) return cached.conn;

	cached.promise =
		cached.promise ||
		mongoose.connect(MONGODB_URL, {
			bufferCommands: true,
			connectTimeoutMS: 30000,
		});

	cached.conn = await cached.promise;

	return cached.conn;
};

// export const connectMongoDB = async () => {
// 	if (mongoose.connection.readyState === 1) {
// 		return mongoose.connection.asPromise();
// 	}
// 	return await mongoose.connect(process.env.DATABASE_URL!);
// };
