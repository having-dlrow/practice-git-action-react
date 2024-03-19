import style from "./marketInsight.module.scss";
import ExchangeInfo from "../../main/coinChart/_components/ExchangeInfo";
import RateDisplay from "../../main/coinChart/_components/RateDisplay";
import MiniCoinIndicator from "./miniCoinIndicator/MiniCoinIndicator";
// import { kimchiPremiumDataState } from "../../../pages/mainPage/coinChart/_state/state";
// import { useBinanceTickersFetcher, useExchangeRateFetcher, useKimchiPremiumCalculator, useUpbitTickersFetcher } from "../../../pages/mainPage/coinChart/_hooks/useCoin";
// import { useRecoilValue } from "recoil";




export default function MarketInsight() {
  // const kimchiPremiumData = useRecoilValue(kimchiPremiumDataState);
  // console.log(kimchiPremiumData)
  // useExchangeRateFetcher();
  // useUpbitTickersFetcher();
  // useBinanceTickersFetcher();
  // useKimchiPremiumCalculator();


  return (
    <div className={style.container}>
      <div className={style.priceSection}>
        <div className={style.priceBox}>
          <h4 className={style.boxTitle}>실시간 가격</h4>
          <div className={style.priceTop}>
            <MiniCoinIndicator code="BTC" />
            <MiniCoinIndicator code="ETH" />
            <MiniCoinIndicator code="USDT" />
            <MiniCoinIndicator code="SHIB" />
          </div>
          <div className={style.bottom}></div>
        </div>


        <div className={style.premiumCalculator}>
          <h4 className={style.boxTitle}>김프 계산기</h4>

          <div className={style.top}>
            <div className={style.sectionContentLeft}>
              <span className={style.exchangeLabel}>가상자산</span>
              <select name="coin" id="coin" className={style.coinSelector}>
                <option value={'BTC'}>
                  비트코인
                </option>
              </select>
            </div>
            {/* <select name="coin" id="coin">
              {kimchiPremiumData.map((data, index) => (
                <option value={data.code} key={index}>
                  {data.koreanName}
                </option>
              ))}
            </select> */}
            <ExchangeInfo />
          </div>
          <div className={style.bottom}>
            <span className={style.exchangeLabel}>김치프리미엄</span>
            <div className={style.exchangeInfoWrapper}>
              <div className={style.sectionContentLeft}>
                <h5 className={style.exchangeName}>
                  <img src="src/assets/images/ico_upbit.png" alt="" />
                  업비트
                </h5>
                <span className={style.exchangePrice}>{(88000000).toLocaleString()}원</span>
              </div>
              <img src="src/assets/images/minus.svg" alt="" />
              <div className={style.sectionContentRight}>
                <h5 className={style.exchangeName}>
                  <img src="src/assets/images/ico_binance.png" alt="" />
                  바이낸스 BTC 마켓
                </h5>
                <span className={style.exchangePrice}>{(85000000).toLocaleString()}원</span>
              </div>
              <img src="src/assets/images/equal.svg" alt="" />
              <div className={style.sectionContentRight}>
                <RateDisplay rate={(88000000 - 85000000) / 85000000 * 100} />
                <span className={style.exchangePrice}>{(85000000).toLocaleString()}원</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
