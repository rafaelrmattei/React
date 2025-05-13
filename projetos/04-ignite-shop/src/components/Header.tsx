import { Handbag } from '@phosphor-icons/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContextSelector } from 'use-context-selector'

import { BagContext } from '@/contexts/BagContext'
import { Bag, BagTotal, HeaderContainer } from '@/styles/pages/header'

import SideBag from './SideBag'

export default function Header() {
  const { pathname } = useRouter()
  const isSuccessPage = pathname === '/success'

  const { totalProducts, toggleBagVisibility } = useContextSelector(BagContext, (context) => {
    return {
      totalProducts: context.totalProducts,
      toggleBagVisibility: context.toggleBagVisibility,
    }
  })

  const hasNotProducts = totalProducts > 0

  return (
    <HeaderContainer success={isSuccessPage}>
      <Image src="/logo.svg" width={130} height={52} alt="" />

      {!isSuccessPage && (
        <Bag onClick={toggleBagVisibility} disabled={!hasNotProducts}>
          <Handbag size={24} weight="bold" />
          <BagTotal>{totalProducts > 0 ? totalProducts : ''}</BagTotal>
        </Bag>
      )}

      {!isSuccessPage && <SideBag />}
    </HeaderContainer>
  )
}
