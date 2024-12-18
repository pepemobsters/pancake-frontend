import { useTranslation } from '@pancakeswap/localization'
import { ArrowUpIcon, Box, CircleLoader, FlexGap, Text } from '@pancakeswap/uikit'
import { CurrencyLogo } from 'components/widgets'
import { NumberDisplay } from 'components/widgets/NumberDisplay'
import styled from 'styled-components'

const StyledFlexGap = styled(FlexGap).attrs({ flexDirection: 'column' })`
  text-align: center;
  min-height: 160px;
`

interface ConfirmActionProps {
  currency0?: string
  currency1?: string
  amount0?: string
  amount1?: string
}

export const ConfirmActionModal = ({ currency0, currency1, amount0, amount1 }: ConfirmActionProps) => {
  const { t } = useTranslation()
  const truncatedWalletAddress = '0x...0000'

  return (
    <StyledFlexGap gap="8px">
      <FlexGap justifyContent="space-around" alignItems="center">
        <Box>
          <CurrencyLogo
            currency={{
              logoURI: '',
            }}
            size="40px"
          />
          <FlexGap justifyContent="center" alignItems="center" gap="4px">
            <NumberDisplay value={amount0} fontSize="24px" bold />
            <Text fontSize="24px" bold>
              {currency0}
            </Text>
          </FlexGap>
        </Box>
        <Box>
          <ArrowUpIcon color="textSubtle" width="24px" style={{ transform: 'rotate(90deg)' }} />
        </Box>
        <Box>
          <CurrencyLogo
            currency={{
              logoURI: '',
            }}
            size="40px"
          />
          <FlexGap justifyContent="center" alignItems="center" gap="4px">
            <NumberDisplay value={amount1} fontSize="24px" bold />
            <Text fontSize="24px" bold>
              {currency1}
            </Text>
          </FlexGap>
        </Box>
      </FlexGap>

      <FlexGap mt="auto" justifyContent="center" alignItems="center" gap="8px">
        <Text color="textSubtle">
          {t('Please approve it in your wallet:')} {truncatedWalletAddress}
        </Text>
        <CircleLoader size="14px" stroke="#7A6EAA" />
      </FlexGap>
    </StyledFlexGap>
  )
}
