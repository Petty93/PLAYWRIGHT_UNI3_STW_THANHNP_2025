export class ProfilePage {

    //Init selectors using constructor
    constructor(page) {
        this.page = page
        this.avatar_icon = page.locator('//div[@class="uni-header__useravatar"]//div//img[@alt="Avatar"]')
        this.profile_button = page.locator('//div[@class="uni-header__useravatar"]//div[1]//div[1]')

        this.avatar = page.locator('//div[@class="uni-profile__useravatar-cover"]//img[@alt="Avatar"]')
        this.name = page.locator('//div[@class="uni-profile__username"]')
        this.username = page.locator('//div[normalize-space()="thanhnp.sv92"]')
        this.email = page.locator('//div[normalize-space()="thanhnp+thanhnp.sv1262@onschool.edu.vn"]')
        this.student_code = page.locator('//div[normalize-space()="//div[normalize-space()="MSV1262"]')
        this.admission_date = page.locator('//div[@class="uni-profile__student-info"]//div[4]//div[1]//div[2]')

        this.class = page.locator('div[class="uni-profile__class-info"] div[class="col-md-4 col-6"] div:nth-child(2)')
        this.major = page.locator('div[class="col-md-8 col-6"] div:nth-child(2)')
        this.admin = page.locator('//div[normalize-space()="ThanhNP QLHT 33"]')
        this.admin_email = page.locator('//div[normalize-space()="thanhnp+thanhnp.qlht33@onschool.edu.vn"]')
        this.admin_phone = page.locator('//div[normalize-space()="33333333"]')

        this.upload_avatar_button = page.locator('//i[@class="bi bi-upload"]')
        this.fileInput = page.locator('.inputfile')
        this.success_upload = page.locator('.toast-body >> text=Đổi hình đại diện thành công')
        this.oversize_upload = page.locator('.toast-body >> text=Ảnh quá dung lượng quy định tối đa 5MB.')
        this.format_upload = page.locator('.toast-body >> text=Ảnh sai định dạng cho phép .png, .jpg, .jpeg.')

        this.change_password_button = page.locator('(//button[contains(text(),"Đổi mật khẩu")])[1]')
        this.new_password = page.locator('//div[@class="modal-content"]//div[1]//input[1]')
        this.enter_new_password = page.locator('body > div:nth-child(14) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > form:nth-child(1) > div:nth-child(2) > input:nth-child(2)')
        this.cancel_button = page.locator('//button[contains(text(),"Hủy")]')
        this.confirm_button = page.locator('//button[contains(text(),"Xác nhận")]')
        this.failure_message = page.locator('//div[@class="uni-modal-change-pw--valid-pw "]')
        this.success_popup = page.locator('//div[@class="uni-modal-change-pw-success__title"]')
    }
    //Define methods
    //Go to page
    async gotoProfilePage() {
        await this.avatar_icon.click()
        await this.profile_button.click()
    }
    
    //Check value
    getName() {
        return this.page.locator('//div[@class="uni-profile__username"]')
    }
    getUsername() {
        return this.page.locator('//div[normalize-space()="thanhnp.sv1262"]')
    }
    getEmail() {
        return this.page.locator('//div[normalize-space()="thanhnp+thanhnp.sv1262@onschool.edu.vn"]')
    }
    getStudentCode() {
        return this.page.locator('//div[normalize-space()="//div[normalize-space()="MSV1262"]')
    }
    getAdmissionDate() {
        return this.page.locator('//div[@class="uni-profile__student-info"]//div[4]//div[1]//div[2]')
    }
    getClass() {
        return this.page.locator('div[class="uni-profile__class-info"] div[class="col-md-4 col-6"] div:nth-child(2)')
    }
    getMajor() {
        return this.page.locator('div[class="col-md-8 col-6"] div:nth-child(2)')
    }
    getAdmin() {
        return this.page.locator('//div[normalize-space()="ThanhNP QLHT 34"]')
    }
    getAdminEmail() {
        return this.page.locator('//div[normalize-space()="thanhnp+thanhnp.qlht34@onschool.edu.vn"]')
    }
    getAdminPhone() {
        return this.page.locator('//div[normalize-space()="34343434"]')
    }

    //Update avatar
    async updateAvatar(filePath) {
        await this.upload_avatar_button.click()
        await this.fileInput.setInputFiles(filePath);
    }

    //Change password
    async changePassword(newPassword, enterNewPassword) {
        await this.change_password_button.click()
        await this.new_password.fill(newPassword)
        await this.enter_new_password.fill(enterNewPassword)
        await this.confirm_button.click()
    }
}
