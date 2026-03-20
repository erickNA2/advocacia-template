import clsx from "clsx";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

type TextVariant = "title" | "subtitle" | "body" | "bodytitle" | "caption";

interface TextProps {
	variant?: TextVariant;
	children: any;
	className?: string | null;
	as?: any;
}

const variantClasses: Record<TextVariant, string> = {
	title: "text-lg captalize text-balance font-[Geist] tracking-wide wrap-break-word",
	subtitle: "text-sm font-[Geist] wrap-break-word",
	bodytitle: "text-text-md font-[Geist] wrap-break-word",
	body: "text-sm font-[Geist_Mono] wrap-break-word",
	caption: "text-sm font-[Geist_Mono] wrap-break-word",
};

export default function Typography({
	variant = "body",
	children,
	className,
	as: Component = "p",
}: TextProps) {
	return (
		<Component className={clsx(variantClasses[variant], className)}>
			{children}
		</Component>
	);
}
