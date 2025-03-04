/** @jsxImportSource @emotion/react */
import * as s from "./style";

export default function pageLayout({ children }) {
	return <div css={s.layout}>{children}</div>;
}
