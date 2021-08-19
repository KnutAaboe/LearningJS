"use strict"

let items = [200, 201, 202, 203]

function preppOrder(order) {
    return new Promise((resolve, reject) => {
        console.log("Looking for right order")
        if (order === items[0]){
            resolve(order);
        } else {
            reject("Chosen order is not first in line")
        }
    })
}

function sendOrder(response) {
    console.log("Found and prepping")
    return new Promise((resolve, reject) => {
        resolve("Send order: " + response);
        items.pop();
    })
}

// preppOrder(200).then(order => {
//     return sendOrder(order)}).then(sentOrder => {
//         console.log(sentOrder);
//     }).catch(error => {
//         console.log(error)
//     })


async function doAsync() {
    try {
        const response = await preppOrder(200)
        const sentOrder = await sendOrder(response)
        console.log(sentOrder)
    } catch (error) {
        console.log(error)
    }
}

doAsync();