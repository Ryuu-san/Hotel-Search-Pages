$(document).ready(() => {
    $('.iqdropdown').iqDropdown({
        // max total items
        maxItems: Infinity,
        // min total items
        minItems: 0,
        // text to show on the dropdown override data-selection-text attribute
        selectionText: 'Пива',
        // text to show for multiple items
        textPlural: '',
        // optionally can use setSelectionText function to override selectionText

        // buttons to increment/decrement

    });
});