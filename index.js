const form = document.querySelector('form')
const textPole = document.querySelector('input')


const odebirat = (event) => {
	event.preventDefault()
	const input = document.querySelector('input')
	const email = input.value
	form.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email}.`
}

const kontrolaText = (event) => {
	if (textPole.value === '' || textPole.value.indexOf('@') === -1) {
		textPole.classList.add('text-pole')
	} else {
		textPole.classList.remove('text-pole')
	}
}
form.addEventListener('submit', odebirat)
textPole.addEventListener('input', kontrolaText)