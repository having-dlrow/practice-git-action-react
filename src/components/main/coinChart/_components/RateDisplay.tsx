import style from './rateDisplay.module.scss'

export default function RateDisplay({ rate }: { rate: number }) {
    const rateStyle = rate > 0 ? style.positive : style.negative;
    const formattedRate = rate.toFixed(2);
    const rateText = rate !== 0 ? `${rate > 0 ? `+${formattedRate}` : formattedRate}%` : "";

    return <strong className={rateStyle}>{rateText}</strong>;
}