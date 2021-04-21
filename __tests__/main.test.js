const Books = require('../main.js')
const collection = require('../dataStorage.json')

describe('Books class', () => {
	it('should throw exception if collection is not provided to constructor', () => {
		expect(() => {
			new Books()
		}).toThrowError()
	})
	it('should not throw exception if collection is provided to constructor', () => {
		expect(() => {
			new Books(collection)
		}).not.toThrowError()
	})
	describe('getById function', () => {
		const BookStore = new Books(collection)
		it('should return book object matching the id', () => {
			const result = {
				id: 1,
				name: 'NoSql - New Hope',
				author: 'Layla Jones',
				topics: ['noSql', 'sql', 'future databases'],
				price: 25,
				extras: [
					{
						name: 'hard cover',
						price: 30
					},
					{
						name: 'cd',
						price: 15
					}
				]
			}

			expect(BookStore.getById(1)).toMatchObject(result)
		})
		it('should return null if there is no match', () => {
			expect(BookStore.getById(27)).toBeNull()
		})
		it('if parameter is missing, throws an exception "parameter missing"', () => {
			expect(() => {
				BookStore.getById()
			}).toThrowError()
		})
	})
	describe('getAllIdsByName function', () => {
		const BookStore = new Books(collection)
		it('should return an array of book id where the books name matches the given value', () => {
			const result = [
				{
					id: 3,
					name: 'Hacking databases',
					author: 'Emily White',
					topics: [],
					price: 30,
					extras: []
				}
			]

			expect(BookStore.getAllIdsByName('Hacking databases')).toMatchObject(result)
		})
		it('should return empty array if there is no match', () => {
			expect(BookStore.getAllIdsByName('Mister not the Mister')).toMatchObject([])
		})
		it('should return empty array if there is no value provided to the method', () => {
			expect(BookStore.getAllIdsByName()).toMatchObject([])
		})
	})
	describe('getAllBookAuthors function', () => {
		const BookStore = new Books(collection)
		it('should return an array of book id where the books name matches the given value', () => {
			const result = ['Layla Jones', 'Antony Lee', 'Emily White']

			expect(BookStore.getAllBookAuthors()).toMatchObject(result)
		})
	})
	describe('getAllBooksByAuthor function', () => {
		const BookStore = new Books(collection)
		it('should return an array of book objects of given author', () => {
			const result = [
				{
					id: 3,
					name: 'Hacking databases',
					author: 'Emily White',
					topics: [],
					price: 30,
					extras: []
				}
			]

			expect(BookStore.getAllBooksByAuthor('Emily White')).toMatchObject(result)
		})
		it('should return empty array if there is no match', () => {
			expect(BookStore.getAllBooksByAuthor('Mister not the Mister')).toMatchObject([])
		})
		it('should return exception if there is no author provided to the method', () => {
			expect(() => {
				BookStore.getAllBooksByAuthor()
			}).toThrowError()
		})
	})
	describe('hasTopics function', () => {
		const BookStore = new Books(collection)
		it('should return true if the book has topics ', () => {
			expect(BookStore.hasTopics(1)).toBe(true)
		})
		it('should return false if the book has topics ', () => {
			expect(BookStore.hasTopics(3)).toBe(false)
		})
		it('should return false if parameter id is missing false is returned', () => {
			expect(BookStore.hasTopics()).toBe(false)
		})
	})
	describe('getBookTopcis function', () => {
		const BookStore = new Books(collection)
		it('should return an array of book topcis of given book id', () => {
			const result = ['data storages', 'sql', 'noSql']
			expect(BookStore.getBookTopics(2)).toMatchObject(result)
		})
		it('should return empty array if there is no match', () => {
			expect(BookStore.getBookTopics(3)).toMatchObject([])
		})
		it('should return exception if there is no id provided to the method', () => {
			expect(() => {
				BookStore.getBookTopics()
			}).toThrowError()
		})
	})
	describe('getPriceWtihoutExtras function', () => {
		const BookStore = new Books(collection)
		it('should return price of book of given id', () => {
			const result = 45
			expect(BookStore.getPriceWithoutExtras(2)).toBe(result)
		})
		it('should return exception if there is no id provided to the method', () => {
			expect(() => {
				BookStore.getPriceWithoutExtras()
			}).toThrowError()
		})
		it('should return exception if there is no book find with this id', () => {
			expect(() => {
				BookStore.getPriceWithoutExtras(23)
			}).toThrowError()
		})
	})
	describe('getTotalPrice function', () => {
		const BookStore = new Books(collection)
		it('should return price of book of given id', () => {
			const result = 45 + 80 + 65
			expect(BookStore.getTotalPrice(2)).toBe(result)
		})
		it('should return exception if there is no id provided to the method', () => {
			expect(() => {
				BookStore.getTotalPrice()
			}).toThrowError()
		})
		it('should return exception if there is no book find with this id', () => {
			expect(() => {
				BookStore.getTotalPrice(23)
			}).toThrowError()
		})
	})
	describe('getPriceOfTheExtras function', () => {
		const BookStore = new Books(collection)
		it('should return extras of book of given id', () => {
			const result = 80 + 65
			expect(BookStore.getPriceOfTheExtras(2)).toBe(result)
		})
		it('should return 0 if no extras in the book of given id', () => {
			const result = 0
			expect(BookStore.getPriceOfTheExtras(3)).toBe(result)
		})
		it('should return exception if there is no id provided to the method', () => {
			expect(() => {
				BookStore.getPriceOfTheExtras()
			}).toThrowError()
		})
		it('should return exception if there is no book find with this id', () => {
			expect(() => {
				BookStore.getPriceOfTheExtras(23)
			}).toThrowError()
		})
	})
})
