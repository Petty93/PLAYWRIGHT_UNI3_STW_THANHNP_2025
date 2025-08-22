export class LoginPage {

  //Init selectors using constructor
  constructor(page) {
    this.page = page
    this.username_textbox = page.getByPlaceholder('Tên đăng nhập')
    this.password_textbox = page.getByPlaceholder('Matkhau@1234')
    this.login_button = page.getByRole('button', { name: 'Đăng nhập' })
    this.invalid_alert = page.locator('.uni-login--valid-username')
  }

  //Define methods
  //Go to page
  async gotoLoginPage() {
    await this.page.goto('https://uni3-dev.onschool.edu.vn/')
  }

  //Login with username and password
  async login(username, password) {
    await this.username_textbox.fill(username)
    await this.password_textbox.fill(password)
    await this.login_button.click()
  }
}