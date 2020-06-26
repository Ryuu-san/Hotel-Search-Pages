$(document).ready(() => {
    var iqdropdownLodger = document.querySelectorAll('.iqdropdown-lodger');
    var buttonIncrement = document.querySelectorAll('.iqdropdown-lodger .button-increment');
    var buttonDecrement = document.querySelectorAll('.iqdropdown-lodger .button-decrement');
    var clear = document.querySelectorAll('.iqdropdown-lodger .clear');
    var exit = document.querySelectorAll('.iqdropdown-lodger .exit');
    var counter = document.querySelectorAll('.iqdropdown-lodger .counter');
    var conclusion = document.querySelectorAll('.selection-lodger');
    // var testItem = document.createElement('div');
    // testItem.className = 'iqdropdown-item-controls';
    // testItem.innerHTML = '<button class="button-decrement"><i class="icon-decrement"></i></button> <span class="counter">0</span><button class="button-increment"><i class="icon-decrement icon-increment"></i></button>'
    // testMenu[0].appendChild(testItem);
    // testMenu[1].appendChild(testItem);
    // testMenu[2].appendChild(testItem);
    var allCount = [0, 0, 0, 0, 0, 0, 0, 0];
    var allText = ['гостей', 'гостей'];
    var BabyText = ['', ''];
    conclusion[0].onclick = function() {
        iqdropdownLodger[0].classList.toggle("menu-open")
    }

    conclusion[1].onclick = function() {
        iqdropdownLodger[1].classList.toggle("menu-open")
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

    buttonIncrement[3].onclick = function() {
        // alert('Нашел плюс')
        if (allCount[5] < 5) {
            allCount[5] += 1
        } else {
            return
        }
        allCount[4] = allCount[5] + allCount[6]
        counter[3].innerHTML = allCount[5];
        declensionsTwo();
    }

    buttonDecrement[3].onclick = function() {
        // alert('Нашел плюс')
        if (allCount[5] > 0) {
            allCount[5] -= 1
        } else {
            return
        }
        allCount[4] = allCount[5] + allCount[6]
        counter[3].innerHTML = allCount[5];
        declensionsTwo();
    }

    buttonIncrement[4].onclick = function() {
        // alert('Нашел плюс')
        if (allCount[6] < 5) {
            allCount[6] += 1
        } else {
            return
        }
        allCount[4] = allCount[5] + allCount[6]
        counter[4].innerHTML = allCount[6];
        declensionsTwo();
    }

    buttonDecrement[4].onclick = function() {
        // alert('Нашел плюс')
        if (allCount[6] > 0) {
            allCount[6] -= 1
        } else {
            return
        }
        allCount[4] = allCount[5] + allCount[6]
        counter[4].innerHTML = allCount[6];
        declensionsTwo();
    }

    buttonIncrement[5].onclick = function() {
        // alert('Нашел плюс')
        if (allCount[7] < 5) {
            allCount[7] += 1
        } else {
            return
        }
        counter[5].innerHTML = allCount[7];
        BabyText[1] = 'младенец'
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
        BabyText[1] = 'младенец'
        declensionsTwo();
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

    clear[1].onclick = function() {
        allCount[4] = 0;
        allCount[5] = 0;
        allCount[6] = 0;
        allCount[7] = 0;
        counter[3].innerHTML = allCount[4];
        counter[4].innerHTML = allCount[4];
        counter[5].innerHTML = allCount[4];
        conclusion[1].innerHTML = 'Сколько гостей'
    }
    exit[0].onclick = function() {
        iqdropdownLodger[0].classList.remove("menu-open")
    }

    exit[1].onclick = function() {
        iqdropdownLodger[1].classList.remove("menu-open")
    }

    function declensionsTwo() {
        if (allCount[4] == 0) {
            allText[1] = 'гостей'
        }
        if (allCount[4] == 1) {
            allText[1] = 'гость'
        }
        if (allCount[4] > 1) {
            allText[1] = 'гостя'
        }
        if (allCount[4] >= 5) {
            allText[1] = 'гостей'
        }
        if (allCount[7] == 1) {
            BabyText[1] = 'младенец'
        }
        if (allCount[7] > 1) {
            BabyText[1] = 'младенца'
        }
        if (allCount[7] >= 5) {
            BabyText[1] = 'младенцев'
        }
        if (allCount[7] == 0) {
            conclusion[1].innerHTML = allCount[4] + ' ' + allText[1]
        } else if (allCount[7] != 0) {
            conclusion[1].innerHTML = allCount[4] + ' ' + allText[1] + ', ' + allCount[7] + ' ' + BabyText[1]
        }
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

    // function max_min() {
    //     if (allCount[3] > 5) {
    //         allCount[3] = 5;
    //         counter[2].innerHTML = 5;
    //     } else if (allCount[0] > 10) {
    //         allCount[0] = 10;
    //     }

    // }
    // var ContainerText = '';
    // var arrCountFirst = ['', '', '', ''];
    // var arrTextFirst = ['', ''];
    // var arrCountSecond = ['', '', '', ''];
    // var arrTextSecond = ['', ''];
    // var allText = '';
    // var allCount = '';
    // var babyText = '';
    // var babyCount = '';
    // var GlobalCount = 0;
    // var classOne = document.querySelector('.classOne');
    // var classTwo = document.querySelector('.classTwo');
    // var buttonClear = document.querySelector('.clear');

    // buttonClear.onclick = function() {
    //     GlobalCount += 1;
    //     arrCountFirst[0] = 0;
    //     arrCountFirst[1] = 0;
    //     arrTextFirst[0] = '';
    //     arrTextFirst[1] = '';
    //     arrCountFirst[2] = 0;
    //     arrCountFirst[3] = 0;
    //     ContainerText.innerHTML = 'Сколько гостей';
    // }

    // function test(id, container) {
    //     if (id == 'first-item1' || id == 'first-item2' || id == 'first-item3') {
    //         allCount = arrCountFirst[0];
    //         babyCount = arrCountFirst[1];
    //         babyText = arrTextFirst[1];
    //         allText = arrTextFirst[0];
    //         ContainerText = classOne;
    //     }
    //     if (id == 'second-item1' || id == 'second-item2' || id == 'second-item3') {
    //         allCount = arrCountSecond[0];
    //         babyCount = arrCountSecond[1];
    //         babyText = arrTextSecond[1];
    //         allText = arrTextSecond[0];
    //         ContainerText = classTwo;
    //     }
    // }
    // // Selector.onclick = function() {
    // //         if (this.classList.contains('classOne')) {
    // //             alert('Нашел первый')
    // //         }
    // //         if (Selector.classList.contains('classTwo')) {
    // //             alert('Нашел второй')
    // //         }
    // //     }
    // // 1 объединить в один 
    // // придумать с классами nth
    // // SelectorOne.onclick = function() {
    // //     alert('Нашел первый')
    // // }
    // // SelectorTwo.onclick = function() {
    // //     alert('Нашел второй')
    // // }
    // $('.iqdropdown').iqDropdown({
    //     // max total items
    //     maxItems: Infinity,
    //     // min total items
    //     minItems: 0,
    //     // text to show on the dropdown override data-selection-text attribute
    //     selectionText: 'гость',
    //     // text to show for multiple items
    //     textPlural: 'Сколько гостей',
    //     controls: {
    //         position: 'right',
    //         displayCls: 'iqdropdown-item-display',
    //         controlsCls: 'iqdropdown-item-controls',
    //         counterCls: 'counter'
    //     },
    //     // fires when an item quantity changes
    //     onChange: (id, count, totalItems) => {
    //         // if ((totalItems >= 5) || (totalItems == 0)) {
    //         //     textPlural = 'гостей'
    //         // } else if ((totalItems > 1) && (totalItems < 5)) {
    //         //     textPlural = 'гостя'
    //         // } else if (totalItems == 1) {
    //         //     textPlural = 'гость'
    //         // }
    //         // if (CountThird >= 5 || CountThird == 0) {
    //         //     textPlural = 'младенцев'
    //         // } else if (CountThird > 1 && CountThird < 5) {
    //         //     textPlural = 'младенца'
    //         // } else if (CountThird == 1) {
    //         //     textPlural = 'младенец'
    //         // }
    //         // document.querySelector('.iqdropdown-selection').innerHTML = totalItems + ' ' + textPlural + ', ' + CountThird + ' ' + textPlural
    //     },
    //     calculation: (id, count, totalItems) => {
    //         if (GlobalCount == 1) {
    //             alert('клик' + '\n' + arrCountFirst[2] + '\n' + arrCountFirst[0] + '\n' + arrCountFirst[3] + '\n' + arrCountFirst[1])
    //             if (id == 'first-item1') {
    //                 count = 0
    //                 console.log(count)
    //             }
    //             GlobalCount -= 1
    //         }
    //         if (id == 'first-item1') {
    //             arrCountFirst[2] = count
    //             arrCountFirst[0] = arrCountFirst[2] + arrCountFirst[3]
    //             console.log(count)
    //         } else if (id == 'first-item2') {
    //             arrCountFirst[3] = count
    //             arrCountFirst[0] = arrCountFirst[2] + arrCountFirst[3]
    //             console.log(count)
    //         } else if (id == 'first-item3') {
    //             arrCountFirst[1] = count
    //             arrTextFirst[1] = 'младенец'
    //         }
    //         if (id == 'second-item1') {
    //             arrCountSecond[2] = count
    //             arrCountSecond[0] = arrCountSecond[2] + arrCountSecond[3]
    //         } else if (id == 'second-item2') {
    //             arrCountSecond[3] = count
    //             arrCountSecond[0] = arrCountSecond[2] + arrCountSecond[3]
    //         } else if (id == 'second-item3') {
    //             arrCountSecond[1] = count
    //             arrTextSecond[1] = 'младенец'
    //         }
    //         test(id);
    //     },
    //     declensionsOne: (id, count, totalItems) => {
    //         if ((arrCountFirst[0] >= 5) || (arrCountFirst[0] == 0)) {
    //             arrTextFirst[0] = 'гостей'
    //         } else if ((arrCountFirst[0] > 1) && (arrCountFirst[0] < 5)) {
    //             arrTextFirst[0] = 'гостя'
    //         } else if (arrCountFirst[0] == 1) {
    //             arrTextFirst[0] = 'гость'
    //         }
    //         if ((arrCountFirst[1] >= 5) || (arrCountFirst[1] == 0)) {
    //             arrTextFirst[1] = 'младенцев'
    //         } else if ((arrCountFirst[1] > 1) && (arrCountFirst[1] < 5)) {
    //             arrTextFirst[1] = 'младенца'
    //         } else if (arrCountFirst[1] == 1) {
    //             arrTextFirst[1] = 'младенец'
    //         }
    //         if ((arrCountSecond[0] >= 5) || (arrCountSecond[0] == 0)) {
    //             arrTextSecond[0] = 'гостей'
    //         } else if ((arrCountSecond[0] > 1) && (arrCountSecond[0] < 5)) {
    //             arrTextSecond[0] = 'гостя'
    //         } else if (arrCountSecond[0] == 1) {
    //             arrTextSecond[0] = 'гость'
    //         }
    //         if ((arrCountSecond[1] >= 5) || (arrCountSecond[1] == 0)) {
    //             arrTextSecond[1] = 'младенцев'
    //         } else if ((arrCountSecond[1] > 1) && (arrCountSecond[1] < 5)) {
    //             arrTextSecond[1] = 'младенца'
    //         } else if (arrCountSecond[1] == 1) {
    //             arrTextSecond[1] = 'младенец'
    //         }
    //         test(id);
    //         if (allCount == '') {
    //             ContainerText.innerHTML = '0' + ' ' + 'гостей' + ', ' + babyCount + ' ' + babyText
    //         } else if (allCount !== '') {
    //             ContainerText.innerHTML = allCount + ' ' + allText + ', ' + babyCount + ' ' + babyText
    //         }
    //         if (babyCount == '') {
    //             ContainerText.innerHTML = allCount + ' ' + allText
    //         }
    //     },
    //     // return false to prevent an item decrement
    //     beforeDecrement: (id, itemCount) => {
    //         return true
    //     },
    //     // return false to prevent an item increment
    //     beforeIncrement: (id, itemCount) => {
    //         return true
    //     }
    // });
});