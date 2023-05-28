import React, { ComponentType, useMemo, useState } from "react";
// hoc
import useCollapse from "../useCollapse";

// types
import {
	AccordionProps,
	CollapseWrapperProps,
	CollapeContainerProps,
} from "../types";

// ---------------------------------------------------------------------

type CCType = ComponentType<CollapseWrapperProps>;
type ACType = ComponentType<AccordionProps>;

const CollapseContainer = (CollapseHeaderWrapper: CCType | CCType[]) => {
	// eslint-disable-next-line react/display-name
	const WrapperArray: ACType | ACType[] = Array.isArray(CollapseHeaderWrapper)
		? CollapseHeaderWrapper.map((_CollapseWrapper) =>
				useCollapse(_CollapseWrapper)
		  )
		: (CollapseHeaderWrapper as ACType);

	const LinkItem = ({ items, deep = 0 }: CollapeContainerProps) => {
		const AccordionItem = useMemo(
			() =>
				Array.isArray(WrapperArray)
					? WrapperArray[deep] ?? WrapperArray[0]
					: WrapperArray,
			[deep]
		);

		const [current, setCurrent] = useState("");

		const handleProvider = (currentItem) => {
			if (current === currentItem) {
				setCurrent("");
			} else setCurrent(currentItem);
		};

		return (
			<>
				{items.map((item, index) => (
					<AccordionItem
						key={`accordionItem_${index}`}
						handleOpen={handleProvider}
						current={current}
						aId={`accordionItem_${item.title}_${deep}_${index}`}
						param={item.param}
						title={item.title}
						data={item.data}
					>
						{item.children && (
							<>
								<LinkItem items={item.children} deep={deep + 1} />
							</>
						)}
					</AccordionItem>
				))}
			</>
		);
	};
	return LinkItem;
};

export default CollapseContainer;
