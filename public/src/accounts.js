function findAccountById(accounts, id) {

  return accounts.find((account) => account.id === id);
  }
  
  
  function sortAccountsByLastName(accounts){
  return accounts.sort((accountA,accountB) => 
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1)
  }
  
  // Helper Function
  function userIdToAccountId (account){
  const userID = account.id;
  return userID
  }
  
  function getTotalNumberOfBorrows(account, books) {
    let userID = userIdToAccountId(account);
    let borrowsTotal = 0;
    for (book in books){
      const currentBook = books[book];
      borrowsTotal += currentBook.borrows.reduce ((acc, borrow) =>{
        return acc + (borrow.id === userID);
      },0)
    }
    return borrowsTotal;
  }
  
  
  function getBooksPossessedByAccount(account, books, authors) {
    //get books possessed by account by searching user id in
    //books array
    const userID = account.id;
    let booksPossessed = [];
    //finds books possessed by user
    for (book in books){
      const currentBook = books[book];
      let found = currentBook.borrows.find((borrow) =>
              borrow.id === userID && !borrow.returned)
      if(found)
        booksPossessed.push(currentBook);
    }
    console.log(`Possessed: ${booksPossessed[0].authorId}`);
    //books possessed array and authors array
    //add authors to books array by authorid
    booksPossessed = booksPossessed.map((bookPossessed) =>{
      for (authorObj in authors)
      {
        const author = authors[authorObj];
        if(author.id === bookPossessed.authorId)
          bookPossessed.author = author;
      }
      return bookPossessed;
    })
    console.log(`Possessed Author ID: ${booksPossessed[0].author.id}`);
    return booksPossessed;
  }
  module.exports = {
    findAccountById,
    sortAccountsByLastName,
    getTotalNumberOfBorrows,
    getBooksPossessedByAccount,
  };
  