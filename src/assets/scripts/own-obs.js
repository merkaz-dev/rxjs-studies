import { Observable } from "rxjs";
import { map, shareReplay, tap } from "rxjs/operators";
import { getCoursesUrl, getCourseByIdUrl, updateCourseUrl } from "./urls";

function getHttpObsAllCourses() {
  return new Observable((observer) => {
    fetch(getCoursesUrl())
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        observer.next(res);
        observer.complete();
      })
      .catch((err) => {
        observer.error(err);
      });
  }).pipe(
    map((v) => Object.values(v["payload"])),
    shareReplay()
  );
}

function getHttpObsSingleCourse(courseId) {
  return new Observable((observer) => {
    fetch(getCourseByIdUrl(courseId))
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log("RESULT", result);
        observer.next(result);
        observer.complete();
      })
      .catch((err) => {
        observer.error(err);
      });
  }).pipe(
    map((v) => {
      return v["payload"];
    }),
    tap((v) => {
      console.log("TAP", v);
    })
  );
}

function updateHttpObsSingleCourse(data) {
  return new Observable((observer) => {
    fetch(updateCourseUrl(), {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        observer.next(result);
        observer.complete();
      })
      .catch((err) => {
        observer.error(err);
      });
  });
}
async function postData(url, data) {
  // Default options are marked with *
  const response = await fetch(updateCourseUrl(), {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}
export {
  getHttpObsAllCourses,
  getHttpObsSingleCourse,
  updateHttpObsSingleCourse,
  postData,
};
