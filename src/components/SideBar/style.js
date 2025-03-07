import { css } from "@emotion/react";

export const layout = css`
	width: 21vw;
	height: 100vh;
	min-width: 200px; /* 최소 너비 설정 */
	display: flex;
	justify-content: center;
	align-items: center;
	transition: width 0.3s ease-in-out;

	@media (max-width: 992px) {
		width: 20vw;
	}

	@media (max-width: 768px) {
		width: 25vw;
	}

	@media (max-width: 576px) {
		width: 30vw;
	}
`;

export const box = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid black;
	border-radius: 15px;
	width: 90%;
	height: 95%;
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
	background: linear-gradient(
		180deg,
		rgba(50, 50, 56, 1) 0%,
		rgba(21, 21, 21, 1) 100%
	);
`;

export const logoBox = css`
	width: 100%;
	height: 10%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const logo = css`
	color: white;
	font-size: 1.7rem;

	@media (max-width: 768px) {
		font-size: 1.5rem;
	}

	@media (max-width: 576px) {
		font-size: 1.2rem;
	}
`;

export const navBox = css`
	width: 100%;
	height: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const searchBox = css`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 10%;
`;

export const border = css`
	width: 100%;
	height: 1px;
	background: rgb(35, 35, 39);
	background: linear-gradient(
		90deg,
		rgba(35, 35, 39, 1) 0%,
		rgba(91, 91, 94, 1) 50%,
		rgba(35, 35, 39, 1) 100%
	);
`;

export const searchInput = css`
	padding: 10px;
	font-size: 1rem;
	width: 80%;
	height: 10%;
	max-width: 250px;
	color: white;
	background-color: transparent;
	border: 0px solid rgba(255, 255, 255, 0.3);
	border-radius: 5px;
	outline: none;
	transition: all 0.3s ease-in-out;

	&::placeholder {
		color: rgba(255, 255, 255, 0.5);
	}
	/* 
	&:focus {
		border-color: rgba(255, 255, 255, 0.7);
		box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
	} */

	@media (max-width: 768px) {
		font-size: 0.9rem;
	}

	@media (max-width: 576px) {
		font-size: 0.8rem;
		padding: 8px;
	}
`;

export const menuBox = css`
	width: 100%;
	height: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 2vh;
`;

export const menuList = css`
	list-style: none;
	padding: 0;
	width: 100%;
`;
export const menuItem = css`
	width: 100%;
	cursor: pointer;
	transition: background-color 0.3s ease-in-out;

	& a {
		display: flex;
		width: 100%;
		padding: 1rem 2rem;
		font-size: clamp(0.9rem, 1.2vw, 1.2rem);
		color: white;
		line-height: 20px;
		text-decoration: none;
		transition: background-color 0.3s ease-in-out,
			font-weight 0.3s ease-in-out;
	}

	& a:hover {
		background-color: rgba(255, 255, 255, 0.1);
		font-weight: bold;
	}

	& > a > p {
		margin-left: 10px;
	}

	@media (max-width: 1200px) {
		font-size: 1.1rem;
	}

	@media (max-width: 992px) {
		font-size: 1rem;
	}

	@media (max-width: 768px) {
		font-size: 0.9rem;
	}

	@media (max-width: 576px) {
		font-size: 0.8rem;
		/* & a {
			padding: 0.8rem;
		} */
	}
`;
