import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { LoadingProvider } from "./components/LoadingProvider";
import LoadingWrapper from "./components/LoadingWrapper";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Advocacia Criminal | Defesa Penal Estratégica 24h | Escritório de Direito Penal",
	description:
		"Atuação completa em Direito Penal e Processo Penal com atendimento 24h. Especialistas em defesa criminal, habeas corpus, prisão em flagrante e tribunal do júri. Atendimento urgente e sigilo absoluto.",
	keywords:
		"advocacia criminal, defesa penal, direito penal, habeas corpus, prisão em flagrante, tribunal do júri, advogado criminalista, defesa jurídica, direito processual penal, advocacia 24h",
	authors: [{ name: "Advocacia Criminal" }],
	creator: "Advocacia Criminal",
	publisher: "Advocacia Criminal",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL("https://advocacia-template-ebon.vercel.app"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "Advocacia Criminal | Defesa Penal Estratégica 24h",
		description:
			"Atuação completa em Direito Penal e Processo Penal com atendimento 24h. Especialistas em defesa criminal com representação técnica de alto nível.",
		url: "https://advocacia-template-ebon.vercel.app",
		siteName: "Advocacia Criminal",
		locale: "pt_BR",
		type: "website",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Advocacia Criminal - Defesa Penal Estratégica",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Advocacia Criminal | Defesa Penal Estratégica 24h",
		description:
			"Atuação completa em Direito Penal e Processo Penal com atendimento 24h. Especialistas em defesa criminal.",
		images: ["/og-image.jpg"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "your-google-verification-code",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="pt-BR"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="icon" href="/icon.svg" type="image/svg+xml" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<StructuredData />
			</head>
			<body className="relative flex flex-col overflow-x-hidden">
				<LoadingProvider>
					<LoadingWrapper>
						<div
							className={`relative flex flex-col overflow-x-hidden`}
						>
							<Nav />
							{children}
							<Footer />
						</div>
					</LoadingWrapper>
				</LoadingProvider>
			</body>
		</html>
	);
}
