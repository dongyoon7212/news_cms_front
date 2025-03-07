import { css } from "@emotion/react";

export const cardStyle = css`
	display: flex;
	flex-direction: column;
	/* align-items: center; */
	background: #fff;
	border-radius: 12px;
	padding: 20px;
	width: 250px;
	height: 120px;
	position: relative;
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

export const iconStyle = (bgColor) => css`
	width: 65px;
	height: 65px;
	background: ${bgColor};
	box-shadow: rgba(0, 0, 0, 0.14) 0rem 0.25rem 1.25rem 0rem,
		rgba(64, 64, 64, 0.4) 0rem 0.4375rem 0.625rem -0.3125rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 12px;
	font-size: 27px;
	color: white;
	position: absolute;
	top: -20px;
`;

export const textBox = css`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
`;

export const titleStyle = css`
	font-size: 14px;
	color: #666;
`;

export const valueStyle = css`
	font-size: 22px;
	font-weight: bold;
	color: #333;
`;

export const changeStyle = (textColor) => css`
	font-size: 12px;
	color: ${textColor};
`;
