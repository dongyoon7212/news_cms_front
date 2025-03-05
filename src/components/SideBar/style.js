import { css } from "@emotion/react";

export const layout = css`
	background-color: rgb(46, 58, 81);
	width: 17vw;
	height: 100vh;
	min-width: 200px; /* 최소 너비 설정 */
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
	width: 100%;
	height: 100%;
`;

export const logoBox = css`
	background-color: rgb(36, 45, 66);
	width: 100%;
	height: 10%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const logo = css`
	color: white;
	font-size: 2rem;

	@media (max-width: 768px) {
		font-size: 1.5rem;
	}

	@media (max-width: 576px) {
		font-size: 1.2rem;
	}
`;

export const navBox = css`
	background-color: rgb(46, 58, 81);
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
	height: 15%;
`;

export const searchInput = css`
	padding: 10px;
	font-size: 1rem;
	width: 80%;
	max-width: 250px;
	color: white;
	background-color: rgb(36, 45, 66);
	border: 1px solid rgba(255, 255, 255, 0.3);
	border-radius: 5px;
	outline: none;
	transition: all 0.3s ease-in-out;

	&::placeholder {
		color: rgba(255, 255, 255, 0.5);
	}

	&:focus {
		border-color: rgba(255, 255, 255, 0.7);
		box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
	}

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
	height: 85%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 2vh;
`;

export const menuList = css`
	list-style: none;
	padding: 0;
	width: 100%;
	text-align: center;
`;
export const menuItem = css`
	width: 100%;
	cursor: pointer;
	transition: background-color 0.3s ease-in-out;

	& a {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 1rem 0;
		font-size: clamp(0.9rem, 1.2vw, 1.2rem);
		color: white;
		text-decoration: none;
		transition: background-color 0.3s ease-in-out,
			font-weight 0.3s ease-in-out;
	}

	& a:hover {
		background-color: rgba(255, 255, 255, 0.1);
		font-weight: bold;
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
		& a {
			padding: 0.8rem;
		}
	}
`;
