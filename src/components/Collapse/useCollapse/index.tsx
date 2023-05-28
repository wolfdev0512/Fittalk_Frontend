import React, { ComponentType } from "react";
// next
import dynamic from "next/dynamic";
// types
import { AccordionProps, CollapseWrapperProps } from "../types";

// ---------------------------------------------------------------------

const Collapsible = dynamic(() => import("react-collapsible"), { ssr: false });

const useCollapse = (
	CollapseHeaderWrapper: ComponentType<CollapseWrapperProps>
) => {
	// eslint-disable-next-line react/display-name
	return ({
		title,
		current,
		handleOpen,
		children,
		data,
		param,
		aId,
	}: AccordionProps) => {
		return (
			<div>
				<CollapseHeaderWrapper
					aId={aId}
					handleOpen={() => handleOpen(aId)}
					param={param}
					hide={current === aId}
					title={title}
					data={data}
					children={children}
				/>
				<Collapsible trigger="" open={current === aId} transitionTime={300}>
					{children}
				</Collapsible>
			</div>
		);
	};
};

export default useCollapse;
