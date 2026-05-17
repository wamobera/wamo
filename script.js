document.addEventListener('DOMContentLoaded', () =>{
    const viewer = document.querySelector('.viewer');
    const pages = document.querySelectorAll('.kami');
    let currentIndex = 0;

    window.addEventListener('click', (e) =>{
        const screenWidth = window.innerWidth;
        const clickX = e.clientX

        // 画面の右側半分をタップしたら次のページへ（右開き基準）
        if (clickX > screenWidth / 2) {
            if (currentIndex < pages.length - 1) {
                currentIndex++;
            }
        } 
        // 画面の左側半分をタップしたら前のページへ
        else {
            if (currentIndex > 0) {
                currentIndex--;
            }
        }

        // 目的のページへアニメーションなしでパッと瞬間移動させる
        viewer.scrollTo({
            left: -currentIndex * screenWidth, // 右開き（rtl）のためマイナス方向
            behavior: 'auto' // アニメーションなし（パッと切り替わる）
        });
    });
});