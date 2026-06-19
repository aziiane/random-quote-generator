import axios from "axios"

export function queryQuotes(category) {
	if (category === "none" || category === null || category === undefined) {
		return axios.get("https://api.api-ninjas.com/v2/quotes", {
			headers: {
				"X-Api-Key": "6Z4k66CYTJq53HwnkvffTFcQ4lEED8jAxpYg9NOq",
			},
		})
	} else {
		return axios.get(
			`https://api.api-ninjas.com/v2/quotes?categories=${category}`,
			{
				headers: {
					"X-Api-Key": "6Z4k66CYTJq53HwnkvffTFcQ4lEED8jAxpYg9NOq",
				},
			}
		)
	}
}
