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
	display: flex;
	align-items: center;

	& > h3 {
		font-size: 1.5rem;
		font-weight: bold;
	}
`;

export const cardContainer = css`
	display: flex;
	gap: 20px;
	justify-content: space-between;
	margin-top: 40px;
`;

export const newsContainer = css`
	margin-top: 30px;
	background-color: #fff;
	border-radius: 12px;
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
	padding: 30px;

	& > h1 {
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 50px;
	}
`;

export const newsBox = css`
	& > ul {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}
`;

export const news = css`
	text-decoration: none;
	color: black;
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

export const newsTitle = css`
	width: 90%;
`;

export const newsInfo = css`
	width: 10%;
	display: flex;
	justify-content: space-around;
`;
