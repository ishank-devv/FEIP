// without closures
// Q7: make this(likeTheVideo function) run only once

let view;

function likeTheVideo() {
  let called = 0;

  return function () {
    if (called > 0) {
      console.log("Already Subscribed to Coder");
    } else {
      view = "Coder";
      console.log("Subscribe to", view, " called ", ++called, "times");
      //   ++called;
    }
  };
}

let isSubscribed = likeTheVideo();
isSubscribed();
isSubscribed();
isSubscribed();
isSubscribed();

let isSubscribed2 = likeTheVideo();
isSubscribed2();
isSubscribed2();
isSubscribed2();
