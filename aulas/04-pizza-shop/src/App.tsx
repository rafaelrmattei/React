import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/ThemeProvider'
import { queryClient } from './lib/react-query'
import { router } from './routes'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="pizzashop-theme">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      <Toaster richColors />
    </ThemeProvider>
  )
}
