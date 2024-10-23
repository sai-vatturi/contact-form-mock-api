function validateEmail(email: string): boolean {
	const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return emailPattern.test(email);
}

function handleSubmit(event: Event): boolean {
	event.preventDefault();

	const email = (document.getElementById("email") as HTMLInputElement).value.trim();
	const number = (document.getElementById("contactNumber") as HTMLInputElement).value.trim();

	if (!validateEmail(email)) {
		alert("Please enter a valid email address.");
		return false;
	}

	if (isNaN(Number(number)) || number.length < 10) {
		alert("Please enter a valid contact number (at least 10 digits).");
		return false;
	}

	sendFormData();
	return false;
}

async function sendFormData() {
	const name = (document.getElementById("name") as HTMLInputElement).value.trim();
	const email = (document.getElementById("email") as HTMLInputElement).value.trim();
	const number = (document.getElementById("contactNumber") as HTMLInputElement).value.trim();
	const subject = (document.getElementById("subject") as HTMLInputElement).value.trim();
	const message = (document.getElementById("message") as HTMLTextAreaElement).value.trim();

	try {
		const response = await fetch("https://6718553cb910c6a6e02bb619.mockapi.io/guvicontactapi/contact", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, email, number: Number(number), subject, message })
		});

		if (response.ok) {
			alert("Form Submitted Successfully!");
			(document.getElementById("contactForm") as HTMLFormElement).reset();
		} else {
			alert(`Failed to submit form. Response code: ${response.status}`);
		}
	} catch {
		alert("Submission Failed. Please check your internet connection.");
	}
}
