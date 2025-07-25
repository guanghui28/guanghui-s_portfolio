"use client";
import SectionHeading from "../ui/section-heading";
import { projectsData } from "@/lib/data";
import Project from "../project";
import React from "react";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
	const { ref } = useSectionInView("Projects", 0.25);
	return (
		<section ref={ref} className="px-3 scroll-mt-28" id="projects">
			<SectionHeading>My Projects</SectionHeading>
			<div className="">
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
};

export default Projects;
