// without closures
// Q7: make this(likeTheVideo function) run only once

let view;
let called = 0;
function likeTheVideo() {
  view = "Coder";
  console.log("Subscribe to", view, "called", ++called, "times");
}

likeTheVideo();
likeTheVideo();
likeTheVideo();
likeTheVideo();
likeTheVideo();
