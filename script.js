const openSideNavBtn = document.getElementById('open-side-nav-btn');
const closeSideNavBtn = document.getElementById('close-side-nav-btn');
const sideNav = document.querySelector('.side-nav');
const submenuHeaders = document.getElementsByClassName('submenu-header');

openSideNavBtn.addEventListener('click', function () {
	sideNav.classList.add('open');
});

closeSideNavBtn.addEventListener('click', function () {
	sideNav.classList.remove('open');
});

// open/close submenus
for (i = 0; i < submenuHeaders.length; i++) {
	// The event listeners are added to the anchor tag and not the list tag to
	// prevent event bubbling from closing the submenu when clicking on an item
	submenuHeaders.item(i).addEventListener('click', function (e) {
		this.parentElement.classList.toggle('active');
	});
}
