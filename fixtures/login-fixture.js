import { test as base } from '@playwright/test'
import { LoginPage } from '../page-objects/login-page'
const testdata1 = JSON.parse(JSON.stringify(require("../testdata.json")))


export const test = base.extend({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page)) // inject LoginPage vào test
    },

    // Trạng thái đã đăng nhập (sử dụng cho các test khác)
    loggedInPage: async ({ page }, use) => {
        const Login1 = new LoginPage(page) // tạo instance tạm
        await Login1.gotoLoginPage()
        await Login1.login(testdata1.username, testdata1.password)
        await page.waitForURL('https://uni3-dev.onschool.edu.vn/') // Sau login thì redirect đến trang chủ
        await use(page) // trả về page đã login
    }
})

export const expect = test.expect