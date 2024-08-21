const form = document.getElementById(`new_contact`)
const host = `https://wp.tmy.io`;
// const host = `http://localhost:8000`
const submitButton = document.querySelector('[type="submit"]')
form.addEventListener(`submit`, (e) => {
	e.preventDefault()
	submitButton.disabled = true
	submitButton.value = "Sending..."
	const auth = 'G7v2E4k5pR3aM1iD9sT8hN6cK4xL0oP3bH5jC2yZ9q'
	const formData = new FormData(form)
	const data = Object.fromEntries(formData)
	const email = encodeURIComponent(data['contact[email]'])
	const message = encodeURIComponent(data['contact[message]'])
	const name = encodeURIComponent(data['contact[name]'])
	const url = `${host}/wp-json/tmy/v1/send_mail?from=${email}&name=${name}&message=${message}&auth=${auth}`
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			submitButton.value = "Done"
			setTimeout(() => {
				submitButton.value = "Send"
			}, 3000)
		})
		.catch((error) => {
			console.error(error)
		})

})