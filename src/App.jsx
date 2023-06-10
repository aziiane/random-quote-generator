import { useQuery } from "react-query"
import "./App.css"
import { queryQuotes } from "./functions/quote-api"
import { useState } from "react"

function App() {
	const [currentCategory, setCurrentCategory] = useState()
	const [isCategoryChecked, setCategoryChecked] = useState()

	const quoteCategories = [
		"age",
		"alone",
		"amazing",
		"anger",
		"architecture",
		"art",
		"attitude",
		"beauty",
		"best",
		"birthday",
		"business",
		"change",
		"communications",
		"computers",
		"cool",
		"courage",
		"dad",
		"dating",
		"death",
		"design",
		"dreams",
		"education",
		"environmental",
		"equality",
		"experience",
		"failure",
		"faith",
		"family",
		"famous",
		"fear",
		"fitness",
		"food",
		"forgiveness",
		"freedom",
		"friendship",
		"funny",
		"future",
		"god",
		"good",
		"government",
		"graduation",
		"great",
		"happiness",
		"health",
		"history",
		"home",
		"hope",
		"humor",
		"imagination",
		"inspirational",
		"intelligence",
		"jealousy",
		"knowledge",
		"leadership",
		"learning",
		"legal",
		"life",
		"love",
		"marriage",
		"medical",
		"men",
		"mom",
		"money",
		"morning",
		"movies",
		"success",
	]
	const { isFetching, isLoading, refetch, data, isFetched, fetchStatus } =
		useQuery("quote-generator", () =>
		queryQuotes(currentCategory)
		)

	return isLoading ? (
		<h1>Loading...</h1>
	) : (
		<>
			<h1 className="title">Quotes Generator</h1>
			<div className="card">
				{!isFetching ? (
					<>
						<p className="quote">{data?.data[0].quote}</p>
						<p className="quote-author">-{data?.data[0].author}</p>
						<p className="quote-category">-{data?.data[0].category}</p>
					</>
				) : (
					<p>Fetching...</p>
				)}
				<select onChange={(e) => setCurrentCategory(e.target.value)}>
					<option value={"none"}>Aucune categorie</option>
					{quoteCategories.map((quoteCategorie) => (
						<option value={quoteCategorie} key={quoteCategorie}>
							{quoteCategorie.toUpperCase()}
						</option>
					))}
				</select>

				<button onClick={() => refetch()}>Generate new quote</button>
			</div>
		</>
	)
}

export default App
