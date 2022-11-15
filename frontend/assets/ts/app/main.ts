const form = document.querySelector("#new_contact")
form?.addEventListener("submit", async (e) => {
	e.preventDefault()
	const payload = {
		contact_name: e.target.elements.contact_name.value,
		contact_email: e.target.elements.contact_email.value,
		contact_message: e.target.elements.contact_message.value,
	}
	console.log('e', payload);
	try {
		const response = await fetch('http://localhost:4000', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',

			},
			body: JSON.stringify(payload)
		});
		if (response.ok) {
			const data = await response.json();
			console.log(data);
		}
	} catch (error) {
		console.log('error', error)
	}
})
console.log("TS IN HUGO")