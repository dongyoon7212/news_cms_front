/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaAngleUp } from "react-icons/fa";

function Card({
	title,
	value,
	changeValue,
	changeRate,
	textColor,
	iconBg,
	icon,
}) {
	return (
		<div css={s.cardStyle}>
			<div css={s.iconStyle(iconBg)}>{icon}</div>
			<div css={s.textBox}>
				<div css={s.titleBox}>{title}</div>
				<div css={s.valueBox}>{value}</div>
				<div css={s.valueRateBox}>
					<h5 css={s.valueText}>
						<FaAngleUp css={s.upDownIcon} />
						{changeValue}
					</h5>
					<h5 css={s.valueText}>{changeRate}</h5>
				</div>
			</div>
		</div>
	);
}

export default Card;
