// 3秒待った後に処理を実行する
setTimeout(
    () => {console.log('3秒たちました！')}, // 第1引数（コールバック関数）
    3000                                   // 第2引数
);

// 1秒ごとに決められた処理を実行する
setInterval(
    () => {console.log('1秒がたちました。')},
    1000
);