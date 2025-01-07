"use server";

import User from "../models/user";
import { connectDB, connectMongoDB } from "../mongodb";

export const createUser = async (user: any) => {
	try {
		await connectDB();
		// await connectMongoDB();
		const newUser = await User.create(user);
		return JSON.parse(JSON.stringify(newUser));
	} catch (error) {
		console.log(error);
	}
};
