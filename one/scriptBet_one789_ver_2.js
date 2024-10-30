// 10.000.000
let currentMoney = 0;

let capitalVirtualBan1 = 0;
let capitalVirtualBan2 = 0;

let capitalRealBan1 = 0;
let capitalRealBan2 = 0;

let maxProfitVirtualBan1 = -100_000_000;
let minProfitVirtualBan1 = 100_1000_000;

let maxProfitVirtualBan2 = -100_000_000;
let minProfitVirtualBan2 = 100_1000_000;

let currentMoneyVirtualBan1 = 0;
let currentMoneyVirtualBan2 = 0;

let currentMoneyRealBan1 = 0;
let currentMoneyRealBan2 = 0;

let betBan2Virtual = 0;
let betBan1Virtual = 0;

let betVirtualBan1 = true;
let betVirtualBan2 = true;

let diffThreadHoldAbove = -250_000;

let currentProfitTmpVirtualBan1 = 0;
let currentProfitTmpVirtualBan2 = 0;

let beforeProfitVirtualBan1 = 0;
let beforeProfitVirtualBan2 = 0;

let threadHoldStartAboveReal = 400_000;
let threadHoldStartBelowReal = -1_000_000;

let maxProfitRealBan1 = 0;
let maxProfitRealBan2 = 0;

// let CODE_ROUND = "TEST-10-2-1";
let CODE_ROUND = "ACTION-10-2-2141100";

const maxBetTime = 968;
let betTime = 0;

let reverseBetBan1 = false;
let reverseBetBan2 = false;

let lastValueBan2 = -1;
let lastValueBan1 = -1;

let betValueBan2 = -1;
let betValueBan1 = -1;

let chuoiCauBan2 = 1;
let chuoiCauBan1 = 1;

const tyLeCuocBth = 100_000;

let numberChanBan1 = -1;
let numberLeBan1 = -1;

let numberChanBan2 = -1;
let numberLeBan2 = -1;

let roundBan1 = 0;
let roundBan2 = 0;
let allowBetBan1 = false;
let allowBetBan2 = false;

let beforeCurrentTotalProfit = 0;
let currentTotalProfit = 0;
let startCapital = 0;
let threadHoldEndTotal = 3_000_000;
let isStop = false;

let lastChuoiCauBan1 = -1;
let lastChuoiCauBan2 = -1;


let isReadyBan1 = false;
let isReadyBan2 = false;

// let isStartBan1 = false;
// let isStartBan2 = false;

let chuoiWinBan1 = 0;
let chuoiWinBan2 = 0;

let tyLeNhanBan1 = 1;
let tyLeNhanBan2 = 1;

let maxBelowDiffBan1 = 0;
let maxBelowDiffBan2 = 0;

let maxAboveDiffBan1 = 0;
let maxAboveDiffBan2 = 0;

let tyLeNhanBan1Random = 1;
let tyLeNhanBan2Random = 1;


let isShortTermBan1 = 1; // 1 là ngắn thường, 2 là ngắn thếp, 3 là dài
let isShortTermBan2 = 1;

let tyLeCuocBan1FromServer = 0;
let tyLeCuocBan2FromServer = 0;

const isTest = false;

let takeProfitReal = 2_000_000; // ngưỡng dừng khi đạt đủ lời
let stopLossReal = -25_000_000; // ngưỡng dừng khi tới điểm lỗ

let threadHoldStopBan1 = 2_000_000; // ngưỡng dừng bàn 1 2_200_000 - 2_950_000
let threadHoldStopBan2 = 2_000_000; // ngường dừng bàn 2

let threadHold = 2_000_000;
let threadHoldTop = 200_500_000;
let threadHoldUpdateBan1 = 0;
let threadHoldUpdateBan2 = 0;

const tyLeTraThuong = 1.96;

function sleep(ms) {
    return new Promise((resolveFunc) => setTimeout(resolveFunc, ms));
}

function getStringTerm(value) {
    value = parseInt(value);
    if (value === 1) {
        return "Ngắn thường";
    } else if (value === 2) {
        return "Ngắn thếp";
    } else if (value === 3) {
        return "Dài";
    }
}

// function getFibonacci(n) {
//     if (n <= 1) {
//         return n;
//     } else {
//         return getFibonacci(n - 1) + getFibonacci(n - 2);
//     }
// }

function createDateTimeString() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // tháng bắt đầu từ 0
    const day = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    return `${year}${padZero(month)}${padZero(day)}${padZero(hour)}${padZero(minute)}${padZero(second)}`;
}

function padZero(value) {
    return (value < 10 ? '0' : '') + value;
}

// Hàm để chuyển đổi phần tử thành chuỗi hình ảnh

async function cuocBan1() {
    if (lastValueBan1 !== -1) {
        // mặc định
        let tyLeCuocBan1 = 0;
        reverseBetBan1 = isShortTermBan1 === 3;

        // if (chuoiCauBan1 === 1) {
        //     tyLeCuocBan1 = 1;
        // }

        if (chuoiCauBan1 === 1) {
            tyLeCuocBan1 = 1;
        } else if (chuoiCauBan1 === 2) {
            tyLeCuocBan1 = isShortTermBan1 === 2 ? 2 : 1;
        }
        // else if (chuoiCauBan1 === 3) {
        //     tyLeCuocBan1 = isShortTermBan1 ? 0 : 1;
        // }
        else if (chuoiCauBan1 >= 3) {
            reverseBetBan1 = true;
            tyLeCuocBan1 = 1;
        }

        tyLeCuocBan1 = tyLeCuocBan1 * tyLeCuocBan1FromServer;

        if (roundBan1 <= 2 || roundBan1 > 99) {
            tyLeCuocBan1 = 0;
            console.log("Skip bàn 1 round: " + roundBan1);
        }

        betValueBan1 = reverseBetBan1 ? (lastValueBan1 === 1 ? 1 : 0) : (lastValueBan1 === 1 ? 0 : 1);

        // cược ảo
        betBan1Virtual = tyLeCuocBan1 * tyLeCuocBth;
        currentMoneyVirtualBan1 -= betBan1Virtual;

        if (isReadyBan1) {
            currentMoneyRealBan1 -= betBan1Virtual;

            betTime++;
        }

        if (betVirtualBan1) {
            console.log(`Bet Bàn 1 [${chuoiWinBan1}] x${tyLeCuocBan1} {${tyLeNhanBan1}} ${betValueBan1 === 1 ? "Chẵn" : "Lẻ"} virtual cầu ${chuoiCauBan1}: ${betBan1Virtual.toLocaleString()}`);
            // return;
        }

        if (isTest) {
            return;
        }

        if (!isReadyBan1) {
            console.log(`Skip real round ${roundBan1}. Đợi ván mới bàn 1: ` + new Date().toLocaleString("vi-VN"));
            return;
        }

        if (tyLeCuocBan1 === 0) {
            console.log(`Skip. Ty le cuoc = 0. Chuoi: ${chuoiCauBan1}`);

            betValueBan1 = lastValueBan1;

            return;
        }

        // return;

        let action = "";

        // set về giá mặc định cây đầu 100k
        let btnChip = "";
        if (tyLeCuocBth === 20_000) {
            btnChip = document.getElementsByClassName("chip 20k")[0];
        } else if (tyLeCuocBth === 50_000) {
            btnChip = document.getElementsByClassName("chip 50k")[0];
        } else if (tyLeCuocBth === 100_000) {
            btnChip = document.getElementsByClassName("chip 100k")[0];
        }
        btnChip.click();

        const sleepTag1 = await sleep(500);

        const evenBtn = document.getElementsByClassName("even")[0];
        const oddBtn = document.getElementsByClassName("odd")[0];

        const btn = reverseBetBan1 ? (lastValueBan1 === 1 ? evenBtn : oddBtn) : (lastValueBan1 === 1 ? oddBtn : evenBtn);

        action = betValueBan1 === 1 ? "Chẵn" : "Lẻ";

        const betAmount = (tyLeCuocBan1 * tyLeCuocBth).toLocaleString();

        const logData = {
            "Cược Bàn 1": {
                đặt: action,
                cầu: chuoiCauBan1,
                "tỉ lệ cược": "x" + tyLeCuocBan1,
                "tiền cược": betAmount,
            },
        };

        for (let i = 0; i < tyLeCuocBan1; i++) {
            btn.click();
            const sleepTag = await sleep(200);
        }

        console.table(logData);

        const sleepTag2 = await sleep(500);
        const btnBet = document.getElementsByClassName(
            "md-btn-betting"
        )[0];
        btnBet.click();

        const sleepTag3 = await sleep(500);
        // var btnReturn = document.getElementsByClassName("el-button el-button--primary")[4];
        // btnReturn.click();

    } else {
        console.log("Skip");
    }
}

