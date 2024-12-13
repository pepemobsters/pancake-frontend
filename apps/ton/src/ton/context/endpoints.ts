import { TonNetworks } from 'ton/ton.enums'

export const TonEndPoints = {
  [TonNetworks.Mainnet]: 'https://main.ton.dev',
  [TonNetworks.Testnet]: 'https://testnet.toncenter.com/api/v2/jsonRPC',
}