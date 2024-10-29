import { TradeType } from '@pancakeswap/sdk'
import { SmartRouterTrade } from '@pancakeswap/smart-router'

import { RoutePlanner } from '../../utils/RoutePlanner'
import { Command, RouterTradeType } from '../Command'
import { PancakeSwapOptions } from '../types'
import { SwapCommandBuilder } from './SwapCommandBuilder'
import { parseSwapTradeContext } from './parseSwapTradeContext'

// Wrapper for pancakeswap router-sdk trade entity to encode swaps for Universal Router
export class PancakeSwapTrade implements Command {
  readonly tradeType: RouterTradeType = RouterTradeType.PancakeSwapTrade

  readonly type: TradeType

  constructor(public trade: Omit<SmartRouterTrade<TradeType>, 'gasEstimate'>, public options: PancakeSwapOptions) {
    this.type = this.trade.tradeType
    if (options.fee && options.flatFee) {
      throw new Error('Cannot specify both fee and flatFee')
    }
  }

  encode(planner: RoutePlanner): void {
    const context = parseSwapTradeContext(this.trade, this.options)
    for (const route of context.routes) {
      for (const section of route.sections) {
        const swapBuilder = new SwapCommandBuilder(planner, context, section)
        swapBuilder.build()
      }
    }
  }
}
