document.addEventListener("DOMContentLoaded", function () {
	var passwordInput = document.getElementById("input-password");

	var eyeBtn = document.getElementById("eye-btn");
	var eyeIcon = document.getElementById("eye-icon");

	var rules = document.querySelectorAll(".rule");

	eyeBtn.onclick = function () {
		if (eyeIcon.classList.contains("bi-eye")) {
			passwordInput.setAttribute("type", "text");

			eyeIcon.classList.remove("bi-eye");
			eyeIcon.classList.add("bi-eye-slash");

			eyeBtn.classList.remove("btn-primary");
			eyeBtn.classList.add("btn-danger");
		} else {
			passwordInput.setAttribute("type", "password");

			eyeIcon.classList.remove("bi-eye-slash");
			eyeIcon.classList.add("bi-eye");

			eyeBtn.classList.remove("btn-danger");
			eyeBtn.classList.add("btn-primary");
		}
	};

	passwordInput.addEventListener("input", function (event) {
		const password = passwordInput.value;

		const conditions = {
			length: password.length >= 8,
			numbers: /\d/.test(password),
			lowerCase: /[a-z]/.test(password),
			upperCase: /[A-Z]/.test(password),
			specialSymbols: /[!@#$%^&*(),.?":{}|<>]/.test(password),
		};

		rules.forEach((rule) => {
			const ruleName = rule.getAttribute("data-rule");
			if (conditions[ruleName]) {
				rule.querySelector("i").classList.remove(
                    "bi-exclamation-circle"
				);
				rule.classList.remove("text-danger");

				rule.querySelector("i").classList.add("bi-check-circle");
				rule.classList.add("text-primary");
			} 
            
            else {
				rule.querySelector("i").classList.remove("bi-check-circle");
				rule.classList.remove("text-primary");

				rule.querySelector("i").classList.add("bi-exclamation-circle");
				rule.classList.add("text-danger");
			}
		});
	});
});
