let arr = [];
while (true) {
    let task = prompt("タスクを入力してください");
    if (task === null) {
        break;
    } else {
        arr.push(task);
        console.log("=============================");
        console.log("現在持っているタスク一覧");
        console.log("=============================");
        arr.forEach(function (value, index) {
            console.log(index + ":" + value);
        })
    }
}