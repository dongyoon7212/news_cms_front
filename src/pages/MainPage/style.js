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
		margin-bottom: 20px;
	}
`;

export const newsItem = css`
	border-bottom: 1px solid #ddd;
	box-sizing: border-box;
	padding: 15px 10px;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: rgba(0, 0, 0, 0.05);
	}
`;

export const newsHeader = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const newsTitle = css`
	font-size: 16px;
	font-weight: bold;
`;

export const newsDate = css`
	font-size: 14px;
	color: #666;
`;

export const newsSummary = css`
	font-size: 14px;
	color: #444;
	overflow: hidden;
	transition: max-height 0.4s ease-in-out, opacity 0.4s ease-in-out;

	& > p {
		padding-top: 15px;
	}
`;

export const newsSummaryVisible = css`
	display: block;
`;
