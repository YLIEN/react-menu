export function unique(arr) {
    
    if (!Array.isArray(arr)) {
        return
    } else if (arr.length === 0 ) {
        return arr
    } else {
        let res = [arr[0]]
        for (let i = 1; i < arr.length; i++) {
            let flag = true
            for (let j = 0; j < res.length; j++) {
                if (arr[i] === res[j]) {
                    flag = false;
                    break
                }
            }
            if (flag) {
                res.push(arr[i])
            }
        }
        return res
    }
}
