const tasks = ["掃除", "買い物", "散歩"];
while (true) {
    console.log("=============================");
    console.log("現在持っているタスク一覧");
    console.log("=============================");
    tasks.forEach(function (value, index) {
        console.log(index + ":" + value);
    });
    const task = prompt("タスクを入力してください");
    if (task === null) {
        break;
    } else {
        tasks.push(task);
    }
}