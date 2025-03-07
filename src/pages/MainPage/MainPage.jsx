/** @jsxImportSource @emotion/react */
import Card from "../../components/Card/Card";
import * as s from "./style";

const cardsData = [
	{
		title: "Bookings",
		value: "281",
		change: "+55% than last week",
		textColor: "#4CAF50",
		iconBg: "linear-gradient(180deg, rgba(62,62,69,1) 0%, rgba(29,29,30,1) 100%);",
		icon: "📁",
	},
	{
		title: "Today's Users",
		value: "2,300",
		change: "+3% than last month",
		textColor: "#4CAF50",
		iconBg: "linear-gradient(180deg, rgba(67,158,239,1) 0%, rgba(30,120,233,1) 100%);",
		icon: "📊",
	},
	{
		title: "Revenue",
		value: "34K",
		change: "+1% than yesterday",
		textColor: "#4CAF50",
		iconBg: "linear-gradient(180deg, rgba(96,183,100,1) 0%, rgba(70,162,73,1) 100%);",
		icon: "🏪",
	},
	{
		title: "Followers",
		value: "+91",
		change: "Just updated",
		textColor: "#666",
		iconBg: "linear-gradient(180deg, rgba(233,60,119,1) 0%, rgba(218,32,99,1) 100%);",
		icon: "👥",
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
		</div>
	);
}

export default MainPage;
