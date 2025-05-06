import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', async ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'Abelhinho Chiroleino',
      email: 'belino.c@gmail.com',
      phone: '41098237590',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        quantity: 1,
        product: { name: 'Pizza Pepperoni' },
      },
      {
        id: 'order-item-2',
        priceInCents: 2000,
        quantity: 2,
        product: { name: 'Pizza Mussarela' },
      },
    ],
    totalInCents: 5000,
  })
})
