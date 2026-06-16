var minColumsCount = 2;
var maxColumsCount = 16;
var gridItemDesiredSize = 240;
var navBarHeight = 51;
var bottomPagePadding = 8;

function getScrollbarWidth() {
    // Creating invisible container
    var outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);

    // Creating inner element and placing it in the container
    var inner = document.createElement('div');
    outer.appendChild(inner);

    // Calculating difference between container's full width and the child width
    var scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);

    return scrollbarWidth;
}

function updateGridItemsSize() {
    var galleryItems = document.getElementsByClassName("gallery-item");
    var elements = galleryItems.length;

    var itemSize = window.innerWidth / maxColumsCount; //fallback
    for (var s = minColumsCount; s < maxColumsCount; s++) {
        if (window.innerWidth <= s * gridItemDesiredSize) {
            itemSize = window.innerWidth / s;
            var necessaryRows = Math.ceil(elements / s);
            if ((necessaryRows * itemSize) + navBarHeight + bottomPagePadding > window.innerHeight) {
                itemSize -= (getScrollbarWidth() / s);
                document.body.style.overflow = 'visible';
            } else {
                document.body.style.overflow = 'hidden';
            }

            break;
        }
    }

    itemSize = itemSize + "px";
    for (var i = 0; i < galleryItems.length; i++) {
        galleryItems[i].style.width = itemSize;
        galleryItems[i].style.height = itemSize;
    }
}

window.addEventListener('load', function () { updateGridItemsSize(); }, true);
window.addEventListener('resize', function () { updateGridItemsSize(); }, true);