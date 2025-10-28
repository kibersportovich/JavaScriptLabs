// a)

// Получить и отсортировать /posts по убыванию длины title
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    const sortedPosts = posts.sort((a, b) => b.title.length - a.title.length);
    console.log('Отсортированные посты по длине title (по убыванию):', sortedPosts);
  })
  .catch(console.error);

// Получить и отсортировать /comments по имени автора (name)
fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(comments => {
    const sortedComments = comments.sort((a, b) => a.name.localeCompare(b.name));
    console.log('Отсортированные комментарии по имени автора:', sortedComments);
  })
  .catch(console.error);

// b)

// Получить и оставить только указанные поля /users
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const simplifiedUsers = users.map(user => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone
    }));
    console.log('Обновленные пользователи с выбранными полями:', simplifiedUsers);
  })
  .catch(console.error);

// Получить и отфильтровать /todos по completed (оставить только falsy)
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(todos => {
    const filteredTodos = todos.filter(todo => !todo.completed);
    console.log('Задачи с completed === false:', filteredTodos);
  })
  .catch(console.error);

// c) 

(async () => {
  try {
    // Получить и отсортировать /posts по убыванию длины title
    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postsResponse.json();
    const sortedPosts = posts.sort((a, b) => b.title.length - a.title.length);
    console.log('Отсортированные посты по длине title (async/await):', sortedPosts);

    // Получить и отсортировать /comments по имени автора
    const commentsResponse = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments = await commentsResponse.json();
    const sortedComments = comments.sort((a, b) => a.name.localeCompare(b.name));
    console.log('Отсортированные комментарии по имени автора (async/await):', sortedComments);

    // Получить /users и оставить только нужные поля
    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await usersResponse.json();
    const simplifiedUsers = users.map(user => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone
    }));
    console.log('Обновленные пользователи с выбранными полями (async/await):', simplifiedUsers);

    // Получить /todos и оставить только те, где completed === false
    const todosResponse = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await todosResponse.json();
    const filteredTodos = todos.filter(todo => !todo.completed);
    console.log('Задачи с completed === false (async/await):', filteredTodos);
  } catch (error) {
    console.error(error);
  }
})();