var a = document.querySelector('.expandable-checkbox-list__hidden-header');
var b = document.querySelector('.container-amenities-list');
a.onclick = function() {
    if (b.classList == 'container-amenities-list') {
        b.classList.add("container-amenities-list__open");
    } else {
        b.classList.remove("container-amenities-list__open");
    }
}