import { BoxProps, FlexGap } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { LiquidityRow } from './LiquidityRow'

const ScrollableList = styled(FlexGap).attrs({ flexDirection: 'column', gap: '8px' })`
  overflow-y: auto;
  max-height: 300px;
  min-height: 20px;
`

interface LiquidityListProps extends BoxProps {}
export const LiquidityList = (props: LiquidityListProps) => {
  const list = [
    {
      title: 'TON-USDT LP',
      currency0: 'TON',
      currency1: 'USDT',
    },
    {
      title: 'TON-CAKE LP',
      currency0: 'TON',
      currency1: 'BNB',
    },
    {
      title: 'TON-USDC LP',
      currency0: 'TON',
      currency1: 'BUSD',
    },
    {
      title: 'TON-WBTC LP',
      currency0: 'TON',
      currency1: 'ETH',
    },
  ]

  return (
    <>
      <ScrollableList {...props}>
        {list.map((item) => (
          <LiquidityRow key={item.title} {...item} />
        ))}
      </ScrollableList>
    </>
  )
}
