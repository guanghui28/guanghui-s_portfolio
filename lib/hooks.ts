import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

const throttleTime = 800;

export const useSectionInView = (
	sectionName: SectionName,
	threshold = 0.75
) => {
	const { updateActiveSectionWithTime, timeOfLastClick } =
		useActiveSectionContext();
	const { ref, inView } = useInView({
		threshold,
	});

	useEffect(() => {
		const elapsedTime = Date.now() - timeOfLastClick;
		if (inView && elapsedTime > throttleTime) {
			updateActiveSectionWithTime(sectionName);
		}
	}, [inView, updateActiveSectionWithTime, timeOfLastClick, sectionName]);

	return { ref, inView };
};
