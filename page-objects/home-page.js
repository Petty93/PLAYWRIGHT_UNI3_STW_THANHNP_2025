export class HomePage {

    //Init selectors using constructor
    constructor(page) {
        this.page = page
        this.logo = page.locator('img[alt="uni3"]')
        this.home_tab = page.locator('.uni-header__active')
        this.event_tab = page.locator('a[href="/event"]')
        this.transcript_tab = page.locator('a[href="/transcript"]')

        this.noti_icon = page.locator('.bi.bi-bell')
        this.student_name_profile = page.locator('.change-to-period')
        this.small_avatar = page.locator('img[alt="Avatar"][loading="lazy"][width="40"]')

        this.large_avatar = page.locator('img[alt="Avatar"][loading="lazy"][width="160"]')
        this.welcome = page.locator('.uni-student-home-header__welcome')
        this.student_name = page.locator('.uni-student-home-header__username')

        this.sci_button = page.locator('.uni-btn-type-6.btn.btn-primary.btn-lg')

        this.suggest_title = page.locator('.uni-student-home-suggest__title')
        this.suggest_thumbnail = page.locator('.uni-student-home-suggest__title')
        this.suggest_subject = page.locator('a[href="/347/226"]')
        this.suggest_task = page.locator('.uni-student-home-suggest__right-content--task-name')
        this.suggest_icon = page.locator('.icon-task-sidebar')
        this.suggest_task_type = page.locator('div[class="uni-student-home-suggest__task-type"] div')
        this.suggest_button = page.locator('.uni-btn-type-1.btn.btn-primary')

        this.ongoing_title = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)')
        this.ongoing_subject = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)')
        this.ongoing_start_time = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)')
        this.ongoing_attendance_grade_cutoff_time = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)')
        this.ongoing_exam_time = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nt\h-child(1) > div:nth-child(2)')
        this.ongoing_progress = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)')
        this.ongoing_button = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1)')

        this.not_start_title = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)')
        this.not_start_subject = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)')
        this.not_start_start_time = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)')
        this.not_start_attendance_grade_cutoff_time = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)')
        this.not_start_exam_time = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2)')
        this.not_start_progress = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)')
        this.not_start_button = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1)')
    }
    //Define login page methods    
    //Header area
    getLogo() {
        return this.page.locator('img[alt="uni3"]')
    }
    getHomePageTab() {
        return this.page.locator('.uni-header__active')
    }
    getEventTab() {
        return this.page.locator('a[href="/event"]')
    }
    getTranscriptTab() {
        return this.page.locator('a[href="/transcript"]')
    }

    //Profile area
    getNotiIcon() {
        return this.page.locator('.bi.bi-bell')
    }
    getStudentNameProfile() {
        return this.page.locator('.change-to-period')
    }
    getSmallAvatar() {
        return this.page.locator('img[alt="Avatar"][loading="lazy"][width="40"]')
    }

    //Welcome area
    getLargeAvatar() {
        return this.page.locator('img[alt="Avatar"][loading="lazy"][width="160"]')
    }
    getWelcome() {
        return this.page.locator('.uni-student-home-header__welcome')
    }
    getStudenName() {
        return this.page.locator('.uni-student-home-header__username')
    }

    //Go to SCI
    async gotoSCI() {
        await this.sci_button.click()
    }

    async navigateToSCIUrl(url) {
        await this.page.goto(url);
    }

    //Suggest area
    getSuggestTitle() {
        return this.page.locator('.uni-student-home-suggest__title')
    }
    getSuggestThumbnail() {
        return this.page.locator('.uni-student-home-suggest__title')
    }
    getSuggestSubject() {
        return this.page.locator('a[href="/347/226"]')
    }
    getSuggestTask() {
        return this.page.locator('.uni-student-home-suggest__right-content--task-name')
    }
    getSuggestIcon() {
        return this.page.locator('.icon-task-sidebar')
    }
    getSuggestTaskType() {
        return this.page.locator('div[class="uni-student-home-suggest__task-type"] div')
    }
    getSuggestButton() {
        return this.page.locator('.uni-btn-type-1.btn.btn-primary')
    }

    //Ongoing area
    getOngoingTitle() {
        return this.page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)')
    }
    getOngoingSubject() {
        return this.page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)')
    }
    getOngoingStartTime() {
        return this.page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)')
    }
    getOngoingAttendanceCutoffTime() {
        return this.page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)')
    }
    getOngoingExamTime() {
        return this.page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nt\h-child(1) > div:nth-child(2)')
    }
    getOngoingProgress() {
        return this.page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)')
    }
    getOngoingButton() {
        return this.page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1)')
    }

    //Not start area
    getNotStartTitle() {
        return this.page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)')
    }
    getNotStartSubject() {
        return this.page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)')
    }
    getNotStartStartTime() {
        return this.page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)')
    }
    getNotStartAttendanceCutoffTime() {
        return this.page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)')
    }
    getNotStartExamTime() {
        return this.page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2)')
    }
    getNotStartProgress() {
        return this.page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)')
    }
    getNotStartButton() {
        return this.page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1)')
    }
}