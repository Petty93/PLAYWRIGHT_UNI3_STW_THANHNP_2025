import { test, expect } from '../fixtures/login-fixture'
import { HomePage } from '../page-objects/home-page'

test.describe('Homepage', () => {
  test('Xem trang chủ', async ({ loggedInPage }) => {
    const homePage = new HomePage(loggedInPage)
    await expect(homePage.getLogo()).toBeVisible()
    await expect(homePage.getHomePageTab()).toHaveText('Trang chủ')
    await expect(homePage.getEventTab()).toHaveText('Sự kiện')
    await expect(homePage.getTranscriptTab()).toHaveText('Bảng điểm')

    await expect(homePage.getNotiIcon()).toBeVisible()
    await expect(homePage.getStudentNameProfile()).toHaveText('ThanhNP SV 1293')
    await expect(homePage.getSmallAvatar()).toBeVisible()

    await expect(homePage.getLargeAvatar()).toBeVisible()
    await expect(homePage.getWelcome()).toBeVisible()
    await expect(homePage.getWelcome()).toHaveText('Chào buổi chiều,')
    await expect(homePage.getStudenName()).toHaveText('ThanhNP SV 1293')

    await expect(homePage.getSuggestTitle()).toHaveText('Hoạt động đề xuất')
    await expect(homePage.getSuggestThumbnail()).toBeVisible()
    await expect(homePage.getSuggestSubject()).toHaveText('Học phần NPT16 Everything')
    await expect(homePage.getSuggestTask()).toHaveText('Video1.1.1.1')
    await expect(homePage.getSuggestIcon()).toBeVisible()
    await expect(homePage.getSuggestTaskType()).toBeVisible()
    await expect(homePage.getSuggestButton()).toHaveText('Xem chi tiết')

    await expect(homePage.getOngoingTitle()).toHaveText('Học phần đang tham gia')
    await expect(homePage.getOngoingSubject()).toHaveText('Học phần NPT16 Everything')
    await expect(homePage.getOngoingStartTime()).toHaveText('17/07/2025')
    await expect(homePage.getOngoingAttendanceCutoffTime()).toHaveText('31/10/2025')
    await expect(homePage.getOngoingExamTime()).toHaveText('--')
    await expect(homePage.getOngoingProgress()).toHaveText('0%')
    await expect(homePage.getOngoingButton()).toHaveText('Bắt đầu')

    await expect(homePage.getNotStartTitle()).toHaveText('Học phần sắp bắt đầu')
    await expect(homePage.getNotStartSubject()).toHaveText('Học phần NPT50 Unit + Live class + Submission')
    await expect(homePage.getNotStartStartTime()).toHaveText('01/10/2025')
    await expect(homePage.getNotStartAttendanceCutoffTime()).toHaveText('30/11/2025')
    await expect(homePage.getNotStartExamTime()).toHaveText('--')
    await expect(homePage.getNotStartProgress()).toHaveText('0%')
    await expect(homePage.getNotStartButton()).toHaveText('Xem thông tin')

    

    await homePage.gotoSCI()
    await homePage.navigateToSCIUrl('https://uni3-nau-stg.onschool.edu.vn/login?_to=L3NjaS1hdXRoP3JlZGlyZWN0X3VybD1odHRwcyUzQSUyRiUyRmRldnVuaTMtc2tpbGwub25zY2hvb2wuZWR1LnZuJTJGYXBpJTJGYXV0aCUyRmNhbGxiYWNrJnRhcmdldF9vcmlnaW49aHR0cHMlM0ElMkYlMkZ1bmkzLW5hdS1zdGcub25zY2hvb2wuZWR1LnZu');
    await expect(loggedInPage).toHaveURL('https://uni3-nau-stg.onschool.edu.vn/login?_to=L3NjaS1hdXRoP3JlZGlyZWN0X3VybD1odHRwcyUzQSUyRiUyRmRldnVuaTMtc2tpbGwub25zY2hvb2wuZWR1LnZuJTJGYXBpJTJGYXV0aCUyRmNhbGxiYWNrJnRhcmdldF9vcmlnaW49aHR0cHMlM0ElMkYlMkZ1bmkzLW5hdS1zdGcub25zY2hvb2wuZWR1LnZu')
  })
})