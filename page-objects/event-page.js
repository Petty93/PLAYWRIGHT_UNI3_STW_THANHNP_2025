export class EventPage {
  //Init selectors using constructor
  constructor(page) {
    this.page = page
    this.event_tab = page.locator('a[href="/event"]')
    this.month_radion_button = page.locator('#uni-event-filter__radio-0')
    this.next_month = page.locator('.bi.bi-chevron-right.uni-event-calendar__icons-arrow')
    this.previous_month = page.locator('.bi.bi-chevron-left.uni-event-calendar__icons-arrow');
    this.date1 = page.locator('//abbr[@aria-label="16 tháng 9, 2025"]')
    this.date1_event1_card = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)')
    this.date1_event1_subject = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)')
    this.date1_event1_name = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)')
    this.date1_event1_time = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3)')

    this.subject_radio_button = page.locator('#uni-event-filter__radio-1')
    this.card_subject1_cover = page.locator('div[class="uni-event-course-item__cover uni-event-course-item__active"] img[alt="uni"]')
    this.card_subject1_name = page.locator('div[class="uni-event-course-item__cover uni-event-course-item__active"] div[class="uni-event-course-item__course-name"]')
    this.card_subject1_start_time = page.locator('div[class="uni-event-course-item__cover uni-event-course-item__active"] div[class="uni-event-course-item__info"] div:nth-child(2)')

    this.card_subject2_cover = page.locator('div[class="uni-event-left__course-list"] div:nth-child(2) div:nth-child(1) div:nth-child(1) img:nth-child(1)')
    this.card_subject2_name = page.locator('div[class="uni-event-left__course-list"] div:nth-child(2) div:nth-child(1) div:nth-child(2) div:nth-child(1)')
    this.card_subject2_start_time = page.locator('div[class="uni-event-left__course-list"] div:nth-child(2) div:nth-child(1) div:nth-child(2) div:nth-child(2)')

    this.frame_subject1_name = page.locator('div[class="uni-event-cover__right"] div[class="uni-event-course-detail__coursename"]')
    this.frame_subject1_start_icon = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)')
    this.frame_subject1_start_title = page.locator('div[class="uni-event-cover__right"] div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(2)')
    this.frame_subject1_start_time = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)')

    this.frame_subject1_liveclass_icon = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)')
    this.frame_subject1_liveclass_title = page.locator('div[class="uni-event-cover__right"] div:nth-child(3) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(2)')
    this.frame_subject1_liveclass_time = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2)')

    this.frame_subject1_kttl2_icon = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)')
    this.frame_subject1_kttl2_title = page.locator('div[class="uni-event-cover__right"] div:nth-child(4) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(2)')
    this.frame_subject1_kttl2_time = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2)')

    this.frame_subject1_attendance_cutoff_icon = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(10) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)')
    this.frame_subject1_attendance_cutoff_title = page.locator('div[class="uni-event-cover__right"] div:nth-child(10) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(2)')
    this.frame_subject1_attendance_cutoff_time = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(10) > div:nth-child(1) > div:nth-child(2)')
  }

  //Define methods
  async gotoEventPage() {
    await this.event_tab.click()
  }

  async viewByMonth() {
    await this.next_month.click()
    await this.date1.click()
  }

  async selectEventByMonth() {
    const targetMonth = 'tháng 9 năm 2025'
    //Lấy text của tháng hiện tại
    let currentMonthText = await this.page.locator('.react-calendar__navigation').textContent()
    // Vòng lặp để chuyển đến tháng mong muốn
    while (!currentMonthText.includes(targetMonth)) {
      // Nếu tháng hiện tại lớn hơn tháng 9, bấm nút back
      if (currentMonthText.includes('tháng 10') || currentMonthText.includes('tháng 11')) {
        await this.previous_month.click()
      }
      // Nếu tháng hiện tại nhỏ hơn tháng 9, bấm nút next
      else {
        await this.next_month.click()
      }
      // Cập nhật lại text của tháng sau khi click
      currentMonthText = await this.page.locator('.react-calendar__navigation').textContent();
    }
    //Khi đã đến đúng tháng, click vào ngày
    await this.date1.click()
    await this.date1_event1_card.click()
  }

  async navigateToUrlWithEventByMonth(url) {
    await this.page.goto(url);
  }

  async viewBySubject2() {
    await this.subject_radio_button.click()
    await this.card_subject2_name.click()
  }

  async viewBySubject1() {
    await this.month_radion_button.click()
    await this.subject_radio_button.click()
    // await this.card_subject1_name.click()
  }

  async selectEventBySubject1() {
    await this.subject_radio_button.click()
    await this.card_subject2_name.click()
    await this.card_subject1_name.click()
    await this.frame_subject1_liveclass_title.click()
  }

    async navigateToUrlWithEventBySubject(url) {
    await this.page.goto(url);
  }
}