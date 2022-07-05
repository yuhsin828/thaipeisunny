$(document).ready(function () {
    init();
});

function init() {
    let header = loadHeader();
    let footer = loadFooter();
    $('header').html(header);
    $('footer').html(footer);

    // set nav-link active
    for (let i = 0; i < 6; i++) {
        if ((i + 1) == $('body').attr('id')) {
            $('.nav-link' + (i + 1)).attr('aria-current', 'page');
            $('.nav-link' + (i + 1)).addClass('active');
        }
    }
}

function loadHeader() {
    let header = `
        <div class="container">
            <div class="container py-5">
                <a class="navbar-brand" href="./index.html">
                    <img src="./image/logo_dark.png" alt="" class="img-fluid" width="360px">
                </a>
            </div>

            <nav class="navbar navbar-light navbar-expand-lg bg-light sticky-top rounded-pill py-2">
                <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">國北小泰陽學習資源網</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-evenly flex-grow-1">
                            <li class="nav-item"><a class="nav-link nav-link1" href="./index.html">首頁</a></li>
                            <li class="nav-item dropdown">
                                <a class="nav-link nav-link2 dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    關於我們
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                    <li><a class="dropdown-item" href="#">網站緣起</a></li>
                                    <li><a class="dropdown-item" href="#">網站沿革</a></li>
                                    <li><a class="dropdown-item" href="./about.html">關於小泰陽</a></li>
                                </ul>
                            </li>
                            <li class="nav-item"><a class="nav-link nav-link3" href="./student.html">學生學習區</a></li>
                            <li class="nav-item"><a class="nav-link nav-link4" href="./teacher.html">教師交流區</a></li>
                            <li class="nav-item"><a class="nav-link nav-link5" href="./recommend.html">好站推薦</a></li>
                            <li class="nav-item"><a class="nav-link nav-link6" href="https://drive.google.com/drive/u/5/folders/1PZ2xdEBupc0j3_NFL2_Ch7p-gLDAUHYc" target="_blank">下載專區</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    `
    return header;
}

function loadFooter() {
    let footer = `
        <div class="container py-5 d-flex justify-content-evenly align-items-center">
            <div class="">
                <img src="./image/logo_light.png" alt="國北小泰陽 學習資源網" width="280px" class="img-fluid">
            </div>
            <ul class="nav d-flex justify-content-between">
                <li class="nav-item p-2"><a href="#" class="nav-link text_light">著作權宣告</a></li>
                <li class="nav-item p-2"><a href="#" class="nav-link text_light">網站導覽</a></li>
                <li class="nav-item p-2"><a href="#" class="nav-link text_light">聯絡我們</a></li>
            </ul>
        </div>
    `
    return footer;
}