import { css } from "@emotion/react";

export const cardStyle = css`
	display: flex;
	flex-direction: column;
	/* align-items: center; */
	background: #fff;
	border-radius: 12px;
	padding: 20px;
	width: 20vw;
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
	width: 100%;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const titleBox = css`
	width: 100%;
	height: 36%;
	text-align: right;
	font-size: 20px;
	color: #666;
`;

export const valueBox = css`
	width: 100%;
	height: 32%;
	font-size: 28px;
	font-weight: bold;
	display: flex;
	align-items: end;
	color: #333;
`;

export const valueRateBox = css`
	width: 100%;
	height: 32%;
	display: flex;
	justify-content: space-between;
	align-items: end;
`;

export const valueText = css`
	font-size: 18px;
	font-weight: bold;
	display: flex;
	align-items: end;
`;

export const upDownIcon = css`
	font-size: 26px;
`;