async function cuocBan2() {
    if (lastValueBan2 !== -1) {


        // mặc định
        let tyLeCuocBan2 = 0;
        reverseBetBan2 = isShortTermBan2 === 3;

        // if (chuoiCauBan2 === 1) {
        //     tyLeCuocBan2 = 1;
        // }


        if (chuoiCauBan2 === 1) {
            tyLeCuocBan2 = 1;
        } else if (chuoiCauBan2 === 2) {
            tyLeCuocBan2 = isShortTermBan2 === 2 ? 2 : 1;
        }
        // else if (chuoiCauBan2 === 3) {
        //     tyLeCuocBan2 = isShortTermBan2 ? 0 : 1;
        // }
        else if (chuoiCauBan2 >= 3) {
            reverseBetBan2 = true;
            tyLeCuocBan2 = 1;
        }

        tyLeCuocBan2 = tyLeCuocBan2 * tyLeCuocBan2FromServer;

        if (roundBan2 <= 2 || roundBan2 > 99) {
            tyLeCuocBan2 = 0;
            console.log("Skip bàn 2 round: " + roundBan2);
        }

        betValueBan2 = reverseBetBan2 ? (lastValueBan2 === 1 ? 1 : 0) : (lastValueBan2 === 1 ? 0 : 1);

        // cược ảo
        betBan2Virtual = tyLeCuocBan2 * tyLeCuocBth;
        currentMoneyVirtualBan2 -= betBan2Virtual;

        if (isReadyBan2) {
            currentMoneyRealBan2 -= betBan2Virtual;

            betTime++;
        }

        if (betVirtualBan2) {
            console.log(`Bet Bàn 2 [${chuoiWinBan2}] x${tyLeCuocBan2} {${tyLeNhanBan2}} ${betValueBan2 === 1 ? "Chẵn" : "Lẻ"} virtual cầu ${chuoiCauBan2}: ${betBan2Virtual.toLocaleString()}`);
            // return;
        }

        if (isTest) {
            return;
        }

        if (!isReadyBan2) {
            console.log(`Skip real round ${roundBan2}. Đợi ván mới bàn 2: ` + new Date().toLocaleString("vi-VN"));
            return;
        }

        if (tyLeCuocBan2 === 0) {
            console.log(`Skip. Ty le cuoc = 0. Chuoi: ${chuoiCauBan2}`);

            betValueBan2 = lastValueBan2;

            return;
        }

        // return;

        let action = "";

        // set về giá mặc định cây đầu 100k
        let btnChip = "";
        if (tyLeCuocBth === 20_000) {
            btnChip = document.getElementsByClassName("chip 20k")[0];
        } else if (tyLeCuocBth === 50_000) {
            btnChip = document.getElementsByClassName("chip 50k")[0];
        } else if (tyLeCuocBth === 100_000) {
            btnChip = document.getElementsByClassName("chip 100k")[0];
        }
        btnChip.click();

        const sleepTag1 = await sleep(500);

        const evenBtn = document.getElementsByClassName("even")[2];
        const oddBtn = document.getElementsByClassName("odd")[2];

        const btn = reverseBetBan2 ? (lastValueBan2 === 1 ? evenBtn : oddBtn) : (lastValueBan2 === 1 ? oddBtn : evenBtn);

        action = betValueBan2 === 1 ? "Chẵn" : "Lẻ";

        const betAmount = (tyLeCuocBan2 * tyLeCuocBth).toLocaleString();

        const logData = {
            "Cược Bàn 2": {
                đặt: action,
                cầu: chuoiCauBan2,
                "tỉ lệ cược": "x" + tyLeCuocBan2,
                "tiền cược": betAmount,
            },
        };

        for (let i = 0; i < tyLeCuocBan2; i++) {
            btn.click();
            const sleepTag = await sleep(200);
        }

        console.table(logData);

        const sleepTag2 = await sleep(500);
        const btnBet = document.getElementsByClassName(
            "md-btn-betting"
        )[1];
        btnBet.click();

        const sleepTag3 = await sleep(500);
        // var btnReturn = document.getElementsByClassName("el-button el-button--primary")[4];
        // btnReturn.click();

    } else {
        console.log("Skip");
    }
}

function resetBan1() {
    const money = document.getElementsByClassName("game-round ng-binding");
    currentMoney = money[0].textContent;
    currentMoney = currentMoney.replaceAll(",", "");

    // capitalRealBan1 = parseFloat(currentMoney);
    // currentMoneyRealBan1 = parseFloat(currentMoney);

    capitalVirtualBan1 = parseFloat(currentMoney);
    currentMoneyVirtualBan1 = parseFloat(currentMoney);
    maxProfitVirtualBan1 = 0;
    minProfitVirtualBan1 = 0;
}

function resetBan2() {
    const money = document.getElementsByClassName("game-round ng-binding");
    currentMoney = money[0].textContent;
    currentMoney = currentMoney.replaceAll(",", "");
    //
    // capitalRealBan2 = parseFloat(currentMoney);
    // currentMoneyRealBan2= parseFloat(currentMoney);

    capitalVirtualBan2 = parseFloat(currentMoney);
    currentMoneyVirtualBan2 = parseFloat(currentMoney);
    maxProfitVirtualBan2 = 0;
    minProfitVirtualBan2 = 0;
}


async function checkProfitVirtualBan1(newValue) {
    const betValueBan1Virtual = newValue;
    if (betValueBan1 !== -1) {
        beforeProfitVirtualBan1 = currentMoneyVirtualBan1;
        if (betValueBan1Virtual === betValueBan1) {
            const type = betValueBan1 === 1 ? "Chẵn" : "Lẻ";
            console.log("%cWin Virtual Bàn 1 " + type + ": " + (betBan1Virtual * tyLeTraThuong).toLocaleString(), 'color: green');
            currentMoneyVirtualBan1 += (betBan1Virtual * tyLeTraThuong);

            if (isReadyBan1) {
                currentMoneyRealBan1 += (betBan1Virtual * tyLeTraThuong);
            }


        } else {


        }
    }

    const currentProfitVirtualBan1 = parseFloat(currentMoneyVirtualBan1) - capitalVirtualBan1;
    console.log(`%cBàn 1 - ${isReadyBan1 ? "Real" : "Virtual"}: ${(currentProfitVirtualBan1).toLocaleString()} at ${new Date().toLocaleTimeString("vi-VN")}`,
        'font-weight:normal; font-size:20px;color:green; background-color:#FFE5B4');

    if (beforeProfitVirtualBan1 === currentMoneyVirtualBan1) {
        tyLeNhanBan1Random *= 2;
        if (tyLeNhanBan1Random > 4) {
            tyLeNhanBan1Random = 1;
        }
    } else {
        tyLeNhanBan1Random = 1;
    }

    // if (threadHoldUpdateBan1 === 0) {
    //     threadHoldUpdateBan1 = currentProfitVirtualBan1 - (threadHold);
    // }
    //
    // if (currentProfitVirtualBan1 - threadHoldUpdateBan1 > (threadHold)) {
    //     threadHoldUpdateBan1 = currentProfitVirtualBan1 - (threadHold);
    // }
    //
    // if (currentProfitVirtualBan1 < threadHoldUpdateBan1 && currentProfitVirtualBan1 !== 0 && tyLeCuocBan1FromServer !== 0) {
    //     console.log("Bàn 1 âm 2tr: " + currentProfitVirtualBan1.toLocaleString() + " - " + new Date().toLocaleTimeString("vi-VN"));
    //     threadHoldUpdateBan1 -= (threadHold * tyLeCuocBan1FromServer);
    //
    //     if (chuoiCauBan1 !== -2) {
    //         const sendMsgTag = await sendMsg(CODE_ROUND + "termBan1", !isShortTermBan1 ? 1 : 2);
    //     }
    // }

    if (currentProfitVirtualBan1 >= threadHoldStopBan1) {

        const noti1 = await notifyTelegram(`Bàn 1 đã đạt ngưỡng dương: ${threadHoldStopBan1.toLocaleString()}. Vui lòng kiểm tra tại: http://18.182.62.197:4000/one/?exchange=${CODE_ROUND}`);
        const sendMsgTag = await sendMsg(CODE_ROUND + "betBan1", 0);
        threadHoldStopBan1 += threadHold;
        const noti2 = await notifyTelegram(`Ngưỡng chốt lời mới bàn 1 tăng thành: ${threadHoldStopBan1.toLocaleString()}. Vui lòng kiểm tra tại: http://18.182.62.197:4000/one/?exchange=${CODE_ROUND}`);
    }

    if (currentProfitVirtualBan1 <= ((-2) * threadHoldStopBan1)) {

        // const noti = await notifyTelegram(`Bàn 1 đã đạt ngưỡng âm: ${((-2) * threadHoldStopBan1).toLocaleString()}. Vui lòng kiểm tra tại: http://18.182.62.197:4000/one/?exchange=${CODE_ROUND}`);
        // // const sendMsgTag = await sendMsg(CODE_ROUND + "betBan1", 0);
        // const sendMsgTag = await sendMsg(CODE_ROUND + "termBan1", !isShortTermBan1 ? 1 : 2);
        // threadHoldStopBan1 += takeProfitReal;
    }

    if (currentProfitVirtualBan1 > maxProfitVirtualBan1) {
        maxProfitVirtualBan1 = currentProfitVirtualBan1;

        tyLeNhanBan1 = 1;
    }

    if (currentProfitVirtualBan1 < minProfitVirtualBan1) {
        minProfitVirtualBan1 = currentProfitVirtualBan1;
    }

    if (currentProfitVirtualBan1 - minProfitVirtualBan1 > threadHoldTop) {
        console.log("Bàn 1 đạt 3tr: " + currentProfitVirtualBan1.toLocaleString() + " - " + new Date().toLocaleTimeString("vi-VN"));
        minProfitVirtualBan1 = currentProfitVirtualBan1;

        // if (chuoiCauBan1 !== -2) {
        //     const sendMsgTag = await sendMsg(CODE_ROUND + "termBan1", !isShortTermBan1 ? 1 : 2);
        // }
    }

    // if (currentProfitVirtualBan1 - beforeProfitVirtualBan1 <= diffThreadHoldAbove) {
    //     currentProfitTmpVirtualBan1 = currentProfitVirtualBan1;
    // }

    const diffAbove = currentProfitVirtualBan1 - minProfitVirtualBan1;

    if (diffAbove > maxAboveDiffBan1) {
        maxAboveDiffBan1 = diffAbove;
    }

    const diffBelow = currentProfitVirtualBan1 - maxProfitVirtualBan1;

    if (diffBelow < maxBelowDiffBan1) {
        maxBelowDiffBan1 = diffBelow;
    }

    if (diffBelow <= threadHoldStartBelowReal) {
        if (!isReadyBan1 && tyLeNhanBan1 >= 3 && chuoiCauBan1 === 1 && chuoiWinBan1 === 1) {
            maxProfitVirtualBan1 = currentProfitVirtualBan1
            isReadyBan1 = true;
            tyLeNhanBan1 = 1;

            for (let i = 0; i < 10; i++) {
                const sendMsgTag = await sendMsg(CODE_ROUND + "Ban1", i);
            }

            resetBan1();
        }
    }

    // if (currentProfitVirtualBan1 >= takeProfitReal * 10) {
    //     if (isReadyBan1) {
    //         console.log("Chốt lời Bàn 1: " + currentProfitVirtualBan1.toLocaleString());
    //         isReadyBan1 = false;
    //         tyLeNhanBan1 = 1;
    //         // isStartBan1 = false;
    //         for (let i = 0; i < 10; i++) {
    //             const sendMsgTag = await sendMsg(CODE_ROUND + "Ban1", i);
    //         }
    //         resetBan1();
    //     }
    //
    // }

    if (betVirtualBan1 && (lastChuoiCauBan1 >= 50)) {
        console.log("betVirtualBan1: " + betVirtualBan2);
        console.log("lastChuoiCauBan1 >= 5: " + (lastChuoiCauBan1 >= 5));

        betVirtualBan1 = false;
        console.log("Start real Bàn 1");

        const money = document.getElementsByClassName("game-round ng-binding");
        currentMoney = money[0].textContent;
        currentMoney = currentMoney.replaceAll(",", "");

        capitalRealBan1 = parseFloat(currentMoney);
        currentMoneyRealBan1 = parseFloat(currentMoney);
        maxProfitRealBan1 = 0;

        currentProfitTmpVirtualBan1 = 0;

        currentMoneyVirtualBan1 = parseFloat(currentMoney);
        maxProfitVirtualBan1 = 0;
        minProfitVirtualBan1 = 0;
    } else {
        console.table({
            "Bàn virtual": 1 + " - " + getStringTerm(isShortTermBan1),
            "----": `[${tyLeNhanBan1}]---------${lastChuoiCauBan1}------${chuoiCauBan1}----`,
            "Current profit": currentProfitVirtualBan1.toLocaleString(),
            "Thread hold": threadHoldUpdateBan1.toLocaleString(),
            "Thread hold top": (threadHoldTop + minProfitVirtualBan1).toLocaleString(),
            // "Current tmp profit": currentProfitTmpVirtualBan1.toLocaleString(),
            // " ----- ": "--------------------",
            // "Max profit": maxProfitVirtualBan1.toLocaleString(),
            // "Min profit": minProfitVirtualBan1.toLocaleString(),
            // " ---.--- ": "--------------------",
            // "Max Above Diff": maxAboveDiffBan1.toLocaleString(),
            // "Max Below Diff": maxBelowDiffBan1.toLocaleString(),
            // " ---- ": "-------------------",
            // "Diff Above": diffAbove.toLocaleString(),
            // "Diff Below": diffBelow.toLocaleString(),
        });
        beforeProfitVirtualBan1 = currentProfitVirtualBan1;
    }

    const sendMsgTag = await sendMsg(CODE_ROUND + "Ban1", currentProfitVirtualBan1);

    if (isReadyBan1) {
        const sendMsgTag = await sendMsg(CODE_ROUND + "cauBan1", currentProfitVirtualBan1);
    }

    allowBetBan1 = true;
}

