import { Outlet } from 'react-router-dom'
import './styles/index.scss'
import Header from './components/common/header/Header'
import MaxWidthBox from './components/common/layout/MaxWidthBox'
import FixedHeaderSpacer from './components/common/layout/FixedHeaderSpacer'
import { RecoilRoot } from 'recoil'
import MarketInsight from './components/common/marketInsight/MarketInsight'

export function App() {
  return (
    <>
      <RecoilRoot>
        <Header />
        <MaxWidthBox>
          <FixedHeaderSpacer>
            <MarketInsight />
            <Outlet />
          </FixedHeaderSpacer>
        </MaxWidthBox>
      </RecoilRoot>
    </>
  )
}
