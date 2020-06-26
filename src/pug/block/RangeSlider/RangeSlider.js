$(document).ready(() => {
    $("#demo").ionRangeSlider({
        // min value
        min: 0,

        // max value
        max: 16000,

        // overwrite default FROM setting
        from: 5000,

        // overwrite default TO setting
        to: 10000,

        // Choose slider type, 
        // could be single - for one handle, or double four two handles
        type: "double",

        // slider step
        step: 1,

        // Set minimum diapason between sliders.
        min_interval: 0,

        // Set maximum diapason between sliders.
        max_interval: 0,

        // Allow user to drag whole range.
        drag_interval: false,

        // Set up your own array of possible slider values. 
        values: [],

        p_values: [],

        // Fix position of left (or single) handle.
        from_fixed: false,

        // Set minimum limit for left handle.
        from_min: null,

        // Set the maximum limit for left handle
        from_max: null,

        // Highlight the limits for left handle
        from_shadow: false,

        // Fix position of right handle.
        to_fixed: false,

        // Set the minimum limit for right handle
        to_min: null,

        // Set the maximum limit for right handle
        to_max: null,

        // Highlight the limits for right handle
        to_shadow: false,

        // Improve readability of long numbers.
        prettify_enabled: true,

        // Set up your own separator for long numbers.
        prettify_separator: " ",

        // Set up your own prettify function. Can be anything.
        prettify: null,

        // Slider will be always inside it's container.
        force_edges: false,

        // Activates keyboard controls. 
        keyboard: false,

        // Movement step, than controling from keyboard. In percents.
        keyboard_step: 5,

        // Enables <a href="https://www.jqueryscript.net/tags.php?/grid/">grid</a> of values.
        grid: false,

        // Set left and right grid borders.
        grid_margin: true,

        // Number of grid units.
        grid_num: 4,

        // Snap grid to sliders step (step param).
        grid_snap: false,

        // Hides min and max labels
        hide_min_max: false,

        // Hide from and to lables
        hide_from_to: false,

        // prefix value
        prefix: "",

        // postfix value
        postfix: " Р",

        // Special postfix, used only for maximum value
        max_postfix: "",

        // Used for "double" type and only if prefix or postfix was set up.
        decorate_both: true,

        // Set your own separator for close values. 
        values_separator: " - ",

        // disable slider
        disable: false,

        // called on slider start.
        onStart: null,

        // called on each values change.
        onChange: null,

        // called than user releases handle.
        onFinish: null,

        // called than slider is modified by external methods up<a href="https://www.jqueryscript.net/time-clock/">date</a> or reset
        onUpdate: null

    });
});