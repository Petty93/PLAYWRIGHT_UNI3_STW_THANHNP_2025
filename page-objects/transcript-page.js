export class TranscriptPage {
    //Init selectors using constructor
    constructor(page) {
        this.page = page
        this.transcript_tab = page.locator('a[href="/transcript"]')

        this.search_subject = page.locator('input[placeholder="Tên học phần..."]')
        this.search_time = page.locator('.uni-transcript-btn-calendar__label')
        this.next_month = page.locator('.bi.bi-chevron-right.uni-event-calendar__icons-arrow')
        this.previous_month = page.locator('.bi.bi-chevron-left.uni-event-calendar__icons-arrow');
        this.date1 = page.locator('abbr[aria-label="17 tháng 7, 2025"]')
        this.date2 = page.locator('abbr[aria-label="18 tháng 7, 2025"]')
        this.apply_button = page.locator('div[class="uni-transcript-modal-calendar__modal-footer modal-footer"] button:nth-child(2)')
        this.search_badge = page.locator('.dropdown-toggle.btn.btn-primary.btn-md')
        this.option_all = page.locator('a:nth-child(1) div:nth-child(1)')
        this.option_undefine = page.locator('a:nth-child(2) div:nth-child(1)')
        this.option_pass = page.locator('a:nth-child(3) div:nth-child(1)')
        this.option_fail = page.locator('a:nth-child(4) div:nth-child(1)')
        this.search_button = page.locator('//button[contains(text(),"Tìm kiếm")]')
        this.no_data = page.locator('.uni-transcript-no-record__title')

        this.subject_card = page.locator('.uni-course-score-item__course-name')
        this.subject_icon = page.locator('img[alt="uni"][loading="lazy"][width="48"]')
        this.subject_name = page.locator('.uni-course-score-item__course-name')
        this.subject_badge = page.locator('.uni-badge-type-1.badge.bg-secondary')
        this.subject_time = page.locator('.uni-course-score-item__course-datetime')

        this.midterm_grade = page.locator('div[class="uni-course-score-item__content"] div:nth-child(1) div:nth-child(2)')
        this.weighted_midterm_grade = page.locator('div[class="uni-course-score-item__content"] div:nth-child(2) div:nth-child(2)')
        this.attendance_grade = page.locator('div[class="uni-default-container uni-transcript uni-default-container"] div:nth-child(3) div:nth-child(2)')
        this.weighted_attendance_grade = page.locator('div:nth-child(4) div:nth-child(2)')
        this.process_grade = page.locator('div:nth-child(5) div:nth-child(2)')
        this.view_detail_button = page.locator('div[class="uni-course-score-item__course-status"] i[class="bi bi-chevron-right"]')

        this.pagination = page.locator('.uni-transcript-pagination__total')
    }

    //Define methods
    //1. Search
    async gotoTranscriptPage() {
        await this.transcript_tab.click()
    }

    async searchBySubject(subject) {
        await this.search_subject.fill(subject)
        await this.search_button.click()
    }

    async searchByTime() {
        await this.search_time.click()
        const targetMonth = 'tháng 7 năm 2025'
        //Lấy text của tháng hiện tại
        let currentMonthText = await this.page.locator('.react-calendar__navigation').textContent()
        // Vòng lặp để chuyển đến tháng mong muốn
        while (!currentMonthText.includes(targetMonth)) {
            // Nếu tháng hiện tại lớn hơn tháng 7, bấm nút back
            if (currentMonthText.includes('tháng 8') || currentMonthText.includes('tháng 9')) {
                await this.previous_month.click()
            }
            // Nếu tháng hiện tại nhỏ hơn tháng 7, bấm nút next
            else {
                await this.next_month.click()
            }
            // Cập nhật lại text của tháng sau khi click
            currentMonthText = await this.page.locator('.react-calendar__navigation').textContent();
        }
        //Khi đã đến đúng tháng, click vào ngày cần chọn
        await this.date1.click()
        await this.date1.click()
        await this.apply_button.click()
        await this.search_button.click()
    }

    async searchByTime2() {
        await this.search_time.click()
        const targetMonth = 'tháng 7 năm 2025'
        //Lấy text của tháng hiện tại
        let currentMonthText = await this.page.locator('.react-calendar__navigation').textContent()
        // Vòng lặp để chuyển đến tháng mong muốn
        while (!currentMonthText.includes(targetMonth)) {
            // Nếu tháng hiện tại lớn hơn tháng 7, bấm nút back
            if (currentMonthText.includes('tháng 8') || currentMonthText.includes('tháng 9')) {
                await this.previous_month.click()
            }
            // Nếu tháng hiện tại nhỏ hơn tháng 7, bấm nút next
            else {
                await this.next_month.click()
            }
            // Cập nhật lại text của tháng sau khi click
            currentMonthText = await this.page.locator('.react-calendar__navigation').textContent();
        }
        //Khi đã đến đúng tháng, click vào ngày cần chọn
        await this.date2.click()
        await this.date2.click()
        await this.apply_button.click()
        await this.search_button.click()
    }

    async searchByBadgeAll() {
        await this.search_badge.click()
        await this.option_all.click()
        await this.search_button.click()
    }

    async searchByBadgeUndefined() {
        await this.search_badge.click()
        await this.option_undefine.click()
        await this.search_button.click()
    }

    async searchByBadgePass() {
        await this.search_badge.click()
        await this.option_pass.click()
        await this.search_button.click()
    }

    async searchByBadgeFail() {
        await this.search_badge.click()
        await this.option_fail.click()
        await this.search_button.click()
    }

    async searchBySubjectAndTime(subject) {
        await this.search_subject.fill(subject)
        await this.search_time.click()
        const targetMonth = 'tháng 7 năm 2025'
        //Lấy text của tháng hiện tại
        let currentMonthText = await this.page.locator('.react-calendar__navigation').textContent()
        // Vòng lặp để chuyển đến tháng mong muốn
        while (!currentMonthText.includes(targetMonth)) {
            // Nếu tháng hiện tại lớn hơn tháng 7, bấm nút back
            if (currentMonthText.includes('tháng 8') || currentMonthText.includes('tháng 9')) {
                await this.previous_month.click()
            }
            // Nếu tháng hiện tại nhỏ hơn tháng 7, bấm nút next
            else {
                await this.next_month.click()
            }
            // Cập nhật lại text của tháng sau khi click
            currentMonthText = await this.page.locator('.react-calendar__navigation').textContent();
        }
        //Khi đã đến đúng tháng, click vào ngày cần chọn
        await this.date1.click()
        await this.date1.click()
        await this.apply_button.click()
        await this.search_button.click()
    }

    async searchBySubjectAndBadge(subject) {
        await this.search_subject.fill(subject)
        await this.search_badge.click()
        await this.option_undefine.click()
        await this.search_button.click()
    }

    async searchByTimeAndBadge() {
        await this.search_time.click()
        const targetMonth = 'tháng 7 năm 2025'
        //Lấy text của tháng hiện tại
        let currentMonthText = await this.page.locator('.react-calendar__navigation').textContent()
        // Vòng lặp để chuyển đến tháng mong muốn
        while (!currentMonthText.includes(targetMonth)) {
            // Nếu tháng hiện tại lớn hơn tháng 7, bấm nút back
            if (currentMonthText.includes('tháng 8') || currentMonthText.includes('tháng 9')) {
                await this.previous_month.click()
            }
            // Nếu tháng hiện tại nhỏ hơn tháng 7, bấm nút next
            else {
                await this.next_month.click()
            }
            // Cập nhật lại text của tháng sau khi click
            currentMonthText = await this.page.locator('.react-calendar__navigation').textContent();
        }
        //Khi đã đến đúng tháng, click vào ngày cần chọn
        await this.date1.click()
        await this.date1.click()
        await this.apply_button.click()
        await this.search_badge.click()
        await this.option_undefine.click()
        await this.search_button.click()
    }

    async searchBySubjectAndTimeAndBadge(subject) {
        await this.search_subject.fill(subject)
        await this.search_time.click()
        const targetMonth = 'tháng 7 năm 2025'
        //Lấy text của tháng hiện tại
        let currentMonthText = await this.page.locator('.react-calendar__navigation').textContent()
        // Vòng lặp để chuyển đến tháng mong muốn
        while (!currentMonthText.includes(targetMonth)) {
            // Nếu tháng hiện tại lớn hơn tháng 7, bấm nút back
            if (currentMonthText.includes('tháng 8') || currentMonthText.includes('tháng 9')) {
                await this.previous_month.click()
            }
            // Nếu tháng hiện tại nhỏ hơn tháng 7, bấm nút next
            else {
                await this.next_month.click()
            }
            // Cập nhật lại text của tháng sau khi click
            currentMonthText = await this.page.locator('.react-calendar__navigation').textContent();
        }
        //Khi đã đến đúng tháng, click vào ngày cần chọn
        await this.date1.click()
        await this.date1.click()
        await this.apply_button.click()
        await this.search_badge.click()
        await this.option_undefine.click()
        await this.search_button.click()
    }

    //2. List
    getSubjectIcon() {
        return this.page.locator('img[alt="uni"][loading="lazy"][width="48"]')
    }

    getSubjectName() {
        return this.page.locator('.uni-course-score-item__course-name')
    }

    getSubjectBadge() {
        return this.page.locator('.uni-badge-type-1.badge.bg-secondary')
    }

    getSubjectTime() {
        return this.page.locator('.uni-course-score-item__course-datetime')
    }

    async viewDetail() {
        await this.view_detail_button.click()
    }

    async navigateToScoreDetail(url) {
        await this.page.goto(url);
    }
}