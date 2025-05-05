import { QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router'

import { queryClient } from '@/lib/react-query'

import { SignIn } from './SignIn'

describe('SignIn', () => {
  it('should set default email input value if email is presented on search params', () => {
    const wrapper = render(<SignIn />, {
      wrapper: ({ children }) => {
        return (
          <MemoryRouter initialEntries={['/sign-in?email=johndoe@exemple.com']}>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </MemoryRouter>
        )
      },
    })

    const emailInput = wrapper.getByLabelText('Seu e-mail') as HTMLInputElement

    expect(emailInput.value).toEqual('johndoe@exemple.com')
  })
})
