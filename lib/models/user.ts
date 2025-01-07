import { model, models, Schema } from "mongoose";

const userSchema = new Schema(
	{
		clerkId: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		avatarUrl: {
			type: String,
			required: false,
		},
		admin: {
			type: Boolean,
			required: false,
			default: false,
		},

		firstName: {
			type: String,
		},
		lastName: {
			type: String,
		},
	},
	{ timestamps: true },
);

const User = models?.User || model("User", userSchema);

export default User;
