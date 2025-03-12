/** @jsxImportSource @emotion/react */
import Card from "../../components/Card/Card";
import * as s from "./style";

const cardsData = [
	{
		title: "코스피",
		value: "2,532.78",
		changeValue: "35.04",
		changeRate: "+1.40%",
		iconBg: "linear-gradient(180deg, rgba(62,62,69,1) 0%, rgba(29,29,30,1) 100%);",
		icon: "📁",
	},
	{
		title: "코스닥",
		value: "729.41",
		changeValue: "7.99",
		changeRate: "+1.11%",
		iconBg: "linear-gradient(180deg, rgba(67,158,239,1) 0%, rgba(30,120,233,1) 100%);",
		icon: "📊",
	},
	{
		title: "코스피200",
		value: "340.98",
		changeValue: "5.90",
		changeRate: "+1.79%",
		iconBg: "linear-gradient(180deg, rgba(96,183,100,1) 0%, rgba(70,162,73,1) 100%);",
		icon: "🏪",
	},
];

function MainPage() {
	return (
		<div css={s.layout}>
			<div css={s.scrum}>
				<h3>Dashboard</h3>
			</div>
			<div css={s.cardContainer}>
				{cardsData.map((card, index) => (
					<Card key={index} {...card} />
				))}
			</div>
			<div css={s.newsContainer}>
				<h1>최신 뉴스</h1>
				<div css={s.newsBox}>
					<ul>
						<li>
							<a href="#" target="_black" css={s.news}>
								<div css={s.newsTitle}>
									<h5>제목</h5>
								</div>
								<div css={s.newsInfo}>
									<h5>####</h5>
									<h5>날짜</h5>
								</div>
							</a>
						</li>
						<li>제목</li>
						<li>제목</li>
						<li>제목</li>
						<li>제목</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default MainPage;
