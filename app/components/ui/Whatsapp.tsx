import Image from "next/image";
import Link from "next/link";

export default function Whatsapp() {
	return (
		<Link
			href="https://wa.me/5511999999999"
			target="_blank"
			className="fixed bottom-8 right-8 z-80"
		>
			<Image
				src="/whatsapp.svg"
				alt="WhatsApp"
				className="hover:scale-120 transition-transform duration-200"
				width={50}
				height={50}
			/>
		</Link>
	);
}
