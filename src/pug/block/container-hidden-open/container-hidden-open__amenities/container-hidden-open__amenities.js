$(document).ready(() => {
    var iqdropdownLodger = document.querySelectorAll('.iqdropdown-facilities');
    var buttonIncrement = document.querySelectorAll('.iqdropdown-facilities .button-increment');
    var buttonDecrement = document.querySelectorAll('.iqdropdown-facilities .button-decrement');
    var clear = document.querySelectorAll('.iqdropdown-facilities .clear');
    var exit = document.querySelectorAll('.iqdropdown-facilities .exit');
    var counter = document.querySelectorAll('.iqdropdown-facilities .counter');
    var conclusion = document.querySelectorAll('.selection-facilities');
    var allCount = [0, 0, 0, 0, 0, 0, 0, 0];
    var bedroom = ['', ''];
    var bed = ['', ''];
    var bathroom = ['', ''];
    conclusion[0].onclick = function() {
        iqdropdownLodger[0].classList.toggle("menu-open")
    }

    conclusion[1].onclick = function() {
        iqdropdownLodger[1].classList.toggle("menu-open")
    }

    //попробовать путем создания и навешивания onclick
    buttonIncrement[0].onclick = function() {
        // alert('Нашел плюс')
        if (allCount[1] < 2) {
            allCount[1] += 1
        } else {
            return
        }
        counter[0].innerHTML = allCount[1];
        bedroom[0] = 'Спальни';
        declensionsOne();
    }
    buttonDecrement[0].onclick = function() {
        // alert('Нашел минус')
        if (allCount[1] > 0) {
            allCount[1] -= 1
        } else {
            return
        }
        counter[0].innerHTML = allCount[1];
        declensionsOne();
    }

    buttonIncrement[1].onclick = function() {
        // alert('Нашел плюс')
        if (allCount[2] < 4) {
            allCount[2] += 1
        } else {
            return
        }
        counter[1].innerHTML = allCount[2];
        bed[0] = 'Кровати';
        declensionsOne();
    }
    buttonDecrement[1].onclick = function() {
        // alert('Нашел минус')
        if (allCount[2] > 0) {
            allCount[2] -= 1
        } else {
            return
        }
        counter[1].innerHTML = allCount[2];
        declensionsOne();
    }

    buttonIncrement[2].onclick = function() {
        // alert('Нашел плюс')
        if (allCount[3] < 2) {
            allCount[3] += 1
        } else {
            return
        }
        counter[2].innerHTML = allCount[3];
        bathroom[0] = 'Ванные комнаты';
        declensionsOne();
    }
    buttonDecrement[2].onclick = function() {
        // alert('Нашел минус')
        if (allCount[3] > 0) {
            allCount[3] -= 1
        } else {
            return
        }
        counter[2].innerHTML = allCount[3];
        declensionsOne();
    }

    buttonIncrement[3].onclick = function() {
        // alert('Нашел плюс')
        if (allCount[5] < 2) {
            allCount[5] += 1
        } else {
            return
        }
        counter[3].innerHTML = allCount[5];
        bedroom[1] = 'Спальни';
        declensionsTwo();
    }

    buttonDecrement[3].onclick = function() {
        // alert('Нашел плюс')
        if (allCount[5] > 0) {
            allCount[5] -= 1
        } else {
            return
        }
        counter[3].innerHTML = allCount[5];
        declensionsTwo();
    }

    buttonIncrement[4].onclick = function() {
        // alert('Нашел плюс')
        if (allCount[6] < 4) {
            allCount[6] += 1
        } else {
            return
        }
        counter[4].innerHTML = allCount[6];
        bed[1] = 'Кровати';
        declensionsTwo();
    }

    buttonDecrement[4].onclick = function() {
        // alert('Нашел плюс')
        if (allCount[6] > 0) {
            allCount[6] -= 1
        } else {
            return
        }
        counter[4].innerHTML = allCount[6];
        declensionsTwo();
    }

    buttonIncrement[5].onclick = function() {
        // alert('Нашел плюс')
        if (allCount[7] < 2) {
            allCount[7] += 1
        } else {
            return
        }
        counter[5].innerHTML = allCount[7];
        bathroom[1] = 'Ванные комнаты';
        declensionsTwo();
    }
    buttonDecrement[5].onclick = function() {
        // alert('Нашел минус')
        if (allCount[7] > 0) {
            allCount[7] -= 1
        } else {
            return
        }
        counter[5].innerHTML = allCount[7];
        declensionsTwo();
    }

    clear[0].onclick = function() {
        allCount[1] = 0;
        allCount[2] = 0;
        allCount[3] = 0;
        counter[0].innerHTML = allCount[0];
        counter[1].innerHTML = allCount[0];
        counter[2].innerHTML = allCount[3];
        conclusion[0].innerHTML = 'Выбрать удобства'
    }

    clear[1].onclick = function() {
        allCount[5] = 0;
        allCount[6] = 0;
        allCount[7] = 0;
        counter[3].innerHTML = allCount[4];
        counter[4].innerHTML = allCount[4];
        counter[5].innerHTML = allCount[4];
        conclusion[1].innerHTML = 'Выбрать удобства'
    }

    exit[0].onclick = function() {
        iqdropdownLodger[0].classList.remove("menu-open")
    }

    exit[1].onclick = function() {
        iqdropdownLodger[1].classList.remove("menu-open")
    }

    function declensionsTwo() {
        if (allCount[5] == 0) {
            bedroom[1] = 'спален'
        }
        if (allCount[5] == 1) {
            bedroom[1] = 'спальня'
        }
        if (allCount[5] > 1) {
            bedroom[1] = 'спальни'
        }
        if (allCount[6] == 0) {
            bed[1] = 'кроватей'
        }
        if (allCount[6] == 1) {
            bed[1] = 'кровать'
        }
        if (allCount[6] > 1) {
            bed[1] = 'кровати'
        }
        if (allCount[7] == 0) {
            bathroom[1] = 'ванных комнат'
        }
        if (allCount[7] == 1) {
            bathroom[1] = 'ванная комната'
        }
        if (allCount[7] > 1) {
            bathroom[1] = 'ванные комнаты'
        }
        if (allCount[5] != 0) {
            conclusion[1].innerHTML = allCount[5] + ' ' + bedroom[1] + ', ' + allCount[6] + ' ' + bed[1] + ', ' + allCount[7] + ' ' + bathroom[1]
        } else if (allCount[5] == 0) {
            conclusion[1].innerHTML = allCount[6] + ' ' + bed[1] + ', ' + allCount[7] + ' ' + bathroom[1]
        }
    }

    function declensionsOne() {
        // max_min();
        if (allCount[1] == 0) {
            bedroom[0] = 'спален'
        }
        if (allCount[1] == 1) {
            bedroom[0] = 'спальня'
        }
        if (allCount[1] > 1) {
            bedroom[0] = 'спальни'
        }
        if (allCount[2] == 0) {
            bed[0] = 'кроватей'
        }
        if (allCount[2] == 1) {
            bed[0] = 'кровать'
        }
        if (allCount[2] > 1) {
            bed[0] = 'кровати'
        }
        if (allCount[3] == 0) {
            bathroom[0] = 'ванных комнат'
        }
        if (allCount[3] == 1) {
            bathroom[0] = 'ванная комната'
        }
        if (allCount[3] > 1) {
            bathroom[0] = 'ванные комнаты'
        }
        if (allCount[1] != 0) {
            conclusion[0].innerHTML = allCount[1] + ' ' + bedroom[0] + ', ' + allCount[2] + ' ' + bed[0] + ', ' + allCount[3] + ' ' + bathroom[0]
        } else if (allCount[1] == 0) {
            conclusion[0].innerHTML = allCount[2] + ' ' + bed[0] + ', ' + allCount[3] + ' ' + bathroom[0]
        }
    }
});