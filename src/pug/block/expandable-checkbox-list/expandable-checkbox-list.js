var a = document.querySelectorAll('.expandable-checkbox-list__hidden-header')[0];
var a1 = document.querySelectorAll('.expandable-checkbox-list__hidden-header')[1];
var b = document.querySelectorAll('.container-amenities-list')[0];
var b1 = document.querySelectorAll('.container-amenities-list')[1];
var c = ['', ''];
var d = ['', ''];
d[0] = b;
d[1] = b1;
c[0] = a;
c[1] = a1;

c[0].onclick = function() {
    if (d[0].classList == 'container-amenities-list') {
        d[0].classList.add("container-amenities-list__open");
    } else {
        d[0].classList.remove("container-amenities-list__open");
    }
}

c[1].onclick = function() {
    if (d[1].classList == 'container-amenities-list') {
        d[1].classList.add("container-amenities-list__open");
    } else {
        d[1].classList.remove("container-amenities-list__open");
    }
}