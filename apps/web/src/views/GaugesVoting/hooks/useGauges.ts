import { ChainId } from '@pancakeswap/chains'
import { Gauge } from '@pancakeswap/gauges'
import { useQuery } from '@tanstack/react-query'
import { useActiveChainId } from 'hooks/useActiveChainId'

type Response = {
  data: Gauge[]
  lastUpdated: number
}

export const useGauges = () => {
  const { chainId } = useActiveChainId()

  const { data, isPending } = useQuery({
    queryKey: ['gaugesVoting', chainId],

    queryFn: async (): Promise<Gauge[]> => {
      const response = await fetch(`/api/gauges/getAllGauges?testnet=${chainId === ChainId.BSC_TESTNET ? 1 : ''}`)
      if (response.ok) {
        const result = (await response.json()) as Response

        const gauges = result.data
            .filter((gauge) => gauge && Object.keys(gauge).length > 0)
            .filter((g) => !!g.hash)
          .map((gauge) => ({
            ...gauge,
            weight: BigInt(gauge.weight),
          }))

        return gauges
      }
      return [] as Gauge[]
    },
    enabled: Boolean(chainId),
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  return {
    data,
    isLoading: isPending || data?.length === 0,
  }
}
