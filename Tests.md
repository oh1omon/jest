1. Books Class: testing with and without providing collection as an argument to onstructor and setting expect functions according to the actual expectations

2. GetById:

calling function with:

-   right parameter -> wait for right result
-   wrong parameter -> expect response to be null
-   without any parameter -> expect for error to be thrown

3. getAllIdsByName:

calling function with:

-   right parameter -> wait for right result
-   wrong parameter -> expect response to be an empty array
-   without any parameter -> expect response to be an empty array

4. getAllBookAuthors:

calling function with:

-   without any parameter -> expect response to be the right array

5. getAllBooksByAuthor:

calling function with:

-   right parameter -> wait for right result
-   wrong parameter -> expect response to be empty array
-   without any parameter -> expect for error to be thrown

6. hasTopics:

calling function with:

-   right parameter -> wait for true
-   wrong parameter -> wait for false
-   without any parameter -> wait for false

7. getBookTopcis:

calling function with:

-   right parameter -> wait for right result
-   wrong parameter -> expect response to be empty array
-   without any parameter -> expect for error to be thrown

8. getPriceWithoutExtras:

calling function with:

-   right parameter -> wait for right result
-   wrong parameter -> expect for error to be thrown
-   without any parameter -> expect for error to be thrown

9. getTotalPrice:

calling function with:

-   right parameter -> wait for right result
-   wrong parameter -> expect for error to be thrown
-   without any parameter -> expect for error to be thrown

10. getPriceOfTheExtras:

calling function with:

-   right parameter -> wait for right result
-   bookId of the book with no extras -> wait for 0
-   wrong parameter -> expect for error to be thrown
-   without any parameter -> expect for error to be thrown
