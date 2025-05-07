import { test, expect } from '@playwright/test'

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle'})

  await expect(page.getByText('20')).toBeVisible()
  await expect(page.getByText('+5% em relação a ontem')).toBeVisible()
  
  await page.waitForTimeout(2000)
});

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle'})

  await expect(page.getByText('32')).toBeVisible()
  await expect(page.getByText('+12% em relação ao mês passado')).toBeVisible()
  
  await page.waitForTimeout(2000)
});

test('display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle'})

  await expect(page.getByText('5')).toBeVisible()
  await expect(page.getByText('+7% relação ao mês passado')).toBeVisible()
  
  await page.waitForTimeout(2000)
});

test('display month revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle'})

  await expect(page.getByText('R$ 200,00')).toBeVisible()
  await expect(page.getByText('+10% relação ao mês passado')).toBeVisible()
  
  await page.waitForTimeout(2000)
});