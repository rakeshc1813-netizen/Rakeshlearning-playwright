import { test, expect } from '@playwright/test';
import data from "../Testdata/logindata.json"
test('verify valid cred', async ({ page }) => {
  await page.goto('https://petrouat.ymtsindia.in/');
  await page.getByRole('textbox', { name: 'Welcome Again' }).click();
  await page.getByRole('textbox', { name: 'Welcome Again' }).click();
  await page.getByRole('textbox', { name: 'Welcome Again' }).fill(data.Reference_code);
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Username').click();
  await page.getByRole('textbox', { name: 'Username' }).fill(data.username);
  await page.getByRole('textbox', { name: 'Username' }).press('Enter');
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(data.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'SIVA AGENCIES' })).toBeVisible();
  await page.close
});

test('verify with invalid password', async ({ page }) => {
  await page.goto('https://petrouat.ymtsindia.in/');
  await page.getByRole('textbox', { name: 'Welcome Again' }).click();
  await page.getByRole('textbox', { name: 'Welcome Again' }).fill('BZ2010126');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin12');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid Login Credentials')).toBeVisible();
});