import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthCanceledOrdersAmount } from '@/api/get-month-canceled-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricCardSkeleton } from './MetricCardSkeleton'

export function MonthCanceledOrdersAmountCard() {
  const { data: MonthCanceledOrdersAmount } = useQuery({
    queryFn: getMonthCanceledOrdersAmount,
    queryKey: ['metrics', 'month-canceled-orders-amount'],
  })

  return (
    <Card className="gap-0">
      <CardHeader className="flex items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        {MonthCanceledOrdersAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {(MonthCanceledOrdersAmount.amount / 100).toLocaleString('pt-BR')}
            </span>
            <p className="text-muted-foreground text-xs">
              {MonthCanceledOrdersAmount.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{MonthCanceledOrdersAmount.diffFromLastMonth}%
                  </span>{' '}
                  relação ao mês passado
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    -{MonthCanceledOrdersAmount.diffFromLastMonth}%
                  </span>{' '}
                  relação ao mês passado
                </>
              )}
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
