// let COUNT = 0;

// function increment() {
//    return (COUNT += 1);
// }

// 修正　グローバル変数を関数内にまとめる
function counter() {
    let count = 0;

    function increment() {
        return (count += 1);
    }
}