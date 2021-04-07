function getTotalBooksCount(books) {
  return books.length;
  }
  
  function getTotalAccountsCount(accounts) {
  return accounts.length;
  }
  
  function getBooksBorrowedCount(books) {
    let borrowedBooks = books.reduce((acc,book)=>{
      return acc + (!book.borrows[0].returned)
    },0)
    return borrowedBooks;
  }
  
  function getMostCommonGenres(books) {
    const booksGenres = books.map((book)=> {
       const genre = book.genre;
       return ({name : genre});
    });
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
  