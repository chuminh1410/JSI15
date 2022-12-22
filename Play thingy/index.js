/*
*   A simple loading icon based on my 
*   own logo that I use for reddit and
*   GitHub. Made entirely with CSS components
*   with no external resources. Click the
*   loader to view the original logo.
*
*   Yes, it's based on the Photoshop logo.
*/

var full=false;

function fill(){
  full=!full;
  document.getElementById("logocontainer").style.backgroundColor=full?"#3ebffa":"transparent";
}