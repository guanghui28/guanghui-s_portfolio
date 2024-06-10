import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import React from "react";

const Projects = () => {
	return (
		<section className="">
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
