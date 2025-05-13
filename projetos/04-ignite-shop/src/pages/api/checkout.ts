import { NextApiRequest, NextApiResponse } from 'next'

import { Product } from '@/contexts/BagContextProvider'
import { stripe } from '@/lib/stripe'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const products = req.body.products

  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed.',
    })
  }

  if (!products) {
    return res.status(400).json({
      error: 'Products not found.',
    })
  }

  const line_items = products.map((product: Product) => ({
    price: product.defaultPriceId,
    quantity: 1,
  }))

  const successURL = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelURL = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successURL,
    cancel_url: cancelURL,
    mode: 'payment',
    line_items,
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
