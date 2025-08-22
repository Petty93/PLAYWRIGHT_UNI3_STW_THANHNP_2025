import { test, expect } from '@playwright/test'
import { ForgotPasswordPage } from '../page-objects/forgot-password-page';
const testdata1 = JSON.parse(JSON.stringify(require("../testdata.json")))

test.describe('Quên mật khẩu', () => {
  let ForgotPasswordPage1
  test.beforeEach(async ({ page }) => {
    ForgotPasswordPage1 = new ForgotPasswordPage(page)
    await ForgotPasswordPage1.gotoForgotPasswordPage()
    await ForgotPasswordPage1.sendButton()
    await expect(ForgotPasswordPage1.page).toHaveURL('https://uni3-dev.onschool.edu.vn/forgot-password')
    await expect(ForgotPasswordPage1.page.locator('//input[@id="exampleForm.ControlInput1"]')).toBeVisible()
  })

  test('Quên mật khẩu với email đúng', async ({ page }) => {
    await ForgotPasswordPage1.forgot(testdata1.email)
    await expect(ForgotPasswordPage1.page.locator('//div[contains(text(),"Đã gửi email cho bạn")]')).toBeVisible()
    await ForgotPasswordPage1.sendAgain()
    await expect(ForgotPasswordPage1.page).toHaveURL('https://uni3-dev.onschool.edu.vn/forgot-password')
  })

  test('Quên mật khẩu với email không tồn tại trong hệ thống', async ({ page }) => {
    await ForgotPasswordPage1.forgot(testdata1.wrong_email)
    await expect(ForgotPasswordPage1.invalid_alert).toHaveText('Email này chưa đăng ký. Vui lòng kiểm tra lại.')
  })

  test('Quên mật khẩu với email sai định dạng', async ({ page }) => {
    await ForgotPasswordPage1.forgot(testdata1.wrong_format_email)
    await expect(ForgotPasswordPage1.invalid_alert).toHaveText('Email sai định dạng. Vui lòng kiểm tra lại')
  })
})