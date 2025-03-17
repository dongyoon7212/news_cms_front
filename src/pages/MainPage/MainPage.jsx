/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import Card from "../../components/Card/Card";
import * as s from "./style";
import { useQuery } from "@tanstack/react-query";
import { getNewsList } from "../../apis/news/newsApi";

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
	const [openIndex, setOpenIndex] = useState(null);
	const contentRefs = useRef([]);

	const toggleAccordion = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const { data, error, isLoading } = useQuery({
		queryKey: ["getNewsQuery", { display: "5", start: "1" }],
		queryFn: async () => getNewsList({ display: "5", start: "1" }),
		retry: 0,
		refetchOnWindowFocus: false,
		onSuccess: (data) => {},
		onError: (error) => {
			console.log(error);
		},
	});

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
				{data?.data?.map((news, index) => (
					<div
						key={news.index}
						css={s.newsItem}
						onClick={() => toggleAccordion(index)}
					>
						<div css={s.newsHeader}>
							<span
								css={s.newsTitle}
								dangerouslySetInnerHTML={{
									__html: news.title,
								}}
							></span>
							<span css={s.newsDate}>{news.pubDt}</span>
						</div>
						<div
							ref={(el) => (contentRefs.current[index] = el)}
							css={s.newsSummary}
							style={{
								maxHeight: "0px",
								opacity: "0",
							}}
						>
							<div>
								<a
									href={news.lnk}
									target="_blank"
									dangerouslySetInnerHTML={{
										__html: news.dscptn,
									}}
								></a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default MainPage;
