import { useAtomValue } from 'jotai'
import { addressAtom } from 'ton/atom/addressAtom'
import { isConnectedAtom } from 'ton/atom/isConnectedAtom'
import { balanceOfAtom } from 'ton/logic/balanceOfAtom'
import { balanceOfNativeAtom } from 'ton/logic/balanceOfNativeAtom'
import { TonContractNames } from 'ton/ton.enums'

export default () => {
  const isConnected = useAtomValue(isConnectedAtom)
  const address = useAtomValue(addressAtom)
  const balanceOfUSDC = useAtomValue(balanceOfAtom(TonContractNames.USDC))
  const tonBalance = useAtomValue(balanceOfNativeAtom)
  return (
    <div
      style={{
        padding: '20px',
      }}
    >
      <p>Connected: {isConnected ? 'connected' : 'disconnected'}</p>
      <p>Address: {address || '-'}</p>
      <p>Ton Balance: {`${tonBalance}` || '-'}</p>
      <p>USDC Balance: {`${balanceOfUSDC}` || '-'}</p>
    </div>
  )
}
