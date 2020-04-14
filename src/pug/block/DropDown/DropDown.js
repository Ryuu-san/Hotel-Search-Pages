$(document).ready(() => {
    var testtestTwo = '';
    var testtest = '';
    var testCount = '';
    var textTest = '';
    var tets = '';
    $('.iqdropdown').iqDropdown({
        // max total items
        maxItems: Infinity,
        // min total items
        minItems: 0,
        // text to show on the dropdown override data-selection-text attribute
        selectionText: 'гость',
        // text to show for multiple items
        textPlural: 'Сколько гостей',
        controls: {
            position: 'right',
            displayCls: 'iqdropdown-item-display',
            controlsCls: 'iqdropdown-item-controls',
            counterCls: 'counter'
        },
        // fires when an item quantity changes
        onChange: (id, count, totalItems) => {
            // if ((totalItems >= 5) || (totalItems == 0)) {
            //     textPlural = 'гостей'
            // } else if ((totalItems > 1) && (totalItems < 5)) {
            //     textPlural = 'гостя'
            // } else if (totalItems == 1) {
            //     textPlural = 'гость'
            // }
            // if (testCount >= 5 || testCount == 0) {
            //     textPlural = 'младенцев'
            // } else if (testCount > 1 && testCount < 5) {
            //     textPlural = 'младенца'
            // } else if (testCount == 1) {
            //     textPlural = 'младенец'
            // }
            // document.querySelector('.iqdropdown-selection').innerHTML = totalItems + ' ' + textPlural + ', ' + testCount + ' ' + textPlural
        },
        calculation: (id, count, totalItems) => {
            if (id == 'item1') {
                testtestTwo = count
                tets = testtest + testtestTwo
            } else if (id == 'item2') {
                testtest = count
                tets = testtest + testtestTwo
            } else if (id == 'item3') {
                testCount = count
                textTest = 'младенец'
            }
        },
        declensions: (id, count, totalItems) => {
            if ((tets >= 5) || (tets == 0)) {
                textPlural = 'гостей'
            } else if ((tets > 1) && (tets < 5)) {
                textPlural = 'гостя'
            } else if (tets == 1) {
                textPlural = 'гость'
            }
            if ((testCount >= 5) || (testCount == 0)) {
                textTest = 'младенцев'
            } else if ((testCount > 1) && (testCount < 5)) {
                textTest = 'младенца'
            } else if (testCount == 1) {
                textTest = 'младенец'
            }
            if (tets == '') {
                document.querySelector('.iqdropdown-selection').innerHTML = '0' + ' ' + 'гостей' + ', ' + testCount + ' ' + textTest
            } else {
                document.querySelector('.iqdropdown-selection').innerHTML = tets + ' ' + textPlural + ', ' + testCount + ' ' + textTest
            }
            if (testCount == '') {
                document.querySelector('.iqdropdown-selection').innerHTML = tets + ' ' + textPlural
            }
        },
        // return false to prevent an item decrement
        beforeDecrement: (id, itemCount) => {
            return true
        },
        // return false to prevent an item increment
        beforeIncrement: (id, itemCount) => {
            return true
        }
    });
});