import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Intro from "@/components/sections/intro";
import Projects from "@/components/sections/projects";
import SectionDivider from "@/components/ui/section-divider";
import Skills from "@/components/sections/skills";

const Page = () => {
	return (
		<main className="flex flex-col items-center space-y-28 lg:space-y-40">
			<Intro />
			<SectionDivider />
			<About />
			<Projects />
			<SectionDivider />
			<Skills />
			<SectionDivider />
			<Experience />
			<Contact />
		</main>
	);
};

export default Page;