async function checkProfitVirtualBan2(newValue) {
    const betValueBan2Virtual = newValue;
    if (betValueBan2 !== -1) {
        beforeProfitVirtualBan2 = currentMoneyVirtualBan2;
        if (betValueBan2Virtual === betValueBan2) {
            const type = betValueBan2 === 1 ? "Chẵn" : "Lẻ";
            console.log("%cWin Virtual Bàn 2 " + type + ": " + (betBan2Virtual * tyLeTraThuong).toLocaleString(), 'color: blue');
            currentMoneyVirtualBan2 += (betBan2Virtual * tyLeTraThuong);

            if (isReadyBan2) {
                currentMoneyRealBan2 += (betBan2Virtual * tyLeTraThuong);
            }

        } else {


        }
    }

    const currentProfitVirtualBan2 = parseFloat(currentMoneyVirtualBan2) - capitalVirtualBan2;
    console.log(`%cBàn 2 - ${isReadyBan2 ? "Real" : "Virtual"}: ${(currentProfitVirtualBan2).toLocaleString()} at ${new Date().toLocaleTimeString("vi-VN")}`,
        'font-weight:normal; font-size:20px;color:blue; background-color:#FFE5B4');

    if (beforeProfitVirtualBan2 === currentMoneyVirtualBan2) {
        tyLeNhanBan2Random *= 2;
        if (tyLeNhanBan2Random > 4) {
            tyLeNhanBan2Random = 1;
        }
    } else {
        tyLeNhanBan2Random = 1;
    }

    // if (threadHoldUpdateBan2 === 0) {
    //     threadHoldUpdateBan2 = currentProfitVirtualBan2 - (threadHold * tyLeCuocBan2FromServer);
    // }
    //
    // if (currentProfitVirtualBan2 - threadHoldUpdateBan2 > (threadHold * tyLeCuocBan2FromServer)) {
    //     threadHoldUpdateBan2 = currentProfitVirtualBan2 - (threadHold * tyLeCuocBan2FromServer);
    // }
    //
    // if (currentProfitVirtualBan2 < threadHoldUpdateBan2 && currentProfitVirtualBan2 !== 0 && tyLeCuocBan2FromServer !== 0) {
    //     console.log("Bàn 2 âm 2tr: " + currentProfitVirtualBan2.toLocaleString() + " - " + new Date().toLocaleTimeString("vi-VN"));
    //     threadHoldUpdateBan2 -= (threadHold * tyLeCuocBan2FromServer);
    //
    //     if (chuoiCauBan2 !== -2) {
    //         const sendMsgTag = await sendMsg(CODE_ROUND + "termBan2", !isShortTermBan2 ? 1 : 2);
    //     }
    // }

    if (currentProfitVirtualBan2 >= threadHoldStopBan2) {
        const noti1 = await notifyTelegram(`Bàn 2 đã đạt ngưỡng dương: ${threadHoldStopBan2.toLocaleString()}. Vui lòng kiểm tra tại: http://18.182.62.197:4000/one/?exchange=${CODE_ROUND}`);

        const sendMsgTag = await sendMsg(CODE_ROUND + "betBan2", 0);
        //
        threadHoldStopBan2 += threadHold;
        const noti2 = await notifyTelegram(`Ngưỡng chốt lời mới bàn 2 tăng thành: ${threadHoldStopBan2.toLocaleString()}. Vui lòng kiểm tra tại: http://18.182.62.197:4000/one/?exchange=${CODE_ROUND}`);
    }

    if (currentProfitVirtualBan2 <= ((-2) * threadHoldStopBan2)) {

        // const noti = await notifyTelegram(`Bàn 2 đã đạt ngưỡng âm: ${((-2) * threadHoldStopBan2).toLocaleString()}. Vui lòng kiểm tra tại: http://18.182.62.197:4000/one/?exchange=${CODE_ROUND}`);
        // // const sendMsgTag = await sendMsg(CODE_ROUND + "betBan2", 0);
        // const sendMsgTag = await sendMsg(CODE_ROUND + "termBan2", !isShortTermBan2 ? 1 : 2);
        // threadHoldStopBan2 += takeProfitReal;
    }

    if (currentProfitVirtualBan2 > maxProfitVirtualBan2) {
        maxProfitVirtualBan2 = currentProfitVirtualBan2;

        tyLeNhanBan2 = 1;
    }

    if (currentProfitVirtualBan2 < minProfitVirtualBan2) {
        minProfitVirtualBan2 = currentProfitVirtualBan2;
    }

    if (currentProfitVirtualBan2 - minProfitVirtualBan2 > threadHoldTop) {
        console.log("Bàn 2 đạt 3tr: " + currentProfitVirtualBan2.toLocaleString() + " - " + new Date().toLocaleTimeString("vi-VN"));
        minProfitVirtualBan2 = currentProfitVirtualBan2;

        // if (chuoiCauBan2 !== -2) {
        //     const sendMsgTag = await sendMsg(CODE_ROUND + "termBan2", !isShortTermBan2 ? 1 : 2);
        // }
    }

    // if (currentProfitVirtualBan2 - beforeProfitVirtualBan2 <= diffThreadHoldAbove) {
    //     currentProfitTmpVirtualBan2 = currentProfitVirtualBan2;
    // }

    const diffAbove = currentProfitVirtualBan2 - minProfitVirtualBan2;

    if (diffAbove > maxAboveDiffBan2) {
        maxAboveDiffBan2 = diffAbove;
    }

    const diffBelow = currentProfitVirtualBan2 - maxProfitVirtualBan2;

    if (diffBelow < maxBelowDiffBan2) {
        maxBelowDiffBan2 = diffBelow;
    }

    if (diffBelow <= threadHoldStartBelowReal) {

        if (!isReadyBan2 && tyLeNhanBan2 >= 3 && chuoiCauBan2 === 1 && chuoiWinBan2 === 1) {
            maxProfitVirtualBan2 = currentProfitVirtualBan2;
            isReadyBan2 = true;
            tyLeNhanBan2 = 1;

            for (let i = 0; i < 10; i++) {
                const sendMsgTag = await sendMsg(CODE_ROUND + "Ban2", i);
            }

            resetBan2();
        }
    }

    // if (currentProfitVirtualBan2 >= takeProfitReal * 10) {
    //     if (isReadyBan2) {
    //         console.log("Chốt lời Bàn 2: " + currentProfitVirtualBan2.toLocaleString());
    //         isReadyBan2 = false;
    //         tyLeNhanBan2 = 1;
    //         // isStartBan2 = false;
    //         for (let i = 0; i < 10; i++) {
    //             const sendMsgTag = await sendMsg(CODE_ROUND + "Ban2", i);
    //         }
    //         resetBan2();
    //     }
    // }

    if (betVirtualBan2 && (lastChuoiCauBan2 >= 50)) {
        console.log("betVirtualBan2: " + betVirtualBan2);
        console.log("lastChuoiCauBan2 >= 5: " + (lastChuoiCauBan2 >= 5));

        betVirtualBan2 = false;
        console.log("Start real Bàn 2");

        const money = document.getElementsByClassName("game-round ng-binding");
        currentMoney = money[1].textContent;
        currentMoney = currentMoney.replaceAll(",", "");

        capitalRealBan2 = parseFloat(currentMoney);
        currentMoneyRealBan2 = parseFloat(currentMoney);
        maxProfitRealBan2 = 0;

        currentProfitTmpVirtualBan2 = 0;

        currentMoneyVirtualBan2 = parseFloat(currentMoney);
        maxProfitVirtualBan2 = -10_0000_000;
        minProfitVirtualBan2 = 10_0000_000;
    } else {
        console.table({
            "Bàn virtual": 2 + " - " + getStringTerm(isShortTermBan2),
            "----": `[${tyLeNhanBan2}]---------${lastChuoiCauBan2}------${chuoiCauBan2}----`,
            "Current profit": currentProfitVirtualBan2.toLocaleString(),
            "Thread hold": threadHoldUpdateBan2.toLocaleString(),
            "Thread hold top": (threadHoldTop + minProfitVirtualBan2).toLocaleString(),
            // "Before profit": beforeProfitVirtualBan2.toLocaleString(),
            // "Current tmp profit": currentProfitTmpVirtualBan2.toLocaleString(),
            // " ----- ": "--------------------",
            // "Max profit": maxProfitVirtualBan2.toLocaleString(),
            // "Min profit": minProfitVirtualBan2.toLocaleString(),
            // " ---.--- ": "--------------------",
            // "Max Above Diff": maxAboveDiffBan2.toLocaleString(),
            // "Max Below Diff": maxBelowDiffBan2.toLocaleString(),
            // " ---- ": "-------------------",
            // "Diff Above": diffAbove.toLocaleString(),
            // "Diff Below": diffBelow.toLocaleString(),
        });

        beforeProfitVirtualBan2 = currentProfitVirtualBan2;
    }

    const sendMsgTag = await sendMsg(CODE_ROUND + "Ban2", currentProfitVirtualBan2);

    if (isReadyBan2) {
        const sendMsgTag = await sendMsg(CODE_ROUND + "cauBan2", currentProfitVirtualBan2);
    }

    allowBetBan2 = true;
}

