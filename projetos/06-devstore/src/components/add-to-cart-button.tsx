'use client'

import { useCart } from '@/hooks/use-cart'

interface AddToCartButtonProps {
  productId: number
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  function handleClickButton() {
    addToCart(productId)
  }

  return (
    <button
      type="button"
      onClick={handleClickButton}
      className="mt-8 flex h-12 cursor-pointer items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}
