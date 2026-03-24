import Field from "./components/Field";
import Diferential from "./components/Diferential";
import BeforeAfter from "./components/BeforeAfter";
import About from "./components/About";
import Hero from "./components/Hero";

export default function Home() {
	return (
		<>
			<main className="relative px-4 md:px-10 overflow-x-hidden w-full bg-[#10151A] flex flex-col items-center space-y-20">
				<Hero />

				<About />

				<Field />

				<Diferential />

				<BeforeAfter />
			</main>
		</>
	);
}
