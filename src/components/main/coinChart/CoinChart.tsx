import { useEffect, useState, useMemo } from "react";
import { useRecoilValue } from 'recoil';
import style from "./coinChart.module.scss";
import ExchangeInfo from "./_components/ExchangeInfo";
import Star from "./_components/Star";
import TradingWidget from "../realTimeBTC/chart/TradingWidget";
import { kimchiPremiumDataState } from "./_state/state";
import { useKimchiPremiumCalculator } from "./_hooks/useCoin";
import { formatCurrency } from "../../common/header/marketTrends/MarketTrends";
import RateDisplay from "./_components/RateDisplay";


export const formatPrice = (price: number) => {
  const absPrice = Math.abs(price);

  let formattedPrice = '';
  if (absPrice >= 1000) {
    formattedPrice = absPrice.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  } else if (absPrice >= 100) {
    formattedPrice = absPrice.toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  } else if (absPrice >= 10) {
    formattedPrice = absPrice.toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  } else if (absPrice >= 1) {
    formattedPrice = absPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  } else {
    formattedPrice = absPrice.toLocaleString("en-US", { minimumFractionDigits: 4, maximumFractionDigits: 4 });
  }

  return price < 0 ? `-${formattedPrice}` : formattedPrice;
};




export default function CoinChart() {
  const isMarked = true;
  const [visibleChartId, setVisibleChartId] = useState<string | null>(null);
  const [sortKey, setSortKey] = useState<string>("upbitPrice");
  const [sortDirection, setSortDirection] = useState<'ascending' | 'descending'>('descending');
  const kimchiPremiumData = useRecoilValue(kimchiPremiumDataState);


  useKimchiPremiumCalculator();

  const toggleCoinChart = (coinCode: string) => {
    if (visibleChartId === coinCode) {
      setVisibleChartId(null);
    } else {
      setVisibleChartId(coinCode);
    }
  };

  // 정렬 로직을 수행하는 함수
  const sortedKimchiPremiumData = useMemo(() => {
    return [...kimchiPremiumData].sort((a, b) => {
      let valueA: number, valueB: number;

      switch (sortKey) {
        case 'changeRate': // 전일대비 변동률
          valueA = ((a.upbitPrice - a.upbitPrevClosePrice) / a.upbitPrevClosePrice) * 100;
          valueB = ((b.upbitPrice - b.upbitPrevClosePrice) / b.upbitPrevClosePrice) * 100;
          break;
        case 'highPriceDifference': // 고가대비 변동률
          valueA = ((a.upbitPrice - a.upbitHighPrice) / a.upbitHighPrice) * 100;
          valueB = ((b.upbitPrice - b.upbitHighPrice) / b.upbitHighPrice) * 100;
          break;
        case 'lowPriceDifference': // 저가대비 변동률
          valueA = ((a.upbitPrice - a.upbitLowPrice) / a.upbitLowPrice) * 100;
          valueB = ((b.upbitPrice - b.upbitLowPrice) / b.upbitLowPrice) * 100;
          break;
        case 'upbitTradePrice24h': // 24시간 거래금액
          valueA = a.upbitTradePrice24h;
          valueB = b.upbitTradePrice24h;
          break;
        case 'koreanName': // 한국어 코인명으로 정렬
          if (sortDirection === 'ascending') {
            return a.koreanName.localeCompare(b.koreanName, 'ko');
          } else {
            return b.koreanName.localeCompare(a.koreanName, 'ko');
          }
        default:
          valueA = a.upbitPrice;
          valueB = b.upbitPrice;
      }

      // 정렬 방향에 따른 값 비교
      return sortDirection === 'ascending' ? valueA - valueB : valueB - valueA;
    });
  }, [kimchiPremiumData, sortKey, sortDirection]);



  // 정렬 트리거 함수
  const triggerSort = (key: string) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'ascending' ? 'descending' : 'ascending');
    } else {
      setSortKey(key);
      setSortDirection('ascending'); // 새로운 키에 대해서는 기본적으로 오름차순 정렬
    }
  };


  useEffect(() => {
    // console.log(kimchiPremiumData)
    // console.log(binanceTickersState)
  }, [])


  return (
    <div className={style.coinChartWrapper}>
      <ExchangeInfo />
      <div className={style.coinListWrapper}>
        <ul className={style.coinListLabelContainer}>
          <li className={style.coinTitle} onClick={() => triggerSort('koreanName')}>가상자산명</li>
          <li className={style.coinTradeInfo} onClick={() => triggerSort('upbitPrice')}>현재가</li>
          <li className={style.coinTradeInfo} onClick={() => triggerSort('premium')}>김프</li>
          <li className={style.coinTradeInfo} onClick={() => triggerSort('changeRate')}>전일대비</li>
          <li className={style.coinTradeInfo} onClick={() => triggerSort('highPriceDifference')}>고가대비(전일)</li>
          <li className={style.coinTradeInfo} onClick={() => triggerSort('lowPriceDifference')}>저가대비(전일)</li>
          <li className={style.coinTradeInfo} onClick={() => triggerSort('upbitTradePrice24h')}>거래금액(24H)</li>
        </ul>
        {sortedKimchiPremiumData.map((data, index) => (
          <div key={index}>
            <ul className={style.coinListContainer} onClick={() => toggleCoinChart(data.code)}>
              <li className={style.coinItem}>
                <img className={style.coinImg} src={`https://static.upbit.com/logos/${data.code.replace("KRW-", "")}.png`} alt="" />
                <Star isMarked={isMarked} />
              </li>
              {/* 코인명 */}
              <li className={style.coinTitle}>
                <strong>{data.koreanName}</strong>
                <span>{data.code.replace("KRW-", "")}</span>
              </li>
              {/* 현재가격 */}
              <li className={style.coinTradeInfo}>
                <strong>{data.upbitPrice.toLocaleString()} 원</strong>
                <span>{formatPrice(data.binancePrice)}</span>
              </li>
              {/* 김치프리미엄 */}
              <li className={style.coinTradeInfo}>
                <strong className={style.kimpRate}>+{data.premium.toFixed(2)}%</strong>
                <span>{formatPrice(data.upbitPrice - data.binancePrice)}</span>
              </li>
              {/* 전일대비 */}
              <li className={style.coinTradeInfo}>
                <RateDisplay rate={((data.upbitPrice - data.upbitPrevClosePrice) / data.upbitPrevClosePrice) * 100} />
                <span>{formatPrice(data.upbitPrice - data.upbitPrevClosePrice)}</span>
              </li>
              {/* 전일 고가 */}
              <li className={style.coinTradeInfo}>
                <RateDisplay rate={((data.upbitPrice - data.upbitHighPrice) / data.upbitHighPrice) * 100} />
                <span>{formatPrice(data.upbitPrice - data.upbitHighPrice)}</span>
              </li>
              {/* 전일 저가 */}
              <li className={style.coinTradeInfo}>
                <RateDisplay rate={((data.upbitPrice - data.upbitLowPrice) / data.upbitLowPrice) * 100} />
                <span>{formatPrice(data.upbitPrice - data.upbitLowPrice)}</span>
              </li>
              {/* 24시간 거래금액 */}
              <li className={style.coinTradeInfo}>
                <strong>{formatCurrency(data.upbitTradePrice24h)}</strong>
                <span>{formatCurrency(data.binanceTradePrice24h)}</span>

              </li>
            </ul>
            {visibleChartId === data.code && (
              <div className={style.chartContainer}>
                <TradingWidget symbol={`${data.code.replace("KRW-", "")}KRW`} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div >
  );
}
