import { css } from "@emotion/react";

export const layout = css`
	display: flex;
	flex-direction: column;
	width: 76vw; /* 사이드바 17vw 제외 */
	padding: 2rem;
`;

export const scrum = css`
	width: 100%;
	height: 10%;
	background-color: #fafafa;
	display: flex;
	align-items: center;

	& > h3 {
		font-size: 1rem;
		font-weight: bold;
	}
`;

export const cardContainer = css`
	display: flex;
	gap: 20px;
	justify-content: center;
	margin-top: 40px;
`;
