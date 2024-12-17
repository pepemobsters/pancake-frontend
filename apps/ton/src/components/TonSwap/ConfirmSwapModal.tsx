import {
  ArrowDownIcon,
  Button,
  Flex,
  FlexGap,
  Heading,
  ModalBody,
  ModalContainer,
  ModalV2,
  Text,
} from '@pancakeswap/uikit'
import { LightGreyCard } from 'components/Card'
import styled from 'styled-components'

const StyledModalContainer = styled(ModalContainer)`
  min-width: 400px;
`

const StyledModalBody = styled(ModalBody)`
  padding: 32px;
`

interface ConfirmSwapModalProps {
  onDismiss?: () => void
  isOpen: boolean
}
export const ConfirmSwapModal = ({ isOpen, onDismiss }: ConfirmSwapModalProps) => {
  return (
    <>
      <ModalV2 isOpen={isOpen} onDismiss={onDismiss} closeOnOverlayClick>
        <StyledModalContainer>
          <StyledModalBody>
            <Heading scale="lg">Confirm Swap</Heading>

            <FlexGap flexDirection="column" gap="16px" mt="24px">
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
          </StyledModalBody>
        </StyledModalContainer>
      </ModalV2>
    </>
  )
}
