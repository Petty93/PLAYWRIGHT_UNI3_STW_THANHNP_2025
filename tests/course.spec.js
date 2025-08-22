import { test, expect } from '../fixtures/login-fixture'
import { CoursePage } from '../page-objects/course-page'

test.describe('Truy cập học phần đang diễn ra', () => {
    let coursePage
    test.beforeEach(async ({ loggedInPage }) => {
        coursePage = new CoursePage(loggedInPage)
        await coursePage.gotoCoursePage()
    })

    test('Kiểm tra menu sidebar', async () => {
        await expect(coursePage.getOngoingCourseMenuSubjectName()).toHaveText('Học phần NPT16 Everything')
        await expect(coursePage.getOngoingCourseMenuNumberOfUnits()).toHaveText('3 Bài')
        await expect(coursePage.getOngoingCourseDetailSubjectName()).toHaveText('Học phần NPT16 Everything')
        await expect(coursePage.getOngoingCourseDetailIconSCI()).toBeVisible()
        await expect(coursePage.getOngoingCourseSCIBanner()).toBeVisible()
        await expect(coursePage.getOngoingCourseSCIScore()).toHaveText('0')
    })

    test('Kiểm tra tab Giới thiệu tổng quan', async () => {
        await coursePage.clickGTTQTab()
        await expect(coursePage.getOngoingGTTQDescription()).toBeVisible()
        await expect(coursePage.getOngoingGTTQStartTime()).toHaveText('17/07/2025')
        await expect(coursePage.getOngoingGTTQAttandanceCutoff()).toHaveText('12:00 ngày 31/10/2025')
        await expect(coursePage.getOngoingGTTQEndTime()).toHaveText('31/12/2025')
        await expect(coursePage.getOngoingGTTQAvatarQLHT()).toBeVisible()
        await expect(coursePage.getOngoingGTTQNameQLHT()).toHaveText('ThanhNP QLHT 34')
        await expect(coursePage.getOngoingGTTQEmailQLHT()).toHaveText('thanhnp+thanhnp.qlht34@onschool.edu.vn')
        await expect(coursePage.getOngoingGTTQPhoneQLHT()).toHaveText('34343434')
        await expect(coursePage.getOngoingGTTQAvatarGV()).toBeVisible()
        await expect(coursePage.getOngoingGTTQNameGV()).toHaveText('ThanhNP GV 73')
        await expect(coursePage.getOngoingGTTQEmailGV()).toHaveText('thanhnp+gv73@onschool.edu.vn')
    })

    test('Kiểm tra tab Lịch trinh học tập', async () => {
        await coursePage.clickLTHTTab()
        await expect(coursePage.getOngoingLTHTDdescription()).toBeVisible()
    })

    test('Kiểm tra tab Nhiệm vụ học tập', async () => {
        await coursePage.clickNVHTTab()
        await expect(coursePage.getOngoingNVHTTodo()).toHaveText('Chưa hoàn thành (9)')
        await expect(coursePage.getOngoingNVHTTodoTask()).toHaveText('Video1.1.1.1')
        await coursePage.clickNVHTDoneTab()
        await expect(coursePage.ongoing_nvht_done_no_data).toBeVisible()

    })

    test('Kiểm tra tab Phương pháp tính điểm', async () => {
        await coursePage.clickPPTDTab()
        await expect(coursePage.getOngoingPPTDFormula()).toBeVisible()
        await coursePage.clickPPTDProgressGrade()
        await expect(coursePage.getOngoingPPTDProgressGradeFormula()).toBeVisible()
        await expect(coursePage.getOngoingPPTDProgressGradeModeDescription()).toBeVisible()
        await expect(coursePage.getOngoingPPTDProgressGradeMidtermDescription()).toBeVisible()
        await coursePage.clickPPTDExamGrade()
        await expect(coursePage.getOngoingPPTDExamGradeDescription()).toBeVisible()
    })

    test('Kiểm tra tab Tài liệu tham khảo', async () => {
        await coursePage.clickTLTKTab()
        await expect(coursePage.getOngoingTLTKDescription()).toBeVisible()
    })

    test('Kiểm tra tab Nội dung học phần', async () => {
        await coursePage.clickNDHPTab()
        await expect(coursePage.getOngoingNDHPSuggestCover()).toBeVisible()
        await expect(coursePage.getOngoingNDHPSuggestLesson()).toHaveText('Lesson1.1')
        await expect(coursePage.getOngoingNDHPSuggestButton()).toHaveText('Xem chi tiết')
        await expect(coursePage.getOngoingNDHPProvisionalAttendanceGrade()).toHaveText('--')
        await expect(coursePage.getOngoingNDHPProvisionalProgress()).toHaveText('0')
        await expect(coursePage.getOngoingNDHPNumberOfUnits()).toHaveText('3 Bài')
        await expect(coursePage.getOngoingNDHPUnit1()).toHaveText('Unit 1')
        await expect(coursePage.getOngoingNDHPProgressOfUnit1()).toHaveText('0% hoàn thành')
        await coursePage.clickUnitExpandButton()
        await expect(coursePage.getOngoingNDHPLesson11()).toHaveText('Lesson1.1')
        await expect(coursePage.getOngoingNDHPLesson12SCIIcon()).toBeVisible()
        await expect(coursePage.getOngoingNDHPUnitquiz1()).toBeVisible()

        await expect(coursePage.getOngoingNDHPKTTN1Name()).toHaveText('KTTN1 Điểm cao nhất')
        await expect(coursePage.getOngoingNDHPKTTN1SCIIcon()).toBeVisible()
        await expect(coursePage.getOngoingNDHPKTTN1Deadline()).toHaveText('Hạn cuối: 12:00 ngày 16/09/2025')
        await coursePage.clickKTTN1ExpandButton()
        await expect(coursePage.getOngoingNDHPKTTN1Format()).toHaveText('Trắc nghiệm')
        await expect(coursePage.getOngoingNDHPKTTN1Times()).toHaveText('Không giới hạn')
        await expect(coursePage.getOngoingNDHPKTTN1Button()).toHaveText('Xem thông tin')

        await expect(coursePage.getOngoingNDHPKTTL1Name()).toHaveText('KTTL1 Học viên nộp tối thiểu 1 file')
        await expect(coursePage.getOngoingNDHPKTTL1Deadline()).toHaveText('Hạn cuối: 12:00 ngày 16/09/2025')
        await coursePage.clickKTTL1ExpandButton()
        await expect(coursePage.getOngoingNDHPKTTL1Format()).toHaveText('Nộp tài liệu')
        await expect(coursePage.getOngoingNDHPKTTL1Button()).toHaveText('Xem thông tin')

        await expect(coursePage.getOngoingNDHPLTTTTN1Name()).toHaveText('LTTTTN1 Thực hiện luyện tập')
        await coursePage.clickKLTTTTN1ExpandButton()
        await expect(coursePage.getOngoingNDHPLTTTTN1Format()).toHaveText('Trắc nghiệm')
        await expect(coursePage.getOngoingNDHPLTTTTN1Times()).toHaveText('Không giới hạn')
        await expect(coursePage.getOngoingNDHPLTTTTN1Button()).toHaveText('Xem thông tin')

        await expect(coursePage.getOngoingNDHPLTTTTL1Name()).toHaveText('LTTTTL1 Xem nội dung bài')
        await expect(coursePage.getOngoingNDHPLTTTTL1SCIIcon()).toBeVisible()
        await coursePage.clickLTTTTL1ExpandButton()
        await expect(coursePage.getOngoingNDHPLTTTTL1Format()).toHaveText('Nộp tài liệu')
        await expect(coursePage.getOngoingNDHPLTTTTL1Button()).toHaveText('Xem thông tin')
    })
})
