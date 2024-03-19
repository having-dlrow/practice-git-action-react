import style from "./exchangeInfo.module.scss";

export default function ExchangeInfo() {
  return (
    <div className={style.exchangeInfoWrapper}>
      <div className={style.exchangeSection}>
        <span className={style.exchangeLabel}>기준 거래소</span>
        <h5 className={style.exchangeName}>
          <img src="src/assets/images/ico_upbit.png" alt="" />
          업비트
        </h5>
      </div>
      <img className={style.syncIcon} src="src/assets/images/sync_alt.svg" alt="" />
      <div className={style.exchangeSection}>
        <span className={style.exchangeLabel}>해외 거래소</span>
        <h5 className={style.exchangeName}>
          <img src="src/assets/images/ico_binance.png" alt="" />
          바이낸스 BTC 마켓
        </h5>
      </div>
    </div>
  );
}

