import { ArrowDownIcon, Button, Flex, FlexGap, Text } from '@pancakeswap/uikit'
import { LightGreyCard } from 'components/Card'

interface ConfirmSwapModalProps {
  onDismiss?: () => void
}
export const ConfirmSwapModal = ({ onDismiss }: ConfirmSwapModalProps) => {
  return (
    <>
      <FlexGap flexDirection="column" gap="16px">
        <Flex justifyContent="space-between">
          <Text fontSize="24px" bold>
            1
          </Text>
          <Text fontSize="24px" bold>
            TON
          </Text>
        </Flex>
        <ArrowDownIcon color="textSubtle" width="24px" />
        <Flex justifyContent="space-between">
          <Text fontSize="24px" bold>
            100
          </Text>
          <Text fontSize="24px" bold>
            USDT
          </Text>
        </Flex>
      </FlexGap>

      <LightGreyCard mt="24px">details panel</LightGreyCard>

      <Button mt="24px" onClick={onDismiss}>
        Continue
      </Button>
    </>
  )
}
