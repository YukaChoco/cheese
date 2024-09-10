// スプーンが動いたかを判別するためのフラグ
let isMoved = false;

// スプーンを動かす
function moveSpoon() {
    if (isMoved) {
        // すでにスプーンが動いていた場合は何もしない
        return;
    }
    // スプーンを取得
    const spoon = document
        .querySelector('.spoon');

    // スプーンをX方向に200px移動させ、1秒後にその場で回転させる
    spoon.style.left = '200px';
    setTimeout(() => {
        spoon.style.top = '-20px';
        spoon.style.transform = 'rotate(-20deg)';
    }, 1000);



    // スプーンが動いたことを記録
    isMoved = true;
}

document.getElementById('myButton').addEventListener('click', moveSpoon);