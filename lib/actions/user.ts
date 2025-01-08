"use server";

import User from "../models/user";
import { connectDB } from "../mongodb";

export const createOrUpdateUser = async (user: any) => {
	try {
		await connectDB();
		const newUser = await User.findOneAndUpdate(
			{ clerkId: user.clerkId },
			{
				$set: {
					username: user.username,
					firstName: user.firstName,
					lastName: user.lastName,
					email: user.email,
					avatarUrl: user.avatarUrl,
				},
			},
			{ upsert: true, new: true },
		);

		return newUser;
	} catch (error) {
		console.log(error);
	}
};

export const deleteUser = async (id: any) => {
	try {
		await connectDB();
		await User.findOneAndDelete({ clerkId: id });
		console.log("deleted user");
	} catch (error) {
		console.log(error);
	}
};
