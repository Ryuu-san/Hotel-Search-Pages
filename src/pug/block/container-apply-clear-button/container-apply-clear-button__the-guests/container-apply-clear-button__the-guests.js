$(document).ready(() => {
    var iqdropdownLodger = document.querySelectorAll('.iqdropdown-clear');
    var buttonIncrement = document.querySelectorAll('.iqdropdown-clear .button-increment');
    var buttonDecrement = document.querySelectorAll('.iqdropdown-clear .button-decrement');
    var clear = document.querySelectorAll('.iqdropdown-clear .clear');
    var exit = document.querySelectorAll('.iqdropdown-clear .exit');
    var counter = document.querySelectorAll('.iqdropdown-clear .counter');
    var conclusion = document.querySelectorAll('.selection-clear');
    var allCount = [0, 0, 0, 0];
    var allText = ['гостей'];
    var BabyText = [''];

    conclusion[0].onclick = function() {
        iqdropdownLodger[0].classList.toggle("menu-open")
    }

    //попробовать путем создания и навешивания onclick
    buttonIncrement[0].onclick = function() {
        // alert('Нашел плюс')
        if (allCount[1] < 5) {
            allCount[1] += 1
        } else {
            return
        }
        allCount[0] = allCount[1] + allCount[2]
        counter[0].innerHTML = allCount[1];
        declensionsOne();
    }
    buttonDecrement[0].onclick = function() {
        // alert('Нашел минус')
        if (allCount[1] > 0) {
            allCount[1] -= 1
        } else {
            return
        }
        allCount[0] = allCount[1] + allCount[2]
        counter[0].innerHTML = allCount[1];
        declensionsOne();
    }

    buttonIncrement[1].onclick = function() {
        // alert('Нашел плюс')
        if (allCount[2] < 5) {
            allCount[2] += 1
        } else {
            return
        }
        allCount[0] = allCount[1] + allCount[2]
        counter[1].innerHTML = allCount[2];
        declensionsOne();
    }
    buttonDecrement[1].onclick = function() {
        // alert('Нашел минус')
        if (allCount[2] > 0) {
            allCount[2] -= 1
        } else {
            return
        }
        allCount[0] = allCount[1] + allCount[2]
        counter[1].innerHTML = allCount[2];
        declensionsOne();
    }

    buttonIncrement[2].onclick = function() {
        // alert('Нашел плюс')
        if (allCount[3] < 5) {
            allCount[3] += 1
        } else {
            return
        }
        counter[2].innerHTML = allCount[3];
        BabyText[0] = 'младенец'
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
        BabyText[0] = 'младенец'
        declensionsOne();
    }

    clear[0].onclick = function() {
        allCount[0] = 0;
        allCount[1] = 0;
        allCount[2] = 0;
        allCount[3] = 0;
        counter[0].innerHTML = allCount[0];
        counter[1].innerHTML = allCount[0];
        counter[2].innerHTML = allCount[3];
        conclusion[0].innerHTML = 'Сколько гостей'
    }

    exit[0].onclick = function() {
        iqdropdownLodger[0].classList.remove("menu-open")
    }

    function declensionsOne() {
        // max_min();
        if (allCount[0] == 0) {
            allText[0] = 'гостей'
        }
        if (allCount[0] == 1) {
            allText[0] = 'гость'
        }
        if (allCount[0] > 1) {
            allText[0] = 'гостя'
        }
        if (allCount[0] >= 5) {
            allText[0] = 'гостей'
        }
        if (allCount[3] == 1) {
            BabyText[0] = 'младенец'
        }
        if (allCount[3] > 1) {
            BabyText[0] = 'младенца'
        }
        if (allCount[3] >= 5) {
            BabyText[0] = 'младенцев'
        }
        if (allCount[3] == 0) {
            conclusion[0].innerHTML = allCount[0] + ' ' + allText[0]
        } else if (allCount[3] != 0) {
            conclusion[0].innerHTML = allCount[0] + ' ' + allText[0] + ', ' + allCount[3] + ' ' + BabyText[0]
        }
    }
});