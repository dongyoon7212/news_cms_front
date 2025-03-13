/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
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

const newsData = [
	{
		id: 1,
		title: "삼성전자, 1분기 실적 발표… 예상보다 높은 성장세",
		date: "2025-03-07",
		source: "연합뉴스",
		summary:
			"삼성전자는 올해 1분기 실적이 시장의 예상치를 상회했다고 발표했다. 반도체 부문 회복과 함께 스마트폰 판매 호조가 주요 원인으로 분석된다.",
	},
	{
		id: 2,
		title: "테슬라, 자율주행 기술 대규모 업데이트 예고",
		date: "2025-03-07",
		source: "블룸버그",
		summary:
			"일론 머스크는 트위터를 통해 FSD(완전 자율 주행) 기술의 대규모 업데이트를 발표하며 주가가 5% 상승했다.",
	},
	{
		id: 3,
		title: "애플, AI 기반 음성 비서 개선… 차세대 시리 공개 예정",
		date: "2025-03-07",
		source: "CNBC",
		summary:
			"애플이 WWDC 2025에서 새로운 AI 음성 비서를 공개할 예정이며, 이는 기존 시리보다 훨씬 향상된 성능을 제공할 것으로 예상된다.",
	},
	{
		id: 4,
		title: "국내 증시, 외국인 투자자 대거 유입으로 상승 마감",
		date: "2025-03-07",
		source: "한국경제",
		summary:
			"코스피와 코스닥 지수 모두 상승 마감하며, 외국인 투자자의 매수세가 지속되고 있다.",
	},
	{
		id: 5,
		title: "메타버스 시장, 2030년까지 5배 성장 전망",
		date: "2025-03-07",
		source: "포브스",
		summary:
			"전문가들은 메타버스 시장이 2030년까지 5배 이상 성장할 것이라 전망하며, 주요 IT 기업들의 투자 경쟁이 치열해지고 있다.",
	},
];

function MainPage() {
	const [openIndex, setOpenIndex] = useState(null);
	const contentRefs = useRef([]);

	const toggleAccordion = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	useEffect(() => {
		contentRefs.current.forEach((el, index) => {
			if (el) {
				if (openIndex === index) {
					el.style.maxHeight = el.scrollHeight + "px";
					el.style.opacity = "1";
				} else {
					el.style.maxHeight = "0px";
					el.style.opacity = "0";
				}
			}
		});
	}, [openIndex]);

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
				{newsData.map((news, index) => (
					<div
						key={news.id}
						css={s.newsItem}
						onClick={() => toggleAccordion(index)}
					>
						<div css={s.newsHeader}>
							<span css={s.newsTitle}>{news.title}</span>
							<span css={s.newsDate}>{news.date}</span>
						</div>
						<div
							ref={(el) => (contentRefs.current[index] = el)}
							css={s.newsSummary}
							style={{
								maxHeight: "0px",
								opacity: "0",
							}}
						>
							<p>{news.summary}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default MainPage;
