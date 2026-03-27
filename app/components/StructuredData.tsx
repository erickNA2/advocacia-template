export default function StructuredData() {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "LegalService",
		name: "Advocacia Criminal",
		description: "Atuação completa em Direito Penal e Processo Penal com atendimento 24h. Especialistas em defesa criminal, habeas corpus, prisão em flagrante e tribunal do júri.",
		url: "https://advocacia-criminal.com.br",
		telephone: "+55-61-99999-9999",
		email: "contato@advocacia-criminal.com.br",
		address: {
			"@type": "PostalAddress",
			streetAddress: "SQS 104 Bloco G Sala 123",
			addressLocality: "Brasília",
			addressRegion: "DF",
			postalCode: "70380-100",
			addressCountry: "BR",
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: "-15.8267",
			longitude: "-47.9218",
		},
		openingHours: "Mo-Su 00:00-23:59",
		priceRange: "$$$",
		sameAs: [
			"https://www.instagram.com/advocacia-criminal",
			"https://www.facebook.com/advocacia-criminal",
			"https://www.linkedin.com/company/advocacia-criminal",
		],
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			nameOfPart: "Serviços Jurídicos",
			itemListElement: [
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Defesa Criminal",
						description: "Atuação completa em defesa criminal em todas as áreas do Direito Penal",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Habeas Corpus",
						description: "Impetração de habeas corpus preventivo e liberatório em todo o território nacional",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Prisão em Flagrante",
						description: "Atuação imediata em casos de prisão em flagrante e audiência de custódia",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Tribunal do Júri",
						description: "Defesa técnica especializada em crimes contra a vida perante o tribunal do júri",
					},
				},
			],
		},
		areaServed: {
			"@type": "Country",
			name: "Brasil",
		},
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.9",
			reviewCount: "127",
			bestRating: "5",
			worstRating: "1",
		},
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(structuredData),
			}}
		/>
	);
}
