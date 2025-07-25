"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";
import type { SectionName } from "@/lib/types";

type ChildrenProps = {
	children: ReactNode;
};

type ActiveSectionContextType = {
	activeSection: SectionName;
	timeOfLastClick: number;
	updateActiveSectionWithTime: (
		sectionName: SectionName,
		isResetTime?: boolean
	) => void;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
	null
);

const ActiveSectionContextProvider = ({ children }: ChildrenProps) => {
	const [activeSection, setActiveSection] = useState<SectionName>("Home");
	const [timeOfLastClick, setTimeOfLastClick] = useState(0);

	const updateActiveSectionWithTime = (
		sectionName: SectionName,
		isResetTime: boolean = false
	) => {
		setActiveSection(sectionName);
		if (isResetTime) setTimeOfLastClick(Date.now());
	};

	return (
		<ActiveSectionContext.Provider
			value={{
				activeSection,
				timeOfLastClick,
				updateActiveSectionWithTime,
			}}
		>
			{children}
		</ActiveSectionContext.Provider>
	);
};

export default ActiveSectionContextProvider;

export const useActiveSectionContext = () => {
	const context = useContext(ActiveSectionContext);

	if (!context) {
		throw new Error(
			"useActiveSectionContext must be used within an ActiveSectionContextProvider"
		);
	}

	return context;
};
