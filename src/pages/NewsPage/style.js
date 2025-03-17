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
		padding-left: 10px;
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
	width: 70%;
`;

export const newsInfo = css`
	width: 30%;
	display: flex;
	justify-content: space-around;
`;

export const pagination = css`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	gap: 10px;

	& button {
		background: #007bff;
		color: white;
		border: none;
		padding: 8px 12px;
		cursor: pointer;
		border-radius: 5px;
		font-size: 14px;
	}

	& button:disabled {
		background: #ccc;
		cursor: not-allowed;
	}

	& span {
		font-size: 16px;
		font-weight: bold;
	}
`;
