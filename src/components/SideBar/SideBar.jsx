import React from "react";
import { MdDashboard, MdCategory } from "react-icons/md";
import { TiNews } from "react-icons/ti";

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
					<div css={s.border}></div>
					<div css={s.searchBox}>
						<input
							css={s.searchInput}
							type="text"
							placeholder="검색어를 입력해 주세요."
						/>
					</div>
					<div css={s.border}></div>
					<div css={s.menuBox}>
						<ul css={s.menuList}>
							<li css={s.menuItem}>
								<a href="/">
									<MdDashboard />
									<p>Dashboard</p>
								</a>
							</li>
							<li css={s.menuItem}>
								<a href="/news">
									<TiNews />
									<p>News</p>
								</a>
							</li>
							<li css={s.menuItem}>
								<a href="/category">
									<MdCategory />
									<p>Category</p>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SideBar;
