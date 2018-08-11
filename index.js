const hooker = require('./build/Debug/nexthooker')

// testing まほ×ろば -Witches spiritual home-
const PID = 23092 //pid of game
const H_CODE = '/HWN-4@83AAB:mahoXroba.exe' //H-CODE

hooker.start()
hooker.onProcessDetach((pid) => { console.log(`process detached: ${pid}`) })
hooker.onProcessAttach((pid) => { console.log(`process attached: ${pid}`) })
hooker.onThreadCreate(
    (ts) => { console.log(`thread create: ${ts}`) },
    (ts, text) => { console.log(`get text '${text}' from thread: ${ts}`) }
)
hooker.onThreadRemove((ts) => { console.log(`thread removed: ${ts}`) })
hooker.open()
hooker.injectProcess(PID)
setTimeout(() => {
    hooker.insertHook(PID, H_CODE)
}, 1000);
