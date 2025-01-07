"use client";

import { useAuth, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
	const { isSignedIn } = useAuth();

	return (
		<div>
			<nav className="flex items-center gap-4">
				{isSignedIn ? (
					<div>
						<UserButton />
					</div>
				) : (
					<div>
						<Link href={"/sign-in"}>Sign in</Link>
						<Link href={"/sign-up"}>Sign up</Link>
					</div>
				)}
			</nav>
		</div>
	);
};
export default Navbar;
