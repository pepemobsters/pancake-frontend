import { Button } from '@pancakeswap/uikit'
import { useTonConnectModal, useTonConnectUI } from '@tonconnect/ui-react'
import { useAtomValue } from 'jotai'
import { addressAtom } from 'ton/atom/addressAtom'
import { isConnectedAtom } from 'ton/atom/isConnectedAtom'
import { balanceOfAtom } from 'ton/logic/balanceOfAtom'
import { TonContractNames } from 'ton/ton.enums'

export default () => {
  const isConnected = useAtomValue(isConnectedAtom)
  const address = useAtomValue(addressAtom)
  const balanceOfUSDC = useAtomValue(balanceOfAtom(TonContractNames.USDC))
  const tonBalance = useAtomValue(balanceOfAtom(TonContractNames.NATIVE))
  const [ui] = useTonConnectUI()
  const modal = useTonConnectModal()
  return (
    <div
      style={{
        padding: '20px',
      }}
    >
      <p>Address: {address || '-'}</p>
      <p>Ton Balance: {`${tonBalance}` || '-'}</p>
      <p>USDC Balance: {`${balanceOfUSDC}` || '-'}</p>
      {isConnected && (
        <Button
          onClick={() => {
            ui.disconnect()
          }}
        >
          Disconnect
        </Button>
      )}
      {!isConnected && (
        <Button
          onClick={() => {
            modal.open()
          }}
        >
          Connect
        </Button>
      )}
    </div>
  )
}
