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
		return !(!id || !this.collection.filter(item => item.id === id)[0].topics.length > 0)
	}
	getBookTopics(id) {
		if (!id) throw new Error('Parameter is actuallt missing')
		return this.collection.filter(item => item.id === id)[0].topics
	}
	getPriceWithoutExtras(id) {
		if (!id) throw new Error('parameter is missing')
		const found = this.collection.filter(item => item.id === id)
		if (found.length === 0) throw new Error(`nothing found with the given id : ${id}`)
		return found[0].price
	}
	getTotalPrice(id) {
		if (!id) throw new Error('parameter is missing')
		const found = this.collection.filter(item => item.id === id)
		if (found.length === 0) throw new Error(`nothing found with the given id : ${id}`)
		return found[0].price + found[0].extras.map(item => item.price).reduce((acc, curr) => acc + curr)
	}
	getPriceOfTheExtras(id) {
		if (!id) throw new Error('parameter is missing')
		const found = this.collection.filter(item => item.id === id)
		if (found.length === 0) throw new Error(`nothing found with the given id : ${id}`)
		return found[0].extras.map(item => item.price).reduce((acc, curr) => acc + curr, 0)
	}
}

module.exports = Books
