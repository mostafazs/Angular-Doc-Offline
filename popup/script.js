 /*
 * Run this snippet on https://angular.io or https://next.angular.io to let the ServiceWorker
 * cache all content (guides, API docs, etc.) and make it available for offline access.
 *
 * DISCLAIMER:
 * It's a hack. Not officially supported. Use at your own risk.
 * Works for me, but may not work for you (or it may stop working in the future). 
 */
function onExecuted(result) {
  console.log(`Excuted`);
}
function onError(error) {
  console.log(`Error: ${error}`);
}

console.log("Start");
const executing = browser.tabs.executeScript({
  file: "/popup/content-script.js",
  allFrames: true
});
executing.then(onExecuted, onError);

