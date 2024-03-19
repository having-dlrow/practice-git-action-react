import RateDisplay from "../../../main/coinChart/_components/RateDisplay";
import style from "./miniCoinIndicator.module.scss";

export default function MiniCoinIndicator({ code }: { code: string }) {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <h5>
                    <img className={style.coinImg} src={`https://static.upbit.com/logos/${code}.png`} alt="" />
                    {code}
                </h5>
                <p className={style.coinRate}>
                    <RateDisplay rate={(87567000 - 83662000) / 83662000 * 100} />
                    <span>{(87567000 - 83662000).toLocaleString()}</span>
                </p>
            </div>
            <div className={style.footer}>
                <div className={style.price}>
                    <span>현재가</span>
                    <strong>{(83662000).toLocaleString()}</strong>
                </div>
                <div className={style.price}>
                    <span>김프가</span>
                    <strong>{(87567000).toLocaleString()}</strong>
                </div>
            </div>
        </div>
    )
}
