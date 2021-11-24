import logoImg from '../assets/images/logo.svg'

function navigation() {
	const navigation = document.createElement('nav')
	const logo = document.createElement('a')
	const home = document.createElement('a')
	const aboutUs = document.createElement('a')
	const img = document.createElement('img')
	// add classes
	navigation.classList.add('nav')
	home.classList.add('nav__item')
	logo.classList.add('nav__item', 'logo')
	aboutUs.classList.add('nav__item')
	// add links
	logo.href = 'index.html'
	home.href = '#'
	aboutUs.href = '#'
	// add text
	home.innerText = 'Home'
	aboutUs.innerText = 'About Us'
	// append together  
	logo.append(img)
	img.src = logoImg;
	img.alt = 'sample logo'
	navigation.append(home, logo, aboutUs)
	return navigation
}

export default navigation;