import { test, expect } from '../fixtures/login-fixture'
import { TranscriptPage } from '../page-objects/transcript-page'
const testdata1 = JSON.parse(JSON.stringify(require("../testdata.json")))

test.describe('Kiểm tra bảng điểm', () => {
    let transcriptPage
    test.beforeEach(async ({ loggedInPage }) => {
    transcriptPage = new TranscriptPage(loggedInPage)
    await transcriptPage.gotoTranscriptPage()
    })

test('Tìm kiếm theo subject đúng', async () => {
    await transcriptPage.searchBySubject(testdata1.subject)
    await expect(transcriptPage.subject_card).toBeVisible()
    await expect(transcriptPage.subject_icon).toBeVisible()
    await expect(transcriptPage.subject_name).toHaveText('Học phần NPT16 Everything')
    await expect(transcriptPage.subject_badge).toHaveText('Chưa xác định')
    await expect(transcriptPage.subject_time).toHaveText('17/07/2025 - 31/12/2025')
})

test('Tìm kiếm theo subject sai', async () => {
    await transcriptPage.searchBySubject(testdata1.wrong_subject)
    await expect(transcriptPage.no_data).toBeVisible()
})

test('Tìm kiếm theo thời gian bắt đầu đúng', async () => {
    await transcriptPage.searchByTime()
    await expect(transcriptPage.subject_card).toBeVisible()
    await expect(transcriptPage.subject_icon).toBeVisible()
    await expect(transcriptPage.subject_name).toHaveText('Học phần NPT16 Everything')
    await expect(transcriptPage.subject_badge).toHaveText('Chưa xác định')
    await expect(transcriptPage.subject_time).toHaveText('17/07/2025 - 31/12/2025')
})

test('Tìm kiếm theo thời gian bắt đầu sai', async () => {
    await transcriptPage.searchByTime2()
    await expect(transcriptPage.no_data).toBeVisible()
})

test('Tìm kiếm theo trạng thái Tất cả', async () => {
    await transcriptPage.searchByBadgeAll()
    await expect(transcriptPage.subject_card).toBeVisible()
    await expect(transcriptPage.subject_icon).toBeVisible()
    await expect(transcriptPage.subject_name).toHaveText('Học phần NPT16 Everything')
    await expect(transcriptPage.subject_badge).toHaveText('Chưa xác định')
    await expect(transcriptPage.subject_time).toHaveText('17/07/2025 - 31/12/2025')
})

test('Tìm kiếm theo trạng thái Chưa xác định', async () => {
    await transcriptPage.searchByBadgeUndefined()
    await expect(transcriptPage.subject_card).toBeVisible()
    await expect(transcriptPage.subject_icon).toBeVisible()
    await expect(transcriptPage.subject_name).toHaveText('Học phần NPT16 Everything')
    await expect(transcriptPage.subject_badge).toHaveText('Chưa xác định')
    await expect(transcriptPage.subject_time).toHaveText('17/07/2025 - 31/12/2025')
})

test('Tìm kiếm theo trạng thái Đủ điều kiện thi', async () => {
    await transcriptPage.searchByBadgePass()
    await expect(transcriptPage.no_data).toBeVisible()
})

test('Tìm kiếm theo trạng thái Cấm thi', async () => {
    await transcriptPage.searchByBadgeFail()
    await expect(transcriptPage.no_data).toBeVisible()
})

test('Tìm kiếm theo subject đúng và thời gian hợp lệ', async () => {
    await transcriptPage.searchBySubjectAndTime(testdata1.subject)
    await expect(transcriptPage.subject_card).toBeVisible()
    await expect(transcriptPage.subject_icon).toBeVisible()
    await expect(transcriptPage.subject_name).toHaveText('Học phần NPT16 Everything')
    await expect(transcriptPage.subject_badge).toHaveText('Chưa xác định')
    await expect(transcriptPage.subject_time).toHaveText('17/07/2025 - 31/12/2025')
})

test('Tìm kiếm theo subject đúng và trạng thái hợp lệ', async () => {
    await transcriptPage.searchBySubjectAndTime(testdata1.subject, testdata1.option_all)
    await expect(transcriptPage.subject_card).toBeVisible()
    await expect(transcriptPage.subject_icon).toBeVisible()
    await expect(transcriptPage.subject_name).toHaveText('Học phần NPT16 Everything')
    await expect(transcriptPage.subject_badge).toHaveText('Chưa xác định')
    await expect(transcriptPage.subject_time).toHaveText('17/07/2025 - 31/12/2025')
})

test('Tìm kiếm theo thời gian và trạng thái hợp lệ', async () => {
    await transcriptPage.searchByTimeAndBadge(testdata1.option_all)
    await expect(transcriptPage.subject_card).toBeVisible()
    await expect(transcriptPage.subject_icon).toBeVisible()
    await expect(transcriptPage.subject_name).toHaveText('Học phần NPT16 Everything')
    await expect(transcriptPage.subject_badge).toHaveText('Chưa xác định')
    await expect(transcriptPage.subject_time).toHaveText('17/07/2025 - 31/12/2025')
})

test('Tìm kiếm theo subject đúng, thời gian và trạng thái hợp lệ', async () => {
    await transcriptPage.searchBySubjectAndTimeAndBadge(testdata1.subject, testdata1.option_all)
    await expect(transcriptPage.subject_card).toBeVisible()
    await expect(transcriptPage.subject_icon).toBeVisible()
    await expect(transcriptPage.subject_name).toHaveText('Học phần NPT16 Everything')
    await expect(transcriptPage.subject_badge).toHaveText('Chưa xác định')
    await expect(transcriptPage.subject_time).toHaveText('17/07/2025 - 31/12/2025')
})

test('Check danh sách bảng điểm', async () => {
    await transcriptPage.getSubjectIcon()
    await expect(transcriptPage.getSubjectIcon()).toBeVisible()
    await expect(transcriptPage.getSubjectName()).toHaveText('Học phần NPT16 Everything')
    await expect(transcriptPage.getSubjectBadge()).toHaveText('Chưa xác định')
    await expect(transcriptPage.getSubjectTime()).toHaveText('17/07/2025 - 31/12/2025')
})

test('Xem bảng điểm chi tiết', async ({ loggedInPage }) => {
    await transcriptPage.viewDetail()
    await transcriptPage.navigateToScoreDetail('https://uni3-dev.onschool.edu.vn/transcript/score-detail?periodId=347');
    await expect(loggedInPage).toHaveURL('https://uni3-dev.onschool.edu.vn/transcript/score-detail?periodId=347')
})
})