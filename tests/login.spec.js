import { test, expect } from '../fixtures/login-fixture'
const testdata1 = JSON.parse(JSON.stringify(require("../testdata.json")))

test.describe('Kiểm tra đăng nhập', () => {
  let loginPageObject
  test.beforeEach(async ({ loginPage }) => {
    loginPageObject = loginPage
    await loginPageObject.gotoLoginPage()
  })

  test('Đăng nhập thành công', async () => {
    await loginPageObject.login(testdata1.username, testdata1.password)
    await expect(loginPageObject.page).toHaveURL('https://uni3-dev.onschool.edu.vn/')
  })
  test('Đăng nhập sai tài khoản', async () => {
    await loginPageObject.login(testdata1.wrong_username, testdata1.password)
    await expect(loginPageObject.invalid_alert).toHaveText('Sai tài khoản hoặc mật khẩu. Vui lòng kiểm tra lại')
  })

  test('Đăng nhập sai mật khẩu', async () => {
    await loginPageObject.login(testdata1.username, testdata1.wrong_password)
    await expect(loginPageObject.invalid_alert).toHaveText('Sai tài khoản hoặc mật khẩu. Vui lòng kiểm tra lại')
  })
})