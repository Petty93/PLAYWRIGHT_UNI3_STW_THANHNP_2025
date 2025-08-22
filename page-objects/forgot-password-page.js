export class ForgotPasswordPage {

  //Init selectors using constructor
  constructor(page) {
    this.page = page
    this.forgot_password_button = page.locator('a[href="/forgot-password"]')
    this.email_text = page.locator('//input[@id="exampleForm.ControlInput1"]')
    this.send_button = page.locator('//button[@type="button"]')
    this.invalid_alert = page.locator('//div[@class="uni-login--valid-username "]')
    this.send_again_button = page.locator('//div[contains(text(),"Tôi chưa nhận được email ?")]')
  }

  //Define login page methods
  //Go to login page
  async gotoForgotPasswordPage(){
    await this.page.goto('https://uni3-dev.onschool.edu.vn/')
    }

  //Click button "Quên mật khẩu"
  async sendButton(){
    await this.forgot_password_button.click()
    }

  //Enter email
  async forgot(email){
    await this.email_text.fill(email)
    await this.send_button.click()
  }

  //Click button "Tôi chưa nhận được email"
  async sendAgain(){
    await this.send_again_button.click()
  }
} 