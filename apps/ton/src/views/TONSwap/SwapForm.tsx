import { Button, Column, Text, useModalV2 } from '@pancakeswap/uikit'
import { ButtonAndDetailsPanel } from 'components/TonSwap/ButtonAndDetailsPanel'
import CurrencyInputPanelSimplify from 'components/TonSwap/CurrencyInputPanelSimplify'
import { FlipButton } from 'components/TonSwap/FlipButton'
import { useCallback, useState } from 'react'

import { useTranslation } from '@pancakeswap/localization'
import { ConfirmSwapModal } from 'components/TonSwap/ConfirmSwapModal'
import { SwapUIV2 } from 'components/widgets/swap-v2'

export const SwapForm = () => {
  const noop = () => {}

  const { t } = useTranslation()

  const [typedValue, setTypedValue] = useState('')
  const [inputAmount, setInputAmount] = useState<any>(null)
  const [outputAmount, setOutputAmount] = useState<any>(null)
  const [outputValue, setOutputValue] = useState('')
  const [isUserInsufficientBalance, setIsUserInsufficientBalance] = useState(false)

  const { isOpen, setIsOpen, onDismiss } = useModalV2()

  const handleTypeInput = useCallback(
    (value: string) => {
      setTypedValue(value)
    },
    [setTypedValue],
  )

  const handleSwap = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  return (
    <SwapUIV2.SwapFormWrapper>
      <SwapUIV2.SwapTabAndInputPanelWrapper>
        <SwapUIV2.InputPanelWrapper>
          <Column gap="sm">
            <CurrencyInputPanelSimplify
              id="swap-currency-input"
              showUSDPrice
              showMaxButton
              showCommonBases
              inputLoading={false}
              currencyLoading={false}
              label={t('From')}
              value={typedValue}
              maxAmount={undefined}
              showQuickInputButton
              currency={inputAmount?.currency}
              onUserInput={handleTypeInput}
              onPercentInput={noop}
              onMax={noop}
              onCurrencySelect={() => {
                console.log('On currency select for input')
              }}
              otherCurrency={outputAmount?.currency}
              commonBasesType={undefined}
              title={
                <Text color="textSubtle" fontSize={12} bold>
                  {t('From')}
                </Text>
              }
              isUserInsufficientBalance={isUserInsufficientBalance}
            />
            <FlipButton />
            <CurrencyInputPanelSimplify
              id="swap-currency-input"
              showUSDPrice
              showMaxButton
              showCommonBases
              inputLoading={false}
              currencyLoading={false}
              label={t('From')}
              value={outputValue}
              maxAmount={undefined}
              showQuickInputButton
              currency={outputAmount?.currency}
              onUserInput={noop}
              onPercentInput={noop}
              onMax={noop}
              onCurrencySelect={noop}
              otherCurrency={inputAmount?.currency}
              commonBasesType={undefined}
              title={
                <Text color="textSubtle" fontSize={12} bold>
                  {t('To')}
                </Text>
              }
              isUserInsufficientBalance={isUserInsufficientBalance}
              disabled
            />
          </Column>
        </SwapUIV2.InputPanelWrapper>
      </SwapUIV2.SwapTabAndInputPanelWrapper>
      <ButtonAndDetailsPanel swapCommitButton={<Button onClick={handleSwap}>Swap</Button>} />
      <ConfirmSwapModal isOpen={isOpen} onDismiss={onDismiss} />
    </SwapUIV2.SwapFormWrapper>
  )
}
