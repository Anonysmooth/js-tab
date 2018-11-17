function openTab(evt, page){

    var i, pages, links;
    // cacher les pages
    pages = document.getElementsByClassName("content");
    for(i = 0; i < pages.length; i++ ){
        pages[i].style.display = "none";
    }

    //remove active tab
    links = document.getElementsByClassName("link");
    for (i = 0 ; i < links.length; i++) {
        links[i].className = links[i].className.replace("active","");
    }

    //set active page & tabs
    document.getElementById(page).style.display = "block";
    evt.currentTarget.classList.add( "active");
    //document.getElementsByTagName(li).style.background-color = "red";

}

function openLi(event,liste){

    //remove active tab
    links = document.getElementsByClassName("liste");
    for (i = 0 ; i < links.length; i++) {
        links[i].className = links[i].className.replace("opened","");
    }

    event.currentTarget.classList.add( "opened");
}