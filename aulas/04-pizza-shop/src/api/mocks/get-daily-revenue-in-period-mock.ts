import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', async () => {
  return HttpResponse.json([
    { date: '01/01/2025', receipt: 2000 },
    { date: '02/01/2025', receipt: 800 },
    { date: '03/01/2025', receipt: 594 },
    { date: '04/01/2025', receipt: 834 },
    { date: '05/01/2025', receipt: 2321 },
    { date: '06/01/2025', receipt: 2322 },
    { date: '07/01/2025', receipt: 5513 },
  ])
})
