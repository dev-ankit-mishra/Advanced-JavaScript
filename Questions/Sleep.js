//ProblemLink-https://leetcode.com/problems/sleep/submissions/1591282699/?envType=study-plan-v2&envId=30-days-of-javascript
/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((resolve,reject)=>{
        setTimeout(
            ()=>resolve(10),millis
        )
    })
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */