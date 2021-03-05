let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  // returns array of the first two users
  let filteredUsers = users.filter(u => u.id < 3);
  
  console.log(filteredUsers.length); // 2