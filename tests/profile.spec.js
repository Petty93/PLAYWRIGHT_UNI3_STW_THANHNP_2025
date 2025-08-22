import { test, expect } from '../fixtures/login-fixture'
import { ProfilePage } from '../page-objects/profile-page'
const path = require('path')
const testdata1 = JSON.parse(JSON.stringify(require("../testdata.json")))

test.describe('Kiểm tra Profile', () => {
  let profilePage
  test.beforeEach(async ({ loggedInPage }) => {
    profilePage = new ProfilePage(loggedInPage)
    await profilePage.gotoProfilePage()
  })

  test('Xem thông tin cá nhân', async () => {
    await expect(profilePage.getName()).toHaveText('ThanhNP SV 1262')
    await expect(profilePage.getUsername()).toHaveText('thanhnp.sv1262')
    await expect(profilePage.getEmail()).toHaveText('thanhnp+thanhnp.sv1262@onschool.edu.vn')
    await expect(profilePage.getClass()).toHaveText('Lớp số 5')
    await expect(profilePage.getMajor()).toHaveText('CNTT - Công nghệ thông tin')
    await expect(profilePage.getAdmin()).toHaveText('ThanhNP QLHT 34')
    await expect(profilePage.getAdminEmail()).toHaveText('thanhnp+thanhnp.qlht34@onschool.edu.vn')
    await expect(profilePage.getAdminPhone()).toHaveText('34343434')
  })

  test('Cập nhật avatar thành công', async () => {
    const filePath = path.resolve(__dirname, '../upload_files/picture1.jpg')
    await profilePage.updateAvatar(filePath)
    await expect(profilePage.success_upload).toBeVisible({ timeout: 10000 })
    await expect(profilePage.success_upload).toHaveText("Đổi hình đại diện thành công")
    await expect(profilePage.success_upload).toBeHidden({ timeout: 10000 })
  })

  test('Cập nhật avatar quá 5MB', async () => {
    const filePath = path.resolve(__dirname, '../upload_files/picture2.jpg')
    await profilePage.updateAvatar(filePath)
    await expect(profilePage.oversize_upload).toBeVisible({ timeout: 10000 })
    await expect(profilePage.oversize_upload).toHaveText('Ảnh quá dung lượng quy định tối đa 5MB.')
    await expect(profilePage.oversize_upload).toBeHidden({ timeout: 10000 })
  })

  test('Cập nhật avatar sai định dạng', async () => {
    const filePath = path.resolve(__dirname, '../upload_files/picture3.pdf');
    await profilePage.updateAvatar(filePath)
    await expect(profilePage.format_upload).toBeVisible({ timeout: 10000 })
    await expect(profilePage.format_upload).toHaveText('Ảnh sai định dạng cho phép .png, .jpg, .jpeg.')
    await expect(profilePage.format_upload).toBeHidden({ timeout: 10000 })
  })

  test('Đổi mật khẩu không khớp', async () => {
    await profilePage.changePassword(testdata1.newPassword, testdata1.newPassword2)
    await expect(profilePage.failure_message).toHaveText('Mật khẩu không trùng khớp. Vui lòng kiểm tra lại')
  })

  test('Đổi mật khẩu không có ký tự viết hoa', async () => {
    await profilePage.changePassword(testdata1.password_without_uppercase, testdata1.password_without_uppercase)
    await expect(profilePage.failure_message).toHaveText('Mật khẩu chưa đúng quy định. Hãy thử một mật khẩu mới')
  })

  test('Đổi mật khẩu không có ký tự viết thường', async () => {
    await profilePage.changePassword(testdata1.password_without_lowercase, testdata1.password_without_lowercase)
    await expect(profilePage.failure_message).toHaveText('Mật khẩu chưa đúng quy định. Hãy thử một mật khẩu mới')
  })

  test('Đổi mật khẩu không có ký tự số', async () => {
    await profilePage.changePassword(testdata1.password_without_number, testdata1.password_without_number)
    await expect(profilePage.failure_message).toHaveText('Mật khẩu chưa đúng quy định. Hãy thử một mật khẩu mới')
  })

  test('Đổi mật khẩu không có ký tự đặc biệt', async () => {
    await profilePage.changePassword(testdata1.password_without_special, testdata1.password_without_special)
    await expect(profilePage.failure_message).toHaveText('Mật khẩu chưa đúng quy định. Hãy thử một mật khẩu mới')
  })

  test('Đổi mật khẩu không đủ số lượng ký tự', async () => {
    await profilePage.changePassword(testdata1.password_without_count, testdata1.password_without_count)
    await expect(profilePage.failure_message).toHaveText('Mật khẩu chưa đúng quy định. Hãy thử một mật khẩu mới')
  })

  test('Đổi mật khẩu thành công', async () => {
    await profilePage.changePassword(testdata1.newPassword, testdata1.newPassword)
    await expect(profilePage.success_popup).toHaveText('Tạo mật khẩu mới thành công')
  })
})