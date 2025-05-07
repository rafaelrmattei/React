import { test, expect } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle'})

  await page.getByRole('button', { name: 'Baratier' }).click()

  await page.getByText('Perfil da loja').click()

  await page.getByRole('textbox', { name: 'Nome' }).fill('Rocket Pizza')
  await page.getByRole('textbox', { name: 'Descrição' }).fill('Another Description')

  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Perfil atualizado com sucesso!')

  await expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  await page.waitForTimeout(2000)

  await expect(page.getByRole('button', { name: 'Rocket Pizza' })).toBeVisible()

  await page.waitForTimeout(2000)
});