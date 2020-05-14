$(document).ready(() => {
    var CountFirst = '';
    var CountSecond = '';
    var CountThird = '';
    var TextThird = '';
    var TotalScore = '0';
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
            // if (CountThird >= 5 || CountThird == 0) {
            //     textPlural = 'младенцев'
            // } else if (CountThird > 1 && CountThird < 5) {
            //     textPlural = 'младенца'
            // } else if (CountThird == 1) {
            //     textPlural = 'младенец'
            // }
            // document.querySelector('.iqdropdown-selection').innerHTML = totalItems + ' ' + textPlural + ', ' + CountThird + ' ' + textPlural
        },
        calculation: (id, count, totalItems) => {
            if (id == 'first-item1') {
                CountFirst = count
                TotalScore = CountSecond + CountFirst
            } else if (id == 'first-item2') {
                CountSecond = count
                TotalScore = CountSecond + CountFirst
            } else if (id == 'first-item3') {
                CountThird = count
                TextThird = 'младенец'
            }

        },
        declensions: (id, count, totalItems) => {
            if ((TotalScore >= 5) || (TotalScore == 0)) {
                textPlural = 'гостей'
            } else if ((TotalScore > 1) && (TotalScore < 5)) {
                textPlural = 'гостя'
            } else if (TotalScore == 1) {
                textPlural = 'гость'
            }
            if ((CountThird >= 5) || (CountThird == 0)) {
                TextThird = 'младенцев'
            } else if ((CountThird > 1) && (CountThird < 5)) {
                TextThird = 'младенца'
            } else if (CountThird == 1) {
                TextThird = 'младенец'
            }
            if (TotalScore == '') {
                document.querySelector('.iqdropdown-selection').innerHTML = '0' + ' ' + 'гостей' + ', ' + CountThird + ' ' + TextThird
            } else {
                document.querySelector('.iqdropdown-selection').innerHTML = TotalScore + ' ' + textPlural + ', ' + CountThird + ' ' + TextThird
            }
            if (CountThird == '') {
                document.querySelector('.iqdropdown-selection').innerHTML = TotalScore + ' ' + textPlural
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