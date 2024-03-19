import { useState, useEffect, ChangeEvent } from "react";
import style from "./realTimeBTC.module.scss";
import TradingWidget from "./chart/TradingWidget";

export default function RealTimeBTC() {
  const [selectedCoin, setSelectedCoin] = useState<string>("BTC");
  const kimpSymbol = `(BINANCE:${selectedCoin}USD/BINANCE:${selectedCoin}USD*UPBIT:${selectedCoin}KRW-BINANCE:${selectedCoin}USDT*FX_IDC:USDKRW)/(BINANCE:${selectedCoin}USD*FX_IDC:USDKRW)*100`

  const handleCoinChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCoin(event.target.value);
  };

  useEffect(() => {
  }, [selectedCoin]);

  return (

    <div className={style.chartWrapper}>
      <h4 className={style.boxTitle}>실시간 BTC 차트</h4>
      <select
        className={style.coinSelector}
        onChange={handleCoinChange}
        value={selectedCoin}
        name="coins"
        id="coins"
      >
        <option value="BTC">비트코인</option>
        <option value="ETH">이더리움</option>
        <option value="ETC">이더리움 클래식</option>
        <option value="SOL">솔라나</option>
      </select>
      <div className={style.chartContainer}>
        {/* <Chart coin={selectedCoin} /> */}
        <TradingWidget symbol={kimpSymbol} />
      </div>
    </div>
  );
}
