const os=require('os')
//info about currrent end user
const user=os.userInfo()
console.log(user)
//syste unptime
console.log(`THE SYSTEM UPTIMe is ${os.uptime()} seconds`)
//current os
const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
}
console.log(currentOS)