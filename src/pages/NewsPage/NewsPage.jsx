/** @jsxImportSource @emotion/react */
import { useQuery } from "@tanstack/react-query";
import * as s from "./style";
import { getNewsList } from "../../apis/news/newsApi";
import { useState } from "react";

function NewsPage() {
	const [currentPage, setCurrentPage] = useState(1);
	const display = 10;
	const { data, isLoading } = useQuery({
		queryKey: [
			"getNewsQuery",
			{ display, start: (currentPage - 1) * display + 1 },
		],
		queryFn: async () =>
			getNewsList({ display, start: (currentPage - 1) * display + 1 }),
		retry: 0,
		refetchOnWindowFocus: false,
	});

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	return (
		<div css={s.layout}>
			<div css={s.scrum}>
				<h3>News</h3>
			</div>
			<div css={s.newsContainer}>
				<h1>뉴스</h1>
				<div css={s.newsBox}>
					<ul>
						{isLoading ? (
							<div></div>
						) : (
							data?.data?.map((news, index) => (
								<li key={index}>
									<a href="#" target="_black" css={s.news}>
										<div css={s.newsTitle}>
											<h5
												dangerouslySetInnerHTML={{
													__html: news.title,
												}}
											></h5>
										</div>
										<div css={s.newsInfo}>
											<h5>{news.pubDt}</h5>
										</div>
									</a>
								</li>
							))
						)}
					</ul>
				</div>
				<div css={s.pagination}>
					<button
						disabled={currentPage === 1}
						onClick={() => handlePageChange(currentPage - 1)}
					>
						◀ 이전
					</button>
					<span>페이지 {currentPage}</span>
					<button onClick={() => handlePageChange(currentPage + 1)}>
						다음 ▶
					</button>
				</div>
			</div>
		</div>
	);
}

export default NewsPage;
