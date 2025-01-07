import { UserProfile } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Profile = async () => {
	const { userId } = await auth();
	if (!userId) return redirect("/sign-in");
	return <UserProfile />;
};
export default Profile;