async function betBan1() {
    if (!allowBetBan1) {
        // console.log("Đã đặt cược hoặc không được phép cược: " + new Date().toLocaleString("vi-VN"));
        return;
    }

    console.log("Bắt đầu đặt Cược Bàn 1: " + new Date().toLocaleString("vi-VN"));

    const randomNum = getRandomInt(1, 3);
    console.log("Delay: " + randomNum + "s");

    const sleepTag1 = await sleep(randomNum * 1000);

    const result = await cuocBan1();

    const sleepTag2 = await sleep(500);

    // await cuocBan2(total);


    console.log("%c\n----------------------------------------\n", "color: green;");

    allowBetBan1 = false;
}

async function betBan2() {
    if (!allowBetBan2) {
        // console.log("Đã đặt cược hoặc không được phép cược: " + new Date().toLocaleString("vi-VN"));
        return;
    }

    console.log("Bắt đầu đặt Cược Bàn 2: " + new Date().toLocaleString("vi-VN"));

    const randomNum = getRandomInt(1, 3);
    console.log("Delay: " + randomNum + "s");

    const sleepTag1 = await sleep(randomNum * 1000);

    const result = await cuocBan2();

    const sleepTag2 = await sleep(500);

    // await cuocBan2(total);


    console.log("%c\n----------------------------------------\n", "color: blue;");

    allowBetBan2 = false;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function notifyTelegram(message) {
    if (isTest) {
        return;
    }
    // -1002024744514 thanos
    // 1002142994629 test
    const money = document.getElementsByClassName("game-round ng-binding");
    currentMoney = money[0].textContent;
    currentMoney = currentMoney.replaceAll(",", "");
    if (startCapital === 0) {
        startCapital = parseFloat(currentMoney);
    }

    const currentProfit = parseFloat(currentMoney) - startCapital;
    const url = `https://api.mhzppe.com/agent/sendMessage?chatId=-1002024744514&message=[${(currentProfit / 1000).toLocaleString()}k] ${message}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getTyLeCuocFromServer() {
    const ban1 = await fetch(`https://api.mhzppe.com/agent/getDataCache?exchange=${CODE_ROUND}betBan1`);
    const ban1Data = await ban1.json();

    // console.log(ban1Data);

    if (ban1Data) {
        const value = parseInt(ban1Data[ban1Data.length - 1]);
        if (tyLeCuocBan1FromServer !== value) {
            console.log(`%cBàn 1 update bet: ${(tyLeCuocBan1FromServer * 100_000).toLocaleString()} => ${(value * 100_000).toLocaleString()} at ${new Date().toLocaleTimeString("vi-VN")}`,
                'font-weight:normal; font-size:20px;color:green; background-color:#FFE5B4');

            if (!isTest) {
                const noti = await notifyTelegram(`Thay đổi tỷ lệ cược bàn 1: ${(tyLeCuocBan1FromServer * 100_000).toLocaleString()} => ${(value * 100_000).toLocaleString()}. Chi tiết xem tại: http://18.182.62.197:4000/one/?exchange=${CODE_ROUND}`);
            }

            tyLeCuocBan1FromServer = value;
        }
    }

    const ban2 = await fetch(`https://api.mhzppe.com/agent/getDataCache?exchange=${CODE_ROUND}betBan2`);
    const ban2Data = await ban2.json();

    if (ban2Data) {
        const value = parseInt(ban2Data[ban2Data.length - 1]);
        if (tyLeCuocBan2FromServer !== value) {
            console.log(`%cBàn 2 update bet: ${(tyLeCuocBan2FromServer * 100_000).toLocaleString()} => ${(value * 100_000).toLocaleString()} at ${new Date().toLocaleTimeString("vi-VN")}`,
                'font-weight:normal; font-size:20px;color:blue; background-color:#FFE5B4');

            if (!isTest) {
                const noti = await notifyTelegram(`Thay đổi tỷ lệ cược bàn 2: ${(tyLeCuocBan2FromServer * 100_000).toLocaleString()} => ${(value * 100_000).toLocaleString()}. Chi tiết xem tại: http://18.182.62.197:4000/one/?exchange=${CODE_ROUND}`);
            }

            tyLeCuocBan2FromServer = value;
        }
    }

    const ban1ShortTerm = await fetch(`https://api.mhzppe.com/agent/getDataCache?exchange=${CODE_ROUND}termBan1`);
    const ban1DataShortTerm = await ban1ShortTerm.json();

    // console.log(ban1Data);

    if (ban1DataShortTerm) {
        const value = parseInt(ban1DataShortTerm[ban1DataShortTerm.length - 1]);
        if (isShortTermBan1 !== value) {
            console.log(`%cBàn 1 update công thức: ${getStringTerm(isShortTermBan1)} => ${getStringTerm(value)} at ${new Date().toLocaleTimeString("vi-VN")}`,
                'font-weight:normal; font-size:20px;color:green; background-color:#FFE5B4');

            if (!isTest) {
                const noti = await notifyTelegram(`Thay đổi công thức cược bàn 1: ${getStringTerm(isShortTermBan1)} => ${getStringTerm(value)}. Chi tiết xem tại: http://18.182.62.197:4000/one/?exchange=${CODE_ROUND}`);
            }

            isShortTermBan1 = value;
        }
    }

    const ban2ShortTerm = await fetch(`https://api.mhzppe.com/agent/getDataCache?exchange=${CODE_ROUND}termBan2`);
    const ban2DataShortTerm = await ban2ShortTerm.json();

    // console.log(ban1Data);

    if (ban2DataShortTerm) {
        const value = parseInt(ban2DataShortTerm[ban2DataShortTerm.length - 1]);
        if (isShortTermBan2 !== value) {
            console.log(`%cBàn 2 update công thức: ${getStringTerm(isShortTermBan2)} => ${getStringTerm(value)} at ${new Date().toLocaleTimeString("vi-VN")}`,
                'font-weight:normal; font-size:20px;color:blue; background-color:#FFE5B4');

            if (!isTest) {
                const noti = await notifyTelegram(`Thay đổi công thức cược bàn 2: ${getStringTerm(isShortTermBan2)} => ${getStringTerm(value)}. Chi tiết xem tại: http://18.182.62.197:4000/one/?exchange=${CODE_ROUND}`);
            }

            isShortTermBan2 = value;
        }
    }
}

async function sendMsg(exchange, message) {
    const url = `https://api.mhzppe.com/agent/sendDataCache?exchange=${exchange}&message=${message}`;
    // const url = `http://localhost:3004/agent/sendDataCache?exchange=${exchange}&message=${message}`;
    // console.log(url);
    // console.log(imageTX);
    // console.log(imageCL);
    // const data = {
    //     TX: imageTX,
    //     CL: imageCL
    // }

    // console.log(JSON.stringify(data))
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // console.log(exchange + " ok");
        // console.log(data);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

class Observable {
    constructor(exec) {
        this.listeners = new Set();
        exec({
            next: (value) =>
                this.listeners.forEach(({next}) => next && next(value)),
            error: (err) =>
                this.listeners.forEach(({error}) => error && error(err)),
            complete: () =>
                this.listeners.forEach(({complete}) => complete && complete()),
        });
    }

    subscribe(listeners) {
        this.listeners.add(listeners);
        return {
            unsubscribe: () => this.listeners.delete(listeners),
        };
    }
}

async function intervalFullFunc() {
    if (isTest) {
        const currentProfitVirtualBan1 = parseFloat(currentMoneyVirtualBan1) - capitalVirtualBan1;
        const currentProfitVirtualBan2 = parseFloat(currentMoneyVirtualBan2) - capitalVirtualBan2;
        if (currentTotalProfit !== (currentProfitVirtualBan1 + currentProfitVirtualBan2)) {
            currentTotalProfit = currentProfitVirtualBan1 + currentProfitVirtualBan2;
            console.log(`%c${(currentProfitVirtualBan1 + currentProfitVirtualBan2).toLocaleString()} at ${new Date().toLocaleTimeString("vi-VN")}`,
                'font-weight:normal; font-size:30px;color:white; background-color:#F95700');
            const sendMsgTag = await sendMsg(CODE_ROUND + "profit", currentProfitVirtualBan1 + currentProfitVirtualBan2);
        }
        return;
    }
    // if (isTest) {
    //     const currentProfitVirtualBan1 = parseFloat(currentMoneyRealBan1) - capitalRealBan1;
    //     const currentProfitVirtualBan2 = parseFloat(currentMoneyRealBan2) - capitalRealBan2;
    //     if (currentTotalProfit !== (currentProfitVirtualBan1 + currentProfitVirtualBan2)) {
    //         currentTotalProfit = currentProfitVirtualBan1 + currentProfitVirtualBan2;
    //         console.log(`%c${(currentProfitVirtualBan1 + currentProfitVirtualBan2).toLocaleString()} at ${new Date().toLocaleTimeString("vi-VN")}`,
    //             'font-weight:normal; font-size:30px;color:white; background-color:#F95700');
    //         const sendMsgTag = await sendMsg(CODE_ROUND + "profit", currentProfitVirtualBan1 + currentProfitVirtualBan2);
    //     }
    //     return;
    // }
    if (isStop) {
        return;
    }
    const money = document.getElementsByClassName("game-round ng-binding");
    currentMoney = money[0].textContent;
    currentMoney = currentMoney.replaceAll(",", "");
    if (startCapital === 0) {
        startCapital = parseFloat(currentMoney);
    }

    // const currentProfitVirtualBan1 = parseFloat(currentMoneyVirtualBan1) - capitalVirtualBan1;
    // const currentProfitVirtualBan2 = parseFloat(currentMoneyVirtualBan2) - capitalVirtualBan2;

    if (currentTotalProfit !== (parseFloat(currentMoney) - startCapital)) {
        currentTotalProfit = parseFloat(currentMoney) - startCapital;
        // if (currentTotalProfit !== (currentProfitVirtualBan1 + currentProfitVirtualBan2)) {
        //     currentTotalProfit = currentProfitVirtualBan1 + currentProfitVirtualBan2;
        const sendMsgTag = await sendMsg(CODE_ROUND + "profit", currentTotalProfit);

        console.log(`%c${(currentTotalProfit).toLocaleString()} at ${new Date().toLocaleTimeString("vi-VN")}`,
            'font-weight:normal; font-size:30px;color:#00539C; background-color:#FF8F55');
        // console.log("%cCurrent total profit: " + (parseFloat(currentMoney) - startCapital).toLocaleString() + " at " + new Date().toLocaleString("vi-VN"), "color: red;");

        const floor = currentTotalProfit > 0 ? Math.floor(currentTotalProfit / 1_000_000) * 1_000_000 : Math.ceil(currentTotalProfit / 1_000_000) * 1_000_000;
        if (Math.abs(floor - beforeCurrentTotalProfit) >= 2_000_000) {
            if (floor < beforeCurrentTotalProfit) {
                const noti = await notifyTelegram(`Profit giảm qua mốc: ${floor.toLocaleString()}. Chi tiết xem tại: http://18.182.62.197:4000/one/?exchange=${CODE_ROUND}`);
            } else if (floor > beforeCurrentTotalProfit) {
                const noti = await notifyTelegram(`Profit tăng qua mốc: ${floor.toLocaleString()}. Chi tiết xem tại: http://18.182.62.197:4000/one/?exchange=${CODE_ROUND}`);
            }
            beforeCurrentTotalProfit = floor;
        }

        if (currentTotalProfit >= takeProfitReal) {
            // this.document.location = "http://stackoverflow.com/"
            isStop = true;
            console.log("End total profit: " + (currentTotalProfit).toLocaleString());
            isReadyBan1 = false;
            isReadyBan2 = false;

            startCapital = parseFloat(currentMoney);

            if (!isTest) {
                const noti = await notifyTelegram(`Chốt lời: ${currentTotalProfit.toLocaleString()}. Chi tiết xem tại: http://18.182.62.197:4000/one/?exchange=${CODE_ROUND}`);
            }


            const sleepTag = await sleep(5000);

            this.document.location = "http://google.com/"
        }

        if (currentTotalProfit <= stopLossReal) {
            isStop = true;
            console.log("End total profit: " + (currentTotalProfit).toLocaleString());
            isReadyBan1 = false;
            isReadyBan2 = false;
            startCapital = parseFloat(currentMoney);

            if (!isTest) {
                const noti = await notifyTelegram(`Cắt lỗ: ${currentTotalProfit.toLocaleString()}. Chi tiết xem tại: http://18.182.62.197:4000/one/?exchange=${CODE_ROUND}`);
            }


            const sleepTag = await sleep(5000);

            this.document.location = "http://google.com/"
        }


    }

    if (betTime >= maxBetTime) {
        isStop = true;
        console.log("End total profit: " + (currentTotalProfit).toLocaleString());
        isReadyBan1 = false;
        isReadyBan2 = false;

        startCapital = parseFloat(currentMoney);

        if (!isTest) {
            const noti = await notifyTelegram(`Đã tới giới hạn lượt bet. Chốt profit: ${currentTotalProfit.toLocaleString()}. Chi tiết xem tại: http://18.182.62.197:4000/one/?exchange=${CODE_ROUND}`);
        }

        const sleepTag = await sleep(5000);

        this.document.location = "http://google.com/"
    }
}

async function intervalBan1Func() {
    if (isStop) {
        return;
    }
    const txtStatus = document.getElementsByClassName("table-status ng-binding")[0];
    if (txtStatus) {
        switch (txtStatus.innerText) {
            case "Bắt đầu đặt cược":
                const result = await betBan1();
                break;
            case "Chờ bắt đầu ván mới":
                if (roundBan1 < 1) {
                    roundBan1 = 1;
                }

                let newValue = 0;

                let checkFirstRound = 0;

                const xpathChanBan1 = "/html/body/div[1]/div/md-content/div[1]/div[3]/div[1]/div[1]/div/div[2]/div[5]/div[1]/div[1]";
                const elementChanBan1 = document.evaluate(xpathChanBan1, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

                const newChanBan1 = parseInt(elementChanBan1.textContent.split(":")[1]);

                if (newChanBan1 !== numberChanBan1) {
                    // kết quả là Chẵn
                    numberChanBan1 = newChanBan1;
                    newValue = 1;
                    checkFirstRound++;
                    console.log("Bàn 1 round " + roundBan1 + " kết quả: Chẵn");
                }

                const xpathLeBan1 = "/html/body/div[1]/div/md-content/div[1]/div[3]/div[1]/div[1]/div/div[2]/div[5]/div[1]/div[2]";
                const elementLeBan1 = document.evaluate(xpathLeBan1, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

                const newLeBan1 = parseInt(elementLeBan1.textContent.split(":")[1]);

                if (newLeBan1 !== numberLeBan1) {
                    // kết quả là Lẻ
                    numberLeBan1 = newLeBan1;
                    newValue = 0;
                    checkFirstRound++;
                    console.log("Bàn 1 round " + roundBan1 + " kết quả: Lẻ");
                }


                if (roundBan1 === (newLeBan1 + newChanBan1 + 1)) {
                    // console.log("Đã tính toán ván mới Bàn 1: " + new Date().toLocaleString("vi-VN"));
                    return;
                } else {
                    roundBan1 = (newLeBan1 + newChanBan1 + 1);
                }

                if (checkFirstRound === 2) {
                    console.log("Skip. Cây đầu bàn 1: " + new Date().toLocaleString("vi-VN"));
                    if (!isTest) {
                        const noti = await notifyTelegram(`Bắt đầu xiên bài mới Bàn 1. Chi tiết xem tại: http://18.182.62.197:4000/one/?exchange=${CODE_ROUND}`)
                    }

                    // const sendMsgTag = await sendMsg(CODE_ROUND + "betBan1", 0);
                    return;
                }

                // if (!isReadyBan1 && roundBan1 === 1) {
                //     isReadyBan1 = true;
                //     console.log("Ready. Cây đầu bàn 1: " + new Date().toLocaleString("vi-VN"));
                // }

                if (roundBan1 === 1) {
                    // const money = document.getElementsByClassName("game-round ng-binding");
                    // currentMoney = money[0].textContent;
                    // currentMoney = currentMoney.replaceAll(",", "");
                    //
                    // CAPITAL = currentMoney;
                    // capitalVirtualBan1 = parseFloat(currentMoney);
                    // currentMoneyVirtualBan1 = parseFloat(currentMoney);

                    // isStartBan1 = true;
                    // const noti = await notifyTelegram(`Bắt đầu xiên bài mới Bàn 1. Chi tiết xem tại: http://18.182.62.197:4000/one/?exchange=${CODE_ROUND}`)
                    // const sendMsgTag = await sendMsg(CODE_ROUND + "betBan1", 2);
                }

                // if (!isStartBan1 && isReadyBan1 && roundBan1 >= 30 && roundBan1 <= 80) {
                //     if (numberChanBan1 - numberLeBan1 >= 5) {
                //         isStartBan1 = true;
                //         betValueBan1 = 1;
                //     } else if (numberLeBan1 - numberChanBan1 >= 5) {
                //         isStartBan1 = true;
                //         betValueBan1 = 0;
                //     }
                // }

                // const sendMsgTag = await sendMsg(CODE_ROUND + "cauBan1", parseInt(numberChanBan1.toString()));


                if (newValue === 1) {
                    if (lastValueBan1 === 1) {
                        chuoiCauBan1++;

                        chuoiWinBan1 = 1;
                    } else {
                        if (chuoiCauBan1 > 1) {
                            lastChuoiCauBan1 = chuoiCauBan1;
                            // const sendMsgTag = await sendMsg(CODE_ROUND + "cauBan1", lastChuoiCauBan1);
                        } else if (chuoiCauBan1 === 1) {
                            chuoiWinBan1++;
                        }
                        chuoiCauBan1 = 1;
                    }
                    lastValueBan1 = 1;
                } else {
                    if (lastValueBan1 === 0) {
                        chuoiCauBan1++;

                        chuoiWinBan1 = 1;
                    } else {
                        if (chuoiCauBan1 > 1) {
                            lastChuoiCauBan1 = chuoiCauBan1;
                            // const sendMsgTag = await sendMsg(CODE_ROUND + "cauBan1", lastChuoiCauBan1);
                        } else if (chuoiCauBan1 === 1) {
                            chuoiWinBan1++;
                        }
                        chuoiCauBan1 = 1;
                    }
                    lastValueBan1 = 0;
                }

                console.log("Tính toán bắt đầu ván mới Bàn 1 - round " + roundBan1 + ": " + new Date().toLocaleString("vi-VN"));


                const resultBan1 = await checkProfitVirtualBan1(newValue);
                // if (betVirtualBan1) {
                //    await checkProfitVirtualBan1(newValue);
                // } else {
                //     await checkProfitRealBan1(newValue);
                // }

                // await checkProfitVirtualBan1();
                break;
            default:
                break;
        }
    } else {
        console.log("Error");

    }
}

async function intervalBan2Func() {
    if (isStop) {
        return;
    }
    const txtStatus = document.getElementsByClassName("table-status ng-binding")[1];
    if (txtStatus) {
        switch (txtStatus.innerText) {
            case "Bắt đầu đặt cược":
                const result = await betBan2();
                break;
            case "Chờ bắt đầu ván mới":
                if (roundBan2 < 1) {
                    roundBan2 = 1;
                }

                let newValue = 0;

                let checkFirstRound = 0;

                const xpathChanBan2 = "/html/body/div[1]/div/md-content/div[1]/div[3]/div[1]/div[2]/div/div[2]/div[5]/div[1]/div[1]";
                const elementChanBan2 = document.evaluate(xpathChanBan2, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

                const newChanBan2 = parseInt(elementChanBan2.textContent.split(":")[1]);

                if (newChanBan2 !== numberChanBan2) {
                    // kết quả là Chẵn
                    numberChanBan2 = newChanBan2;
                    newValue = 1;
                    checkFirstRound++;
                    console.log("Bàn 2 round " + roundBan2 + " kết quả: Chẵn");
                }

                const xpathLeBan2 = "/html/body/div[1]/div/md-content/div[1]/div[3]/div[1]/div[2]/div/div[2]/div[5]/div[1]/div[2]";
                const elementLeBan2 = document.evaluate(xpathLeBan2, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

                const newLeBan2 = parseInt(elementLeBan2.textContent.split(":")[1]);

                if (newLeBan2 !== numberLeBan2) {
                    // kết quả là Lẻ
                    numberLeBan2 = newLeBan2;
                    newValue = 0;
                    checkFirstRound++;
                    console.log("Bàn 2 round " + roundBan2 + " kết quả: Lẻ");
                }


                if (roundBan2 === (newLeBan2 + newChanBan2 + 1)) {
                    // console.log("Đã tính toán ván mới Bàn 1: " + new Date().toLocaleString("vi-VN"));
                    return;
                } else {
                    roundBan2 = (newLeBan2 + newChanBan2 + 1);
                }

                if (checkFirstRound === 2) {
                    console.log("Skip. Cây đầu bàn 2: " + new Date().toLocaleString("vi-VN"));
                    if (!isTest) {
                        const noti = await notifyTelegram(`Bắt đầu xiên bài mới Bàn 2. Chi tiết xem tại: http://18.182.62.197:4000/one/?exchange=${CODE_ROUND}`)
                    }

                    // const sendMsgTag = await sendMsg(CODE_ROUND + "betBan2", 5);
                    return;
                }

                // if (!isReadyBan2 && roundBan2 === 1) {
                //     isReadyBan2 = true;
                //     console.log("Ready. Cây đầu bàn 2: " + new Date().toLocaleString("vi-VN"));
                // }

                if (roundBan2 === 1) {
                    // const money = document.getElementsByClassName("game-round ng-binding");
                    // currentMoney = money[0].textContent;
                    // currentMoney = currentMoney.replaceAll(",", "");
                    //
                    // // CAPITAL = currentMoney;
                    // capitalVirtualBan2 = parseFloat(currentMoney);
                    // currentMoneyVirtualBan2 = parseFloat(currentMoney);

                    // isStartBan2 = false;
                    // const noti = await notifyTelegram(`Bắt đầu xiên bài mới Bàn 2. Chi tiết xem tại: http://18.182.62.197:4000/one/?exchange=${CODE_ROUND}`)
                    // const sendMsgTag = await sendMsg(CODE_ROUND + "betBan2", 2);
                }

                // if (!isStartBan2 && isReadyBan2 && roundBan2 >= 30 && roundBan2 <= 80) {
                //     if (numberChanBan2 - numberLeBan2 >= 5) {
                //         isStartBan2 = true;
                //         betValueBan2 = 1;
                //     } else if (numberLeBan2 - numberChanBan2 >= 5) {
                //         isStartBan2 = true;
                //         betValueBan2 = 0;
                //     }
                // }

                // const sendMsgTag = await sendMsg(CODE_ROUND + "cauBan2", parseInt(numberChanBan2.toString()));

                if (newValue === 1) {
                    if (lastValueBan2 === 1) {
                        chuoiCauBan2++;

                        chuoiWinBan2 = 1;
                    } else {
                        if (chuoiCauBan2 > 1) {
                            lastChuoiCauBan2 = chuoiCauBan2;
                            // const sendMsgTag = await sendMsg(CODE_ROUND + "cauBan2", lastChuoiCauBan2);
                        } else if (chuoiCauBan2 === 1) {
                            chuoiWinBan2++;
                        }
                        chuoiCauBan2 = 1;
                    }
                    lastValueBan2 = 1;
                } else {
                    if (lastValueBan2 === 0) {
                        chuoiCauBan2++;

                        chuoiWinBan2 = 1;
                    } else {
                        if (chuoiCauBan2 > 1) {
                            lastChuoiCauBan2 = chuoiCauBan2;
                            // const sendMsgTag = await sendMsg(CODE_ROUND + "cauBan2", lastChuoiCauBan2);
                        } else if (chuoiCauBan2 === 1) {
                            chuoiWinBan2++;
                        }
                        chuoiCauBan2 = 1;
                    }
                    lastValueBan2 = 0;
                }

                console.log("Tính toán bắt đầu ván mới Bàn 2 - round " + roundBan2 + ": " + new Date().toLocaleString("vi-VN"));

                const resultBan2 = await checkProfitVirtualBan2(newValue);
                // if (betVirtualBan2) {
                //     await checkProfitVirtualBan2(newValue);
                // } else {
                //     await checkProfitRealBan2(newValue);
                // }

                // await checkProfitVirtualBan1();
                break;
            default:
                break;
        }
    } else {
        console.log("Error");

    }
}

async function main() {
    resetBan1();
    resetBan2();

    let userName = document.getElementsByClassName("username ng-binding")[0].innerText;

    if (isTest) {
        CODE_ROUND = `TEST-${userName}-${createDateTimeString()}`;
        isReadyBan1 = false;
        isReadyBan2 = false;
    } else {
        CODE_ROUND = `ACTION-${userName}-${createDateTimeString()}`;
        isReadyBan1 = true;
        isReadyBan2 = true;
    }

    console.log("Script loaded");
    console.log("CODE_ROUND: " + CODE_ROUND);
    console.log("isTest: " + isTest);
    console.log("isReadyBan1: " + isReadyBan1);
    console.log("isReadyBan2: " + isReadyBan2);
    const sendMsgTag1 = await sendMsg(CODE_ROUND + "Ban1", 0);
    const sendMsgTag2 = await sendMsg(CODE_ROUND + "Ban2", 0);
    const sendMsgTag3 = await sendMsg(CODE_ROUND + "profit", 0);
    const sendMsgTag4 = await sendMsg(CODE_ROUND + "betBan1", tyLeCuocBan1FromServer);
    const sendMsgTag5 = await sendMsg(CODE_ROUND + "betBan2", tyLeCuocBan2FromServer);
    const sendMsgTag6 = await sendMsg(CODE_ROUND + "termBan1", isShortTermBan1);
    const sendMsgTag7 = await sendMsg(CODE_ROUND + "termBan2", isShortTermBan2);

    if (!isTest) {
        const noti1 = await notifyTelegram(`Bắt đầu phệt. Theo dõi tại đây: http://18.182.62.197:4000/one/?exchange=${CODE_ROUND}`);
        const noti2 = await notifyTelegram(`Ngưỡng chốt lời tổng: ${takeProfitReal.toLocaleString()}`);
        const noti3 = await notifyTelegram(`Ngưỡng cắt lỗ tổng: ${stopLossReal.toLocaleString()}`);
        const noti4 = await notifyTelegram(`Ngưỡng chốt lời bàn 1: ${threadHoldStopBan1.toLocaleString()}`);
        const noti5 = await notifyTelegram(`Ngưỡng chốt lời bàn 2: ${threadHoldStopBan2.toLocaleString()}`);
    } else {
        console.log(`Bắt đầu phệt. Theo dõi tại đây: http://18.182.62.197:4000/one/?exchange=${CODE_ROUND}`);
    }

    try {
        console.log(`main(): ${CODE_ROUND}`);
        const intervalTyLeCuoc = new Observable(({next}) => {
            setInterval(() => next("Hello full"), 5 * 1000);
        });

        intervalTyLeCuoc.subscribe({
            next: async (data) => {
                const tag = await getTyLeCuocFromServer();
            },
        });

        const sleepTag2 = await sleep(500);

        const intervalFull = new Observable(({next}) => {
            setInterval(() => next("Hello full"), 7 * 1000);
        });

        intervalFull.subscribe({
            next: async (data) => {
                const tag = await intervalFullFunc();
            },
        });

        const sleepTag3 = await sleep(500);

        const intervalBan1 = new Observable(({next}) => {
            setInterval(() => next("Hello bàn 1"), 7 * 1000);
        });

        // Subscribe to that Observable;
        intervalBan1.subscribe({
            next: async (data) => {
                const tag = await intervalBan1Func();
            },
        });

        const sleepTag4 = await sleep(500);

        const intervalBan2 = new Observable(({next}) => {
            setInterval(() => next("Hello bàn 2"), 7 * 1000);
        });

        // Subscribe to that Observable;
        intervalBan2.subscribe({
            next: async (data) => {
                const tag = await intervalBan2Func();
            },
        });
    } catch (error) {
        console.log("Error: ", error);
    }
}


main().then(r => console.log(r));

