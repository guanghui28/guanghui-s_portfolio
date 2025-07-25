"use client";
import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "../ui/section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

const Experience = () => {
	const { ref } = useSectionInView("Experience", 0.25);
	const { theme } = useTheme();

	return (
		<section ref={ref} id="experience" className="px-3 scroll-mt-28">
			<SectionHeading>My Experience</SectionHeading>
			<VerticalTimeline lineColor="" animate={true}>
				{experiencesData.map((item) => (
					<React.Fragment key={item.title}>
						<VerticalTimelineElement
							visible={true}
							contentStyle={{
								backgroundColor:
									theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
								boxShadow: "none",
								border: "1px solid rgba(0,0,0,0.05)",
								textAlign: "left",
							}}
							contentArrowStyle={{
								borderRight:
									theme === "light"
										? "0.4rem solid #9ca3af"
										: "0.4rem solid rgba(255,255,255,0.5)",
							}}
							date={item.date}
							icon={item.icon}
							iconStyle={{
								background:
									theme === "light"
										? `${item.iconTheme.light}`
										: `${item.iconTheme.dark}`,
								fontSize: "1.5rem",
							}}
						>
							<h5 className="text-sm sm:text-base lg:text-lg font-semibold uppercase">
								{item.title}
							</h5>
							<p className="text-sm sm:text-base lg:text-lg font-normal !mt-0">
								{item.location}
							</p>
							<p className="text-xs sm:text-sm md:text-base xl:text-lg text-balance !mt-4 !font-normal text-gray-700 dark:text-white/60">
								{item.description}
							</p>
						</VerticalTimelineElement>
					</React.Fragment>
				))}
			</VerticalTimeline>
		</section>
	);
};

export default Experience;
