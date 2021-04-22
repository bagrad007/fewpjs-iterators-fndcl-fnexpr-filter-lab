function findMatching(drivers, str) {

    let driversList = drivers.filter(n => {
        if (n === str) {
            return n
        } else if (n.toLowerCase() === str.toLowerCase()) {
            return n
        }
    })
    return driversList
}


function fuzzyMatch(drivers, str) {
    let match = drivers.filter(n => {

        if (n[0] === str[0]) {
            return n
        } else if (n[0].toLowerCase() === str[0].toLowerCase()) {
            return n
        }
    })

    return match
}

function matchName(drivers, str) {
    let driversList = drivers.filter(n => {
        if (n.name === str) {
            return n.name
        } else if (n.name.toLowerCase() === str.toLowerCase()) {
            return n
        }
    })
    return driversList
}