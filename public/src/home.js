

//This function takes in one parameter: books,an array
function getTotalBooksCount(books = []) {
  // a guard cause, a boolean that determines if the rest of the fuctions instructions should run or not.
  if (books.length === 0 ) return "there are no books";
  //this function returns a number value that represents the ammount of elements within the books array that it is passed.
  return books.length;
  }


  //this function takes in one parameter: accounts, an array.
  function getTotalAccountsCount(accounts) {
  //this function returns a number value that represents the ammount of elements within the account array that it is passed.
  return accounts.length;
  }

//this function takes in one parameter: books, an array.
  function getBooksBorrowedCount(books) {
  //borrowedBooks is declared a let variable. Within this variable the reduce method is being attached to the books array as an alternative to the accumulator pattern.
    let borrowedBooks = books.reduce((acc,book)=>{
      // If the zero index of the borrows array within the current book object returns as false, acc is increase by one. borrowedBooks stores the final number value of acc.
      return acc + (!book.borrows[0].returned)
    },0)

  //this function returns the value of the borrowedBooks variable, a number value.
    return borrowedBooks;
    
  }

 


//This function takes in one parameter: books
  function getMostCommonGenres(books) {
   //the booksGeneres is using the map method on the books array
    const booksGenres = books.map((book)=> {
      //const genre is set to equal the genre of current book in the loop of the array method.
       const genre = book.genre;
       // the booksGenres variable is returning an array full of objects with the shape of {name : genre}
       return ({name : genre});
    });
    
    // groupedByCount variable is declared as a const variable. within this variable the reduce method is being used on the booksGenre variable we just created.
    const groupedByCount = booksGenres.reduce((arr, bookGenre) => {
      if(!arr[bookGenre.name])
         arr[bookGenre.name] = 1
     else
       arr[bookGenre.name] += 1
       return arr;
   },{})

   let topGenres = [];

   for (count in groupedByCount)
   {
     const genreCount = groupedByCount[count];
     topGenres.push({name:count, count: genreCount});
   }

   topGenres.sort((genreA,genreB)=>genreA.count < genreB.count ? 1 : -1);
   topGenres.length = 5;
   console.log(topGenres);
   return topGenres;
   }
  
  // Create a for loop that creates that stores each genre in it's own variable
  
  function getMostPopularBooks(books) {
    //book.borrowscount
    let popularBooks = books.map ((book)=>{
      return {name:book.title, count:book.borrows.length}
    })
    popularBooks.sort((bookA,bookB)=>bookA.count < bookB.count ? 1 : -1);
    console.log(popularBooks);
    popularBooks.length = 5;
    return popularBooks;
  }
  
  
  function getMostPopularAuthors(books, authors) {
    let authorNames = books.map((book)=>{
      for (authorObj in authors)
      {
        const author = authors[authorObj];
        if(author.id === book.authorId)
            book.authorName = `${author.name.first} ${author.name.last}`;
      }
        return {authorName : book.authorName,
          borrowCount : book.borrows.length}
    });
    console.log(authorNames);
    const groupedBorrowCount = authorNames.reduce((arr, author) =>{
        const found = arr.find(sameAuthor =>
          sameAuthor.name === author.authorName);
        if (!found)
          arr.push({name: author.authorName, count : author.borrowCount});
        else {
          arr.map((duplicateAuthor)=>{
            if (duplicateAuthor.name === author.authorName)
              duplicateAuthor.count += author.borrowCount;
          })
        }
      return arr;
    },[])
    groupedBorrowCount.sort((authorA,authorB)=>authorA.count < authorB.count ? 1 : -1);
    groupedBorrowCount.length = 5;
    return groupedBorrowCount;
  }function getMostPopularAuthors(books, authors) {
    let authorNames = books.map((book)=>{
      for (authorObj in authors)
      {
        const author = authors[authorObj];
        if(author.id === book.authorId)
            book.authorName = `${author.name.first} ${author.name.last}`;
      }
        return {authorName : book.authorName,
          borrowCount : book.borrows.length}
    });
    console.log(authorNames);
    const groupedBorrowCount = authorNames.reduce((arr, author) =>{
        const found = arr.find(sameAuthor =>
          sameAuthor.name === author.authorName);
        if (!found)
          arr.push({name: author.authorName, count : author.borrowCount});
        else {
          arr.map((duplicateAuthor)=>{
            if (duplicateAuthor.name === author.authorName)
              duplicateAuthor.count += author.borrowCount;
          })
        }
      return arr;
    },[])
    groupedBorrowCount.sort((authorA,authorB)=>authorA.count < authorB.count ? 1 : -1);
    groupedBorrowCount.length = 5;
    return groupedBorrowCount;
  }
  
  module.exports = {
    getTotalBooksCount,
    getTotalAccountsCount,
    getBooksBorrowedCount,
    getMostCommonGenres,
    getMostPopularBooks,
    getMostPopularAuthors,
  };
  