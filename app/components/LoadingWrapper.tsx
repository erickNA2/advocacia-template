"use client";

import { useLoading } from "./LoadingProvider";
import Loading from "./ui/Loading";

interface LoadingWrapperProps {
	children: React.ReactNode;
}

export default function LoadingWrapper({ children }: LoadingWrapperProps) {
	const { isLoading, setLoading } = useLoading();

	return (
		<>
			{isLoading && <Loading onComplete={() => setLoading(false)} />}
			<div
				className={`relative flex flex-col overflow-x-hidden ${isLoading ? "opacity-0 pointer-events-none" : "opacity-100"}`}
			>
				{children}
			</div>
		</>
	);
}
