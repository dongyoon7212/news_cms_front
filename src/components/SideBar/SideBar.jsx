import React from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function SideBar() {
	return (
		<div css={s.layout}>
			<div css={s.box}>
				<div css={s.logoBox}>
					<h1 css={s.logo}>Stock News</h1>
				</div>
				<div css={s.navBox}>
					<div css={s.searchBox}>
						<input
							css={s.searchInput}
							type="text"
							placeholder="검색어를 입력해 주세요."
						/>
					</div>
					<div css={s.menuBox}>
						<ul css={s.menuList}>
							<li css={s.menuItem}>
								<a href="/">대시보드</a>
							</li>
							<li css={s.menuItem}>
								<a href="/news">뉴스</a>
							</li>
							<li css={s.menuItem}>
								<a href="/categry">카테고리</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SideBar;
