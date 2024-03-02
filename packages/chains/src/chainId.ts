export enum ChainId {
  ETHEREUM = 1,
  GOERLI = 5,
  BSC = 56,
  BSC_TESTNET = 97,
  ZKSYNC_TESTNET = 280,
  ZKSYNC = 324,
  OPBNB_TESTNET = 5611,
  OPBNB = 204,
  POLYGON_ZKEVM = 1101,
  POLYGON_ZKEVM_TESTNET = 1442,
  ARBITRUM_ONE = 42161,
  ARBITRUM_GOERLI = 421613,
  ARBITRUM_SEPOLIA = 421614,
  SCROLL_SEPOLIA = 534351,
  LINEA = 59144,
  LINEA_TESTNET = 59140,
  BASE = 8453,
  BASE_TESTNET = 84531,
  BASE_SEPOLIA = 84532,
  SEPOLIA = 11155111,
}

export const mainnetChainIds = [
  ChainId.ETHEREUM,
  ChainId.BSC,
  ChainId.ZKSYNC,
  ChainId.OPBNB,
  ChainId.POLYGON_ZKEVM,
  ChainId.ARBITRUM_ONE,
  ChainId.LINEA,
  ChainId.BASE,
]

export const testnetChainIds = [
  ChainId.GOERLI,
  ChainId.BSC_TESTNET,
  ChainId.ZKSYNC_TESTNET,
  ChainId.OPBNB_TESTNET,
  ChainId.POLYGON_ZKEVM_TESTNET,
  ChainId.ARBITRUM_GOERLI,
  ChainId.SCROLL_SEPOLIA,
  ChainId.LINEA_TESTNET,
  ChainId.BASE_TESTNET,
  ChainId.SEPOLIA,
  ChainId.ARBITRUM_SEPOLIA,
  ChainId.BASE_SEPOLIA,
]
