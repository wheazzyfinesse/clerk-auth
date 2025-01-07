import { useAuth } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function Home() {
	return (
		<div className="flex items-center justify-center h-full">
			<div className="text-2xl">Home</div>
		</div>
	);
}
