import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

const Page = () => {
	return (
		<main className="flex flex-col items-center px-4">
			<Intro />
			<SectionDivider />
			<About />
			<Projects />
			<Skills />
		</main>
	);
};

export default Page;
