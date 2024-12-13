import type { TonFunctionDef } from 'ton/ton.types'

export const getWalletAddress = {
  method: 'getWalletAddress',
  inputs: [
    {
      name: 'owner',
      type: 'address',
    },
  ],
  outputs: [
    {
      type: 'address',
    },
  ],
} as const satisfies TonFunctionDef<never>

export const getBalance = {
  method: 'getBalance',
  inputs: [],
  outputs: [
    {
      type: 'int',
    },
  ],
  defaultValue: null,
} as const satisfies TonFunctionDef<null>
