class Books {
	constructor(collection) {
		if (!collection) {
			throw new Error('No collection provided')
		}
		this.collection = collection
	}
	getById(id) {
		if (!id) throw new Error('parameter is missing')
		const result = this.collection.filter(item => item.id === id)
		if (result.length === 0) return null
		return result[0]
	}
	getAllIdsByName(value) {
		if (!value) return []
		return this.collection.filter(item => item.name === value)
	}
	getAllBookAuthors() {
		return [...new Set(this.collection.map(item => item.author))]
	}
	getAllBooksByAuthor(author) {
		if (!author) throw new Error('missing parameter')
		return this.collection.filter(item => item.author === author)
	}
	hasTopics(id) {
		//TODO
	}
	getBookTopics(id) {
		//TODO
	}
	getPriceWithoutExtras(id) {
		//TODO
	}
	getTotalPrice(id) {
		//TODO
	}
	getPriceOfTheExtras(id) {
		//TODO
	}
}

module.exports = Books
