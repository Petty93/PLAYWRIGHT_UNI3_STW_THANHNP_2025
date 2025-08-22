import { test, expect } from '../fixtures/login-fixture'
import { EventPage } from '../page-objects/event-page'

test.describe('Kiểm tra sự kiện', () => {
    let eventPage
    test.beforeEach(async ({ loggedInPage }) => {
    eventPage = new EventPage(loggedInPage)
    await eventPage.gotoEventPage()
    })

test('Event by month', async ({ loggedInPage }) => {
    await eventPage.viewByMonth()
    await expect(eventPage.date1_event1_card).toBeVisible()
    await expect(eventPage.date1_event1_subject).toHaveText('Học phần NPT16 Everything')
    await expect(eventPage.date1_event1_name).toHaveText('Kiểm tra (Nộp file)')
    await expect(eventPage.date1_event1_time).toHaveText('12:00 (Hạn cuối)')

    await eventPage.selectEventByMonth()
    await eventPage.navigateToUrlWithEventByMonth('https://uni3-dev.onschool.edu.vn/347/npt3103-khoa-hoc-npt31032025/kttl3-549/kttl3-1067/kttl3-67e9fae2');
    await expect(loggedInPage).toHaveURL('https://uni3-dev.onschool.edu.vn/347/npt3103-khoa-hoc-npt31032025/kttl3-549/kttl3-1067/kttl3-67e9fae2')
})

test('Event by subject', async ({ loggedInPage }) => {
    await eventPage.viewBySubject2()
    await expect(eventPage.card_subject2_cover).toBeVisible()
    await expect(eventPage.card_subject2_name).toHaveText('Học phần NPT50 Unit + Live class + Submission')
    await expect(eventPage.card_subject2_start_time).toHaveText('Ngày bắt đầu: 01/10/2025')

    await eventPage.viewBySubject1()
    await expect(eventPage.card_subject1_cover).toBeVisible()
    await expect(eventPage.card_subject1_name).toHaveText('Học phần NPT16 Everything')
    await expect(eventPage.card_subject1_start_time).toHaveText('Ngày bắt đầu: 17/07/2025')

    await expect(eventPage.frame_subject1_start_icon).toBeVisible()
    await expect(eventPage.frame_subject1_start_title).toHaveText('Bắt đầu học phần')
    await expect(eventPage.frame_subject1_start_time).toHaveText('00:00 ngày 17/07/2025')

    await expect(eventPage.frame_subject1_liveclass_icon).toBeVisible()
    await expect(eventPage.frame_subject1_liveclass_title).toHaveText('Live class 1')
    await expect(eventPage.frame_subject1_liveclass_time).toHaveText('14:20 - 14:22 ngày 13/08/2025')

    await expect(eventPage.frame_subject1_kttl2_icon).toBeVisible()
    await expect(eventPage.frame_subject1_kttl2_title).toHaveText('KTTL2 Học viên nộp đủ số lượng')
    await expect(eventPage.frame_subject1_kttl2_time).toHaveText('12:00 ngày 16/09/2025 (Hạn cuối)')

    await expect(eventPage.frame_subject1_attendance_cutoff_icon).toBeVisible()
    await expect(eventPage.frame_subject1_attendance_cutoff_title).toHaveText('Chốt điểm chuyên cần')
    await expect(eventPage.frame_subject1_attendance_cutoff_time).toHaveText('12:00 ngày 31/10/2025')

    await eventPage.selectEventBySubject1()
    await eventPage.navigateToUrlWithEventBySubject('https://uni3-dev.onschool.edu.vn/347/npt3103-khoa-hoc-npt31032025/live-class-1-546/live-class-1-1065/live-class-1-67e9faaa');
    await expect(loggedInPage).toHaveURL('https://uni3-dev.onschool.edu.vn/347/npt3103-khoa-hoc-npt31032025/live-class-1-546/live-class-1-1065/live-class-1-67e9faaa')
})
})