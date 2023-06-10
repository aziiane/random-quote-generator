import axios from "axios"

export function queryQuotes(category) {
	if (category === "none" || category === null || category === undefined) {
		return axios.get("https://api.api-ninjas.com/v1/quotes", {
			headers: {
				"X-Api-Key": "uGGzyRTzrERFTrrIk3NPpw==7m6lSRS5Ljsc3tLh",
			},
		})
	} else {
		return axios.get(
			`https://api.api-ninjas.com/v1/quotes?category=${category}`,
			{
				headers: {
					"X-Api-Key": "uGGzyRTzrERFTrrIk3NPpw==7m6lSRS5Ljsc3tLh",
				},
			}
		)
	}
}
