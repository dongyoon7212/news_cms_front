/** @jsxImportSource @emotion/react */
import * as s from "./style";

function NewsPage() {
	return (
		<div css={s.layout}>
			<div css={s.scrum}>
				<h3>News</h3>
			</div>
			<div css={s.newsContainer}>
				<h1>뉴스</h1>
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

export default NewsPage;
