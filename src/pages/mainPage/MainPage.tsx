import RealTimeBTC from '../../components/main/realTimeBTC/RealTimeBTC'
import CoinChart from '../../components/main/coinChart/CoinChart'
import style from './mainPage.module.scss'

export default function MainPage() {
    return <div className={style.container}>
        <RealTimeBTC />
        <CoinChart />
    </div>
}
