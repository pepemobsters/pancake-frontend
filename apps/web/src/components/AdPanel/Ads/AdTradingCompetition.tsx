import { useTranslation } from '@pancakeswap/localization'
import { Link } from '@pancakeswap/uikit'
import { tradingCompetitionConfig } from 'components/PhishingWarningBanner/TradingCompetition'
import { BodyText } from '../BodyText'
import { AdButton } from '../Button'
import { AdCard } from '../Card'

import { AdPlayerProps } from '../types'
import { getImageUrl } from '../utils'

export const AdTradingCompetition = (props: AdPlayerProps & { token: 'aitech' | 'apt' | 'vinu' | 'bfg' }) => {
  const { t } = useTranslation()
  const { token, ...rest } = props

  return (
    <AdCard imageUrl={getImageUrl(tradingCompetitionConfig[token].imgUrl)} {...rest}>
      <BodyText mb="0">
        {t('Swap %token% to win a share of', { token: token.toUpperCase() })} ${tradingCompetitionConfig[token].reward}
        <Link fontSize="inherit" href={tradingCompetitionConfig[token].swapUrl} color="secondary" bold>
          {t('Swap Now')}
        </Link>
      </BodyText>
      <AdButton mt="16px" href={tradingCompetitionConfig[token].learnMoreUrl} externalIcon isExternalLink>
        {t('Learn More')}
      </AdButton>
    </AdCard>
  )
}

export const AdTradingCompetitionAiTech = (props: AdPlayerProps) => {
  return <AdTradingCompetition token="aitech" {...props} />
}

export const AdTradingCompetitionApt = (props: AdPlayerProps) => {
  return <AdTradingCompetition token="apt" {...props} />
}
