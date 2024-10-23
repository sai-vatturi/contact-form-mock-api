var __awaiter =
	(this && this.__awaiter) ||
	function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
				? value
				: new P(function (resolve) {
						resolve(value);
					});
		}
		return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}
			function rejected(value) {
				try {
					step(generator["throw"](value));
				} catch (e) {
					reject(e);
				}
			}
			function step(result) {
				result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	};
var __generator =
	(this && this.__generator) ||
	function (thisArg, body) {
		var _ = {
				label: 0,
				sent: function () {
					if (t[0] & 1) throw t[1];
					return t[1];
				},
				trys: [],
				ops: []
			},
			f,
			y,
			t,
			g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
		return (
			(g.next = verb(0)),
			(g["throw"] = verb(1)),
			(g["return"] = verb(2)),
			typeof Symbol === "function" &&
				(g[Symbol.iterator] = function () {
					return this;
				}),
			g
		);
		function verb(n) {
			return function (v) {
				return step([n, v]);
			};
		}
		function step(op) {
			if (f) throw new TypeError("Generator is already executing.");
			while ((g && ((g = 0), op[0] && (_ = 0)), _))
				try {
					if (((f = 1), y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)) return t;
					if (((y = 0), t)) op = [op[0] & 2, t.value];
					switch (op[0]) {
						case 0:
						case 1:
							t = op;
							break;
						case 4:
							_.label++;
							return { value: op[1], done: false };
						case 5:
							_.label++;
							y = op[1];
							op = [0];
							continue;
						case 7:
							op = _.ops.pop();
							_.trys.pop();
							continue;
						default:
							if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
								_ = 0;
								continue;
							}
							if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
								_.label = op[1];
								break;
							}
							if (op[0] === 6 && _.label < t[1]) {
								_.label = t[1];
								t = op;
								break;
							}
							if (t && _.label < t[2]) {
								_.label = t[2];
								_.ops.push(op);
								break;
							}
							if (t[2]) _.ops.pop();
							_.trys.pop();
							continue;
					}
					op = body.call(thisArg, _);
				} catch (e) {
					op = [6, e];
					y = 0;
				} finally {
					f = t = 0;
				}
			if (op[0] & 5) throw op[1];
			return { value: op[0] ? op[1] : void 0, done: true };
		}
	};
function validateEmail(email) {
	var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return emailPattern.test(email);
}
function handleSubmit(event) {
	event.preventDefault();
	var email = document.getElementById("email").value.trim();
	var number = document.getElementById("contactNumber").value.trim();
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
function sendFormData() {
	return __awaiter(this, void 0, void 0, function () {
		var name, email, number, subject, message, response, _a;
		return __generator(this, function (_b) {
			switch (_b.label) {
				case 0:
					name = document.getElementById("name").value.trim();
					email = document.getElementById("email").value.trim();
					number = document.getElementById("contactNumber").value.trim();
					subject = document.getElementById("subject").value.trim();
					message = document.getElementById("message").value.trim();
					_b.label = 1;
				case 1:
					_b.trys.push([1, 3, , 4]);
					return [
						4 /*yield*/,
						fetch("https://6718553cb910c6a6e02bb619.mockapi.io/guvicontactapi/contact", {
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({ name: name, email: email, number: Number(number), subject: subject, message: message })
						})
					];
				case 2:
					response = _b.sent();
					if (response.ok) {
						alert("Form Submitted Successfully!");
						document.getElementById("contactForm").reset();
					} else {
						alert("Failed to submit form. Response code: ".concat(response.status));
					}
					return [3 /*break*/, 4];
				case 3:
					_a = _b.sent();
					alert("Submission Failed. Please check your internet connection.");
					return [3 /*break*/, 4];
				case 4:
					return [2 /*return*/];
			}
		});
	});
}
