import { useTranslation } from '@pancakeswap/localization'
import { AddIcon, Box, BoxProps, Button, Flex, FlexGap, Text } from '@pancakeswap/uikit'
import { WalletDisclaimer } from 'components/Card/WalletDisclaimer'
import { SwapUIV2 } from 'components/widgets'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import styled from 'styled-components'

const ContentContainer = styled(Box)<{ $isBottomRounded?: boolean }>`
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme, $isBottomRounded }) =>
    $isBottomRounded ? `0 0 ${theme.radii.card} ${theme.radii.card}` : '0'};
`

const StyledCardFooter = styled(Box)`
  padding: 24px;

  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
`

interface CardContentProps extends BoxProps {}
export const CardContent = (props: CardContentProps) => {
  const { t } = useTranslation()
  const isWalletConnected = true

  // Query params
  const router = useRouter()
  const [currency0, currency1] = router.query?.currency ?? ['TON', 'USDT']

  const [inputValue, setInputValue] = useState('') // TODO: Set in atoms later
  const [outputValue, setOutputValue] = useState('') // TODO: Set in atoms later

  const handleInputValue = useCallback(
    (value: string) => {
      setInputValue(value)
    },
    [setInputValue],
  )

  const handleOutputValue = useCallback(
    (value: string) => {
      setOutputValue(value)
    },
    [setOutputValue],
  )

  return (
    <>
      <ContentContainer $isBottomRounded={!isWalletConnected} {...props}>
        {!isWalletConnected && <WalletDisclaimer my="8px" text={t('Connect wallet to add liquidity')} />}
        <SwapUIV2.CurrencyInputPanelSimplify
          id="add-liquidity-input-panel"
          onUserInput={handleInputValue}
          value={inputValue}
        />
        <AddIcon mt="12px" width={28} />
        <SwapUIV2.CurrencyInputPanelSimplify
          id="add-liquidity-output-panel"
          onUserInput={handleOutputValue}
          value={outputValue}
        />
        <FlexGap flexDirection="column" mt="24px" gap="16px">
          <Flex justifyContent="space-between">
            <Text color="textSubtle">Rates</Text>
            <Box>
              <Text>
                1 {currency0} ≈ 5.21 {currency1}
              </Text>
              <Text>
                1 {currency1} ≈ 0.927 {currency0}
              </Text>
            </Box>
          </Flex>
          <Flex justifyContent="space-between">
            <Text color="textSubtle">Your share in the pair</Text>

            <Text>10%</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text color="textSubtle">Slippage Tolerance</Text>

            <Text>slippage btn</Text>
          </Flex>
        </FlexGap>
      </ContentContainer>

      {isWalletConnected && (
        <StyledCardFooter>
          <Button width="100%">Supply</Button>
        </StyledCardFooter>
      )}
    </>
  )
}
