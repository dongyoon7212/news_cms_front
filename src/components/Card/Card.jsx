/** @jsxImportSource @emotion/react */
import * as s from "./style";

function Card({ title, value, change, textColor, iconBg, icon }) {
	return (
		<div css={s.cardStyle}>
			<div css={s.iconStyle(iconBg)}>{icon}</div>
			<div css={s.textBox}>
				<div css={s.titleStyle}>{title}</div>
				<div css={s.valueStyle}>{value}</div>
				<div css={s.changeStyle(textColor)}>{change}</div>
			</div>
		</div>
	);
}

export default Card;
