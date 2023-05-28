import React, { ComponentType, PropsWithChildren } from "react";
// component
import { Row, Col } from "components/Layout";
import { Input, InputHocProps } from "components/Input";

// styled system

// -----------------------------------------------------------------

const useInputHoc = (IconWrapper: ComponentType<PropsWithChildren<any>>) => {
	// eslint-disable-next-line react/display-name
	return ({ inputIcon, iconDirection = "row", ...props }: InputHocProps) => {
		return (
			<Row flexDirection={iconDirection} alignItems="center">
				<Col flex="1">
					<Input {...props} />
				</Col>
				<Col>
					<IconWrapper>{inputIcon}</IconWrapper>
				</Col>
			</Row>
		);
	};
};

export default useInputHoc;
