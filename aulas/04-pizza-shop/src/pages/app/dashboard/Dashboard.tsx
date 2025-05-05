import { DayOrdersAmountCard } from './DayOrdersAmountCard'
import { MonthCanceledOrdersAmountCard } from './MonthCanceledOrdersAmountCard'
import { MonthOrdersAmountCard } from './MonthOrdersAmountCard'
import { MonthRevenueCard } from './MonthRevenueCard'
import { PopularProductsChart } from './PopularProductsChart'
import { RevenueChart } from './RevenueChart'

export function Dashboard() {
  return (
    <>
      <title>Dashboard | Pizza Shop</title>
      <meta name="author" content="Rafael Mattei" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
