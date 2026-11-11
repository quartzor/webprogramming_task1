document.addEventListener("DOMContentLoaded", function () {
	const showMore = document.getElementById("showMore");
	const moreText = document.getElementById("moreText");

	if (showMore && moreText) {
		showMore.addEventListener("click", function () {
			moreText.classList.toggle("d-none");
			showMore.textContent = moreText.classList.contains("d-none") ? "Подробнее" : "Скрыть";
		});
	}

	const projects = document.getElementById("projects");

	if (projects) {
		fetch("data/projects.json")
			.then(response => response.json())
			.then(data => {
				data.forEach(project => {
					projects.innerHTML += `
						<div class="col-md-6 mb-3">
							<div class="card p-3">
								<h5>${project.title}</h5>
								<p>${project.description}</p>
							</div>
						</div>`;
				});
			})
			.catch(() => {
				projects.textContent = "Не удалось загрузить информацию.";
			});
	}

	const form = document.getElementById("contactForm");

	if (form) {
		form.addEventListener("submit", function (event) {
			event.preventDefault();

			const name = document.getElementById("name").value.trim();
			const email = document.getElementById("email").value.trim();
			const comment = document.getElementById("comment").value.trim();
			const message = document.getElementById("formMessage");

			if (!name || !email || !comment) {
				message.textContent = "Заполните все поля.";
				return;
			}

			message.textContent = "Сообщение успешно отправлено!";
			form.reset();
		});
	}
});