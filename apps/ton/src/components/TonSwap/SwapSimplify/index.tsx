import { Currency } from '@pancakeswap/sdk'
import { Box, Flex, useMatchBreakpoints } from '@pancakeswap/uikit'
import { useRouter } from 'next/router'
import { useState } from 'react'

import Page from 'components/Page'
import { useCurrency } from 'hooks/Tokens'
import { useSwapHotTokenDisplay } from 'hooks/useSwapHotTokenDisplay'
import { Field } from 'state/swap/actions'
import { useSingleTokenSwapInfo, useSwapState } from 'state/swap/hooks'
import { styled } from 'styled-components'
import { StyledSwapContainer } from '../../../styles/swapStyles'
import { V4SwapForm } from './V4Swap'

const Wrapper = styled(Box)`
  width: 100%;
  ${({ theme }) => theme.mediaQueries.md} {
    min-width: 328px;
    max-width: 480px;
  }
`

export default function V4Swap() {
  const { query } = useRouter()
  const { isDesktop, isMobile } = useMatchBreakpoints()
  // const {
  //   isChartExpanded,
  //   isChartDisplayed,
  //   setIsChartDisplayed,
  //   setIsChartExpanded,
  //   isChartSupported,
  //   // isHotTokenSupported,
  // } = useContext(SwapFeaturesContext)
  const [isSwapHotTokenDisplay, setIsSwapHotTokenDisplay] = useSwapHotTokenDisplay()
  // const { t } = useTranslation()
  const [firstTime, setFirstTime] = useState(true)

  // useEffect(() => {
  //   if (firstTime && query.showTradingReward) {
  //     setFirstTime(false)
  //     setIsSwapHotTokenDisplay(true)

  //     if (!isSwapHotTokenDisplay && isChartDisplayed) {
  //       setIsChartDisplayed?.((currentIsChartDisplayed) => !currentIsChartDisplayed)
  //     }
  //   }
  // }, [firstTime, isChartDisplayed, isSwapHotTokenDisplay, query, setIsSwapHotTokenDisplay, setIsChartDisplayed])

  // swap state & price data
  const {
    [Field.INPUT]: { currencyId: inputCurrencyId },
    [Field.OUTPUT]: { currencyId: outputCurrencyId },
  } = useSwapState()
  const inputCurrency = useCurrency(inputCurrencyId)
  const outputCurrency = useCurrency(outputCurrencyId)

  const currencies: { [field in Field]?: Currency } = {
    [Field.INPUT]: inputCurrency ?? undefined,
    [Field.OUTPUT]: outputCurrency ?? undefined,
  }

  const singleTokenPrice = useSingleTokenSwapInfo(
    inputCurrencyId,
    inputCurrency,
    outputCurrencyId,
    outputCurrency,
    // isChartSupported,
  )

  return (
    <Page removePadding hideFooterOnDesktop={false} showExternalLink={false} showHelpLink>
      <Flex
        width="100%"
        height="100%"
        justifyContent="center"
        position="relative"
        mt={isMobile ? '18px' : '42px'}
        p={isMobile ? '16px' : '24px'}
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          height="100%"
          width={!isMobile ? 'auto' : '100%'}
          mt={!isMobile ? '42px' : undefined}
        >
          <StyledSwapContainer justifyContent="center" width="100%" style={{ height: '100%' }} $isChartExpanded={false}>
            <Wrapper height="100%">
              <V4SwapForm />
            </Wrapper>
          </StyledSwapContainer>
        </Flex>
      </Flex>
    </Page>
  )
}
