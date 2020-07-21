function getUrls(startDate, endDate) {
  return `https://webhooks.mongodb-stitch.com/api/client/v2.0/app/wikistorestitchapp-vgkfz/service/wikiStoreStats/incoming_webhook/s_ch_2_clicks_by_sellers?startDate=${startDate}&endDate=${endDate}&secret=wikistore`;
}

function getCoursesUrl() {
  return "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/rxjs-studies-backend-bhupb/service/RxJsServcies/incoming_webhook/s_01_get_courses?secret=rxjs";
}

function getCourseByIdUrl(courseId) {
  return `https://webhooks.mongodb-stitch.com/api/client/v2.0/app/rxjs-studies-backend-bhupb/service/RxJsServcies/incoming_webhook/s_02_get_course_by_id?secret=rxjs&courseId=${courseId}`;
}

function updateCourseUrl() {
  return "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/rxjs-studies-backend-bhupb/service/RxJsServcies/incoming_webhook/s_03_edit_course?secret=rxjs";
}

function getLessonsBySearchExpression(search) {
  return `https://webhooks.mongodb-stitch.com/api/client/v2.0/app/rxjs-studies-backend-bhupb/service/RxJsServcies/incoming_webhook/s_04_search_lessons_by_expression?search=${search}&secret=rxjs`;
}

function getLessonsUrl() {
  return `https://webhooks.mongodb-stitch.com/api/client/v2.0/app/rxjs-studies-backend-bhupb/service/RxJsServcies/incoming_webhook/s_05_get_lessons?secret=rxjs`;
}

function getUserByEmail(email) {
  return `https://webhooks.mongodb-realm.com/api/client/v2.0/app/rxjs-studies-backend-bhupb/service/RxJsServcies/incoming_webhook/s_06_get_user_by_email?secret=rxjs&email=${email}`;
}
export {
  getUrls,
  getLessonsUrl,
  getCoursesUrl,
  getUserByEmail,
  updateCourseUrl,
  getCourseByIdUrl,
  getLessonsBySearchExpression,
};
