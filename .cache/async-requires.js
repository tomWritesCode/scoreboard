// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/Users/thomaswhitaker/Desktop/Code/Basketball/scoreboard/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/thomaswhitaker/Desktop/Code/Basketball/scoreboard/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/thomaswhitaker/Desktop/Code/Basketball/scoreboard/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-scoreboard-js": () => import("/Users/thomaswhitaker/Desktop/Code/Basketball/scoreboard/src/pages/scoreboard.js" /* webpackChunkName: "component---src-pages-scoreboard-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/thomaswhitaker/Desktop/Code/Basketball/scoreboard/.cache/data.json")

