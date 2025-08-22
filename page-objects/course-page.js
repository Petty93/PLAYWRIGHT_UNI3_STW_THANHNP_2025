export class CoursePage {
    //Init selectors using constructor
    constructor(page) {
        this.page = page
        this.ongong_course_button = page.locator('div[class="uni-student-home-content__cover"] div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(2) div:nth-child(1) div:nth-child(2) div:nth-child(1) button:nth-child(1)')

        //this.notstart_course_button = page.locator('div[class="uni-student-home-content__gap"] div:nth-child(2) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(2) div:nth-child(1) div:nth-child(2) div:nth-child(1) button:nth-child(1)')

        this.ongoing_course_menu_subject_name = page.locator('div[class="uni-course-sidebar__current-course-link"] div:nth-child(2) div:nth-child(1)')
        this.ongoing_course_menu_number_of_units = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)')
        this.ongoing_course_detail_subject_name = page.locator('div[class="uni-course-header-container--course-title"] h2')
        this.ongoing_course_detail_icon_SCI = page.locator('img[alt="Thumbnail"][loading="lazy"][width="71"]')
        this.ongoing_course_sci_banner = page.locator('.uni-course-container__sci-banner')
        this.ongoing_course_sci_score = page.locator('.uni-course-container__sci-banner-content-special')

        this.ongoing_gttq_tab = page.locator('div[class="uni-course-menu"] div:nth-child(1)')
        this.ongoing_gttq_description = page.locator('div[class="uni-dangerouslyHTML-support undefined"] p')
        this.ongoing_gttq_starttime = page.locator('div[class="uni-course-intro-container__start-date"] div:nth-child(2)')
        this.ongoing_gttq_attandance_cutoff = page.locator('div[class="uni-course-intro-container__attendance-cutoff-date"] div:nth-child(2)')
        this.ongoing_gttq_endtime = page.locator('div[class="uni-course-intro-container__end-date"] div:nth-child(2)')
        this.ongoing_gttq_avatar_qlht = page.locator('(//img[@alt="Avatar"])[2]')
        this.ongoing_gttq_name_qlht = page.locator('//div[normalize-space()="ThanhNP QLHT 34"]')
        this.ongoing_gttq_email_qlht = page.locator('//div[normalize-space()="thanhnp+thanhnp.qlht34@onschool.edu.vn"]')
        this.ongoing_gttq_phone_qlht = page.locator('//div[normalize-space()="34343434"]')
        this.ongoing_gttq_avatar_gv = page.locator('(//img[@alt="Avatar"])[3]')
        this.ongoing_gttq_name_gv = page.locator('//div[normalize-space()="ThanhNP GV 73"]')
        this.ongoing_gttq_email_gv = page.locator('//div[normalize-space()="thanhnp+gv73@onschool.edu.vn"]')

        this.ongoing_ltht_tab = page.locator('//div[@class="uni-course-header-container"]//div[3]')
        this.ongoing_ltht_description = page.locator('div[class="uni-course-agenda-desktop"] th:nth-child(1)')

        this.ongoing_nvht_tab = page.locator('//div[@class="uni-course-header-container"]//div[4]')
        this.ongoing_nvht_todo = page.locator('.uni-course-content-container__learning-mision-tab-chosen')
        this.ongoing_nvht_todo_task = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)')
        this.ongoing_nvht_done = page.locator('"Đã hoàn thành (0)"')
        this.ongoing_nvht_done_no_data = page.locator('div[class="uni-course-content-container__learning-mission-no-data"] div')

        this.ongoing_pptd_tab = page.locator('//div[@class="uni-course-header-container"]//div[5]')
        this.ongoing_pptd_formula = page.locator('//div[@class="uni-score-detail__scoring-method-text"][contains(text(),"t thúc h")]')
        this.ongoing_pptd_progress_grade = page.locator('(//button[@type="button"])[2]')
        this.ongoing_pptd_progress_grade_formula = page.locator('//div[@class="uni-score-detail__cover-accordion-progress"]//div[5]')
        this.ongoing_pptd_progress_grade_mode_description = page.locator('div[class="uni-dangerouslyHTML-support uni-score-detail__scoring-method-content-progress--detail"] p')
        this.ongoing_pptd_progress_grade_midterm_description = page.locator('div[class="uni-dangerouslyHTML-support uni-score-detail__scoring-method-content-progress--detail"] div[class="uni-process-grade__section-title"]')
        this.ongoing_pptd_exam_grade = page.locator('(//button[@type="button"])[3]')
        this.ongoing_pptd_exam_grade_description = page.locator('div[class="uni-dangerouslyHTML-support undefined"] div[class="uni-process-grade__section-title"]')

        this.ongoing_tltk_tab = page.locator('//div[@class="uni-course-header-container"]//div[6]')
        this.ongoing_tltk_description = page.locator('label[for="references"]')

        this.ongoing_ndhp_tab = page.locator('div[class="uni-course-menu"] div:nth-child(2)')
        this.ongoing_ndhp_suggest_cover = page.locator('.uni-thumbnail__layout-cover')
        this.ongoing_ndhp_suggest_lesson = page.locator('.uni-unit-progress-container__task-name.change-to-period')
        this.ongoing_ndhp_suggest_button = page.locator('div[class="uni-unit-progress-container__btn-task-inprogress"] button[type="button"]')
        this.ongoing_ndhp_provisional_attendance_grade = page.locator('div[class="uni-course-header-container--course-completion--attendance"] span:nth-child(1)')
        this.ongoing_ndhp_provisional_progress = page.locator('div[class="uni-course-header-container--course-completion--completion-rate"] span:nth-child(1)')
        this.ongoing_ndhp_number_of_units = page.locator('//div[@class="uni-course-content-container__description-subtitle"]//div[1]')

        this.ongoing_ndhp_unit1 = page.locator('a[href="/347/npt3103-khoa-hoc-npt31032025/unit-1-533"]')
        this.ongoing_ndhp_progress_of_unit1 = page.locator('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h2:nth-child(1) > button:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)')
        this.ongoing_ndhp_expand = page.locator('//div[@class="uni-accordion accordion"]//div[1]//h2[1]//button[1]')
        this.ongoing_ndhp_lesson11 = page.locator('//div[@class="uni-unit-lesson__title"][normalize-space()="Lesson1.1"]')
        this.ongoing_ndhp_lesson12_sci_icon = page.locator('//div[contains(text(),"Lesson1.2")]')
        this.ongoing_ndhp_unitquiz1 = page.locator('//div[@class="accordion-collapse collapse show"]//div[3]//a[1]//div[1]')

        this.ongoing_ndhp_kttn1_name = page.locator('a[href="/347/course-slug/unit-slug/lesson-slug/3114"]')
        this.ongoing_ndhp_kttn1_sci_icon = page.locator('(//img[@alt="Thumbnail"])[6]')
        this.ongoing_ndhp_kttn1_deadline = page.locator('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h2:nth-child(1) > button:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)')
        this.ongoing_ndhp_kttn1_expand = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h2:nth-child(1) > button:nth-child(1)')
        this.ongoing_ndhp_kttn1_format = page.locator('//div[@class="accordion-collapse collapse show"]//div[contains(text(),"Trắc nghiệm")]')
        this.ongoing_ndhp_kttn1_times = page.locator('//div[@class="accordion-collapse collapse show"]//div[contains(text(),"Không giới hạn")]')
        this.ongoing_ndhp_kttn1_button = page.locator('div[class="accordion-collapse collapse show"] button[type="button"]')

        this.ongoing_ndhp_kttl1_name = page.locator('a[href="/347/course-slug/unit-slug/lesson-slug/3115"]')
        this.ongoing_ndhp_kttl1_deadline = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > h2:nth-child(1) > button:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)')
        this.ongoing_ndhp_kttl1_expand = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > h2:nth-child(1) > button:nth-child(1)')
        this.ongoing_ndhp_kttl1_format = page.locator('div[class="accordion-collapse collapse show"] div[class="col-xl-9 col-12"] div:nth-child(2)')
        this.ongoing_ndhp_kttl1_button = page.locator('div[class="accordion-collapse collapse show"] button[type="button"]')

        this.ongoing_ndhp_lttttn1_name = page.locator('a[href="/347/course-slug/unit-slug/lesson-slug/3118"]')
        this.ongoing_ndhp_lttttn1_expand = page.locator('div:nth-child(9) h2:nth-child(1) button:nth-child(1)')
        this.ongoing_ndhp_lttttn1_format = page.locator('div[class="accordion-collapse collapse show"] div[class="uni-unit-exercise__formality"] div:nth-child(2)')
        this.ongoing_ndhp_lttttn1_times = page.locator('div[class="accordion-collapse collapse show"] div[class="uni-unit-exercise__attempt"] div:nth-child(2)')
        this.ongoing_ndhp_lttttn1_button = page.locator('div[class="accordion-collapse collapse show"] button[type="button"]')

        this.ongoing_ndhp_lttttl1_name = page.locator('a[href="/347/course-slug/unit-slug/lesson-slug/3119"]')
        this.ongoing_ndhp_lttttl1_sci_icon = page.locator('(//img[@alt="Thumbnail"])[8]')
        this.ongoing_ndhp_lttttl1_expand = page.locator('(//button[@type="button"])[21]')
        this.ongoing_ndhp_lttttl1_format = page.locator('(//div[contains(text(),"Nộp tài liệu")])[4]')
        this.ongoing_ndhp_lttttl1_button = page.locator('div[class="accordion-collapse collapse show"] button[type="button"]')

        //Màn chi tiết unit1
        this.ongoing_ndhp_unit1_intro = page.locator('div[class="uni-dangerouslyHTML-support uni-unit-overview__content"] p')
        this.ongoing_ndhp_unit1_progress_of_unit1 = page.locator('//body/div[@class="layout-app-container"]/div/div[@class="uni-layout-student__course"]/div[@class="uni-course-container"]/div[@class="uni-course-content-container"]/div[@class="uni-course-content-container__description"]/div/div[@class="uni-accordion accordion"]/div[1]/h2[1]/button[1]/div[1]/div[1]/div[2]/div[1]')
        this.ongoing_ndhp_unit1_lesson11 = page.locator('div[aria-describedby="uni-tooltip"] div[class="uni-lesson-card__header-title"]')

        this.ongoing_ndhp_unit1_video1111_uncheck = page.locator('div[class="uni-lesson-card__task-normal-list"] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) img:nth-child(1)')
        this.ongoing_ndhp_unit1_video1111_name = page.locator('div[aria-describedby="uni-tooltip"] div[class="uni-unit-task-normal__title change-to-period"]')
        this.ongoing_ndhp_unit1_video1111_sci_icon = page.locator('div[aria-describedby="uni-tooltip"] img[alt="Thumbnail"]')
        this.ongoing_ndhp_unit1_video1111_sci_practice = page.locator('div[class="uni-lesson-card__task-normal-list"] div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1)')
        this.ongoing_ndhp_unit1_video1111_button = page.locator('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(2)')

        this.ongoing_ndhp_unit1_slide1111_uncheck = page.locator('div[aria-describedby="uni-tooltip"] img[alt="uni"]')
        this.ongoing_ndhp_unit1_slide1111_name = page.locator('div[aria-describedby="uni-tooltip"] div[class="uni-unit-task-normal__title change-to-period"]')
        this.ongoing_ndhp_unit1_slide1111_sci_practice = page.locator('div[class="col-lg-6 col-12"] div:nth-child(2) div:nth-child(2) div:nth-child(1) div:nth-child(1)')
        this.ongoing_ndhp_unit1_slide1111_button = page.locator('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > button:nth-child(2)')

        this.ongoing_ndhp_unit1_topicquiz1111_uncheck = page.locator('div[aria-describedby="uni-tooltip"] img[alt="uni"]')
        this.ongoing_ndhp_unit1_topicquiz1111_name = page.locator('div[aria-describedby="uni-tooltip"] div[class="uni-unit-task-exercise__title change-to-period"]')
        this.ongoing_ndhp_unit1_topicquiz1111_sci_icon = page.locator('div[aria-describedby="uni-tooltip"] img[alt="Thumbnail"]')
        this.ongoing_ndhp_unit1_topicquiz1111_button = page.locator('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(2)')

        this.ongoing_ndhp_unit1_taskassignment1111_uncheck = page.locator('div[aria-describedby="uni-tooltip"] img[alt="uni"]')
        this.ongoing_ndhp_unit1_taskassignment1111_name = page.locator('div[aria-describedby="uni-tooltip"] div[class="uni-unit-task-exercise__title change-to-period"]')
        this.ongoing_ndhp_unit1_taskassignment1111_button = page.locator('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > button:nth-child(2)')

        this.ongoing_ndhp_unit1_unitquiz1_name = page.locator('a[href="/347/npt3103-khoa-hoc-npt31032025/unit-1-533/unit-quiz-1-1074/3147"]')
        this.ongoing_ndhp_unit1_unitquiz1_sci_icon = page.locator('div[class="uni-unit-lesson-exercise__cover-title"] img[alt="Thumbnail"]')
        this.ongoing_ndhp_unit1_unitquiz1_button = page.locator('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1)')

        this.ongoing_ndhp_unit1_hlth = page.locator('div[class="uni-unit-description__full-slide-video"] div')

        this.ongoing_ndhp_unit1_summary = page.locator('div[class="uni-dangerouslyHTML-support uni-unit-summary__content"] p')

        //Màn chi tiết lesson1.1
        this.ongoing_ndhp_lesson11_video1111_name = page.locator('div[class="uni-list-task__task-text uni-list-task__current-task"] div[class="uni-list-task__task-text--text-content change-to-period"]')
        this.ongoing_ndhp_lesson11_video1111_check = page.locator('div[aria-describedby="uni-tooltip"] img[alt="uni"]')
        this.ongoing_ndhp_lesson11_video1111_qna = page.locator('.uni-lesson-discuss__text-title.c-pointer.uni-lesson-discuss__no-choose')
        this.ongoing_ndhp_lesson11_video1111_qna_no_comments = page.locator('div[class="uni-lesson-discuss__no-comments"] div')
        this.ongoing_ndhp_lesson11_video1111_qna_text_box = page.locator('div[class="uni-editor-comment__default--input"] div')
        this.ongoing_ndhp_lesson11_video1111_qna_text_area = page.locator('//iframe[@id="tiny-react_86899060451755830138724_ifr"]')
        this.ongoing_ndhp_lesson11_video1111_qna_button = page.locator('button[class="btn btn-primary btn-sm"]')
        this.ongoing_ndhp_lesson11_video1111_qna_unapproved = page.locator('.uni-lesson-comment__user-action--waiting-state')
        this.ongoing_ndhp_lesson11_video1111_qna_toggle = page.locator('.bi.bi-three-dots.uni-lesson-comment__toggle')
        this.ongoing_ndhp_lesson11_video1111_qna_delete_button = page.locator('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)')
        this.ongoing_ndhp_lesson11_video1111_qna_delete_popup = page.locator('div[class="modal-title h4"] div')
        this.ongoing_ndhp_lesson11_video1111_qna_delete_confirm = page.locator('button[class="uni-btn-type-1 btn btn-primary"]')
        this.ongoing_ndhp_lesson11_video1111_qna_edit_button = page.locator('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)')

        this.ongoing_ndhp_lesson11_video1111_discuss = page.locator('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)')
        this.ongoing_ndhp_lesson11_video1111_discuss_text_box = page.locator('div[class="uni-editor-comment__default--input"] div')
        this.ongoing_ndhp_lesson11_video1111_discuss_text_area = page.locator('//iframe[@id="tiny-react_15577462041755830558867_ifr"]')
        this.ongoing_ndhp_lesson11_video1111_discuss_button = page.locator('button[class="btn btn-primary btn-sm"])')
        this.ongoing_ndhp_lesson11_video1111_discuss_toggle = page.locator('.bi.bi-three-dots.uni-lesson-comment__toggle')
        this.ongoing_ndhp_lesson11_video1111_discuss_delete_button = page.locator('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)')
        this.ongoing_ndhp_lesson11_video1111_discuss_delete_popup = page.locator('div[class="modal-title h4"] div')
        this.ongoing_ndhp_lesson11_video1111_discuss_delete_confirm = page.locator('button[class="uni-btn-type-1 btn btn-primary"]')
        this.ongoing_ndhp_lesson11_video1111_discuss_edit_button = page.locator('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)')

        this.ongoing_ndhp_lesson11_slide1111_name = page.locator('div[aria-describedby="uni-tooltip"] div[class="uni-list-task__task-text--text-content change-to-period"]')
        this.ongoing_ndhp_lesson11_slide1111_uncheck = page.locator('div[aria-describedby="uni-tooltip"] img[alt="uni"]')

        this.ongoing_ndhp_lesson11_topicquiz1111_name = page.locator('div[aria-describedby="uni-tooltip"] div[class="uni-list-task__task-text--text-content change-to-period"]')
        this.ongoing_ndhp_lesson11_topicquiz1111_uncheck = page.locator('div[aria-describedby="uni-tooltip"] img[alt="uni"]')
        this.ongoing_ndhp_lesson11_topicquiz1111_number_of_question = page.locator('.uni-exercise-detail__intro-number-correct')
        this.ongoing_ndhp_lesson11_topicquiz1111_start_button = page.locator('button[type="button"]')
        this.ongoing_ndhp_lesson11_topicquiz1111_skip_button = page.locator('.uni-btn-type-2.btn.btn-primary.btn-lg')
        this.ongoing_ndhp_lesson11_topicquiz1111_skip_popup = page.locator('div[class="modal-title h4"] div')
        this.ongoing_ndhp_lesson11_topicquiz1111_skip_checkbox = page.locator('#default-checkbox')
        this.ongoing_ndhp_lesson11_topicquiz1111_skip_confirm = page.locator('button[class="uni-btn-type-1 btn btn-primary"]')
        this.ongoing_ndhp_lesson11_topicquiz1111_choose_answer = page.locator('#inline-single-choice-radio-0-1420')
        this.ongoing_ndhp_lesson11_topicquiz1111_verify_button = page.locator('.uni-btn-type-1.btn.btn-primary.btn-lg')
        this.ongoing_ndhp_lesson11_topicquiz1111_next_question = page.locator('button[type="button"]')
        this.ongoing_ndhp_lesson11_topicquiz1111_finish_button = page.locator('button[type="button"]')

        this.ongoing_ndhp_lesson11_taskassignment1111_name = page.locator('div[aria-describedby="uni-tooltip"] div[class="uni-list-task__task-text--text-content change-to-period"]')
        this.ongoing_ndhp_lesson11_taskassignment1111_uncheck = page.locator('div[aria-describedby="uni-tooltip"] img[alt="uni"]')
        this.ongoing_ndhp_lesson11_taskassignment1111_score = page.locator('.uni-score-card__score')
        this.ongoing_ndhp_lesson11_taskassignment1111_update = page.locator('div[class="col-12"] div[class="uni-task-card__content"]')
        this.ongoing_ndhp_lesson11_taskassignment1111_upload_file_area = page.locator('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)')

        this.ongoing_ndhp_lesson11_taskassignment1111_fileInput = page.locator('.inputfile')
        this.ongoing_ndhp_lesson11_taskassignment1111_success_upload = page.locator('.toast-body >> text=Nộp bài tập thành công')
        this.ongoing_ndhp_lesson11_taskassignment1111_oversize_upload = page.locator('.toast-body >> text=File tải lên quá dung lượng quy định')
        this.ongoing_ndhp_lesson11_taskassignment1111_format_upload = page.locator('.toast-body >> text=Định dạng không đúng, vui lòng nộp file khác')

        this.ongoing_ndhp_lesson11_next_task_icon = page.locator('.carousel-control-next-icon')
        this.ongoing_ndhp_lesson11_next_task_button = page.locator('.uni-btn-type-1.btn.btn-primary.btn-lg')
    }

    //Define methods
    //Go to page
    async gotoCoursePage() {
        await this.ongong_course_button.click()
    }

    //Check value
    getOngoingCourseMenuSubjectName() {
        return this.page.locator('div[class="uni-course-sidebar__current-course-link"] div:nth-child(2) div:nth-child(1)')
    }
    getOngoingCourseMenuNumberOfUnits() {
        return this.page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)')
    }
    getOngoingCourseDetailSubjectName() {
        return this.page.locator('div[class="uni-course-header-container--course-title"] h2')
    }
    getOngoingCourseDetailIconSCI() {
        return this.page.locator('img[alt="Thumbnail"][loading="lazy"][width="71"]')
    }
    getOngoingCourseSCIBanner() {
        return this.page.locator('.uni-course-container__sci-banner')
    }
    getOngoingCourseSCIScore() {
        return this.page.locator('.uni-course-container__sci-banner-content-special')
    }

    //Click tab Giới thiệu tổng quan
    async clickGTTQTab() {
        await this.ongoing_gttq_tab.click()
    }
    getOngoingGTTQDescription() {
        return this.page.locator('div[class="uni-dangerouslyHTML-support undefined"] p')
    }
    getOngoingGTTQStartTime() {
        return this.page.locator('div[class="uni-course-intro-container__start-date"] div:nth-child(2)')
    }
    getOngoingGTTQAttandanceCutoff() {
        return this.page.locator('div[class="uni-course-intro-container__attendance-cutoff-date"] div:nth-child(2)')
    }
    getOngoingGTTQEndTime() {
        return this.page.locator('div[class="uni-course-intro-container__end-date"] div:nth-child(2)')
    }

    getOngoingGTTQAvatarQLHT() {
        return this.page.locator('(//img[@alt="Avatar"])[2]')
    }
    getOngoingGTTQNameQLHT() {
        return this.page.locator('//div[normalize-space()="ThanhNP QLHT 34"]')
    }
    getOngoingGTTQEmailQLHT() {
        return this.page.locator('//div[normalize-space()="thanhnp+thanhnp.qlht34@onschool.edu.vn"]')
    }
    getOngoingGTTQPhoneQLHT() {
        return this.page.locator('//div[normalize-space()="34343434"]')
    }
    getOngoingGTTQAvatarGV() {
        return this.page.locator('(//img[@alt="Avatar"])[3]')
    }
    getOngoingGTTQNameGV() {
        return this.page.locator('//div[normalize-space()="ThanhNP GV 73"]')
    }
    getOngoingGTTQEmailGV() {
        return this.page.locator('//div[normalize-space()="thanhnp+gv73@onschool.edu.vn"]')
    }

    //Click tab lịch trình học tập
    async clickLTHTTab() {
        await this.ongoing_ltht_tab.click()
    }
    getOngoingLTHTDdescription() {
        return this.page.locator('div[class="uni-course-agenda-desktop"] th:nth-child(1)')
    }

    //Click tab nhiệm vụ học tập
    async clickNVHTTab() {
        await this.ongoing_nvht_tab.click()
    }
    getOngoingNVHTTodo() {
        return this.page.locator('.uni-course-content-container__learning-mision-tab-chosen')
    }
    getOngoingNVHTTodoTask() {
        return this.page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)')
    }
    async clickNVHTDoneTab() {
        await this.ongoing_nvht_done.click()
    }
    getOngoingNVHTDone() {
        return this.page.locator('(//div[@class="uni-course-content-container__learning-mision-tab-chosen"])[1]')
    }

    //Click tab phương pháp tính điểm
    async clickPPTDTab() {
        await this.ongoing_pptd_tab.click()
    }
    getOngoingPPTDFormula() {
        return this.page.locator('//div[@class="uni-score-detail__scoring-method-text"][contains(text(),"t thúc h")]')
    }
    async clickPPTDProgressGrade() {
        await this.ongoing_pptd_progress_grade.click()
    }
    getOngoingPPTDProgressGradeFormula() {
        return this.page.locator('//div[@class="uni-score-detail__cover-accordion-progress"]//div[5]')
    }
    getOngoingPPTDProgressGradeModeDescription() {
        return this.page.locator('div[class="uni-dangerouslyHTML-support uni-score-detail__scoring-method-content-progress--detail"] p')
    }
    getOngoingPPTDProgressGradeMidtermDescription() {
        return this.page.locator('div[class="uni-dangerouslyHTML-support uni-score-detail__scoring-method-content-progress--detail"] div[class="uni-process-grade__section-title"]')
    }
    async clickPPTDExamGrade() {
        await this.ongoing_pptd_exam_grade.click()
    }
    getOngoingPPTDExamGradeDescription() {
        return this.page.locator('div[class="uni-dangerouslyHTML-support undefined"] div[class="uni-process-grade__section-title"]')
    }

    //Click tab tài liệu tham khảo
    async clickTLTKTab() {
        await this.ongoing_tltk_tab.click()
    }
    getOngoingTLTKDescription() {
        return this.page.locator('label[for="references"]')
    }

    //Click tab nội dung học phần
    async clickNDHPTab() {
        await this.ongoing_ndhp_tab.click()
    }

    //Check hoạt động đề xuất
    getOngoingNDHPSuggestCover() {
        return this.page.locator('.uni-thumbnail__layout-cover')
    }
    getOngoingNDHPSuggestLesson() {
        return this.page.locator('.uni-unit-progress-container__task-name.change-to-period')
    }
    getOngoingNDHPSuggestButton() {
        return this.page.locator('div[class="uni-unit-progress-container__btn-task-inprogress"] button[type="button"]')
    }
    getOngoingNDHPProvisionalAttendanceGrade() {
        return this.page.locator('div[class="uni-course-header-container--course-completion--attendance"] span:nth-child(1)')
    }
    getOngoingNDHPProvisionalProgress() {
        return this.page.locator('div[class="uni-course-header-container--course-completion--completion-rate"] span:nth-child(1)')
    }
    getOngoingNDHPNumberOfUnits() {
        return this.page.locator('//div[@class="uni-course-content-container__description-subtitle"]//div[1]')
    }

    //Check unit1
    getOngoingNDHPUnit1() {
        return this.page.locator('a[href="/347/npt3103-khoa-hoc-npt31032025/unit-1-533"]')
    }
    getOngoingNDHPProgressOfUnit1() {
        return this.page.locator('//body/div[@class="layout-app-container"]/div/div[@class="uni-layout-student__course"]/div[@class="uni-course-container"]/div[@class="uni-course-content-container"]/div[@class="uni-course-content-container__description"]/div/div[@class="uni-accordion accordion"]/div[1]/h2[1]/button[1]/div[1]/div[1]/div[2]/div[1]')
    }
    async clickUnitExpandButton() {
        await this.ongoing_ndhp_expand.click()
    }
    getOngoingNDHPLesson11() {
        return this.page.locator('//div[@class="uni-unit-lesson__title"][normalize-space()="Lesson1.1"]')
    }
    getOngoingNDHPLesson12SCIIcon() {
        return this.page.locator('//div[contains(text(),"Lesson1.2")]')
    }
    getOngoingNDHPUnitquiz1() {
        return this.page.locator('//div[@class="accordion-collapse collapse show"]//div[3]//a[1]//div[1]')
    }

    //Check KTTN1
    getOngoingNDHPKTTN1Name() {
        return this.page.locator('a[href="/347/course-slug/unit-slug/lesson-slug/3114"]')
    }
    getOngoingNDHPKTTN1SCIIcon() {
        return this.page.locator('(//img[@alt="Thumbnail"])[6]')
    }
    getOngoingNDHPKTTN1Deadline() {
        return this.page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h2:nth-child(1) > button:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)')
    }
    async clickKTTN1ExpandButton() {
        await this.ongoing_ndhp_kttn1_expand.click()
    }
    getOngoingNDHPKTTN1Format() {
        return this.page.locator('//div[@class="accordion-collapse collapse show"]//div[contains(text(),"Trắc nghiệm")]')
    }
    getOngoingNDHPKTTN1Times() {
        return this.page.locator('//div[@class="accordion-collapse collapse show"]//div[contains(text(),"Không giới hạn")]')
    }
    getOngoingNDHPKTTN1Button() {
        return this.page.locator('div[class="accordion-collapse collapse show"] button[type="button"]')
    }

    //Check KTTL1
    getOngoingNDHPKTTL1Name() {
        return this.page.locator('a[href="/347/course-slug/unit-slug/lesson-slug/3115"]')
    }
    getOngoingNDHPKTTL1Deadline() {
        return this.page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > h2:nth-child(1) > button:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)')
    }
    async clickKTTL1ExpandButton() {
        await this.ongoing_ndhp_kttl1_expand.click()
    }
    getOngoingNDHPKTTL1Format() {
        return this.page.locator('div[class="accordion-collapse collapse show"] div[class="col-xl-9 col-12"] div:nth-child(2)')
    }
    getOngoingNDHPKTTL1Button() {
        return this.page.locator('div[class="accordion-collapse collapse show"] button[type="button"]')
    }

    //Check LTTTTN1
    getOngoingNDHPLTTTTN1Name() {
        return this.page.locator('a[href="/347/course-slug/unit-slug/lesson-slug/3118"]')
    }
    async clickKLTTTTN1ExpandButton() {
        await this.ongoing_ndhp_lttttn1_expand.click()
    }
    getOngoingNDHPLTTTTN1Format() {
        return this.page.locator('div[class="accordion-collapse collapse show"] div[class="uni-unit-exercise__formality"] div:nth-child(2)')
    }
    getOngoingNDHPLTTTTN1Times() {
        return this.page.locator('div[class="accordion-collapse collapse show"] div[class="uni-unit-exercise__attempt"] div:nth-child(2)')
    }
    getOngoingNDHPLTTTTN1Button() {
        return this.page.locator('div[class="accordion-collapse collapse show"] button[type="button"]')
    }

    //Check LTTTTL1
    getOngoingNDHPLTTTTL1Name() {
        return this.page.locator('a[href="/347/course-slug/unit-slug/lesson-slug/3119"]')
    }
    getOngoingNDHPLTTTTL1SCIIcon() {
        return this.page.locator('(//img[@alt="Thumbnail"])[8]')
    }
    async clickLTTTTL1ExpandButton() {
        await this.ongoing_ndhp_lttttl1_expand.click()
    }
    getOngoingNDHPLTTTTL1Format() {
        return this.page.locator('(//div[contains(text(),"Nộp tài liệu")])[4]')
    }
    getOngoingNDHPLTTTTL1Button() {
        return this.page.locator('div[class="accordion-collapse collapse show"] button[type="button"]')
    }
}