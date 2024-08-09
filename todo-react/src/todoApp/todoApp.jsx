import React, { useState } from 'react';

const TodoApp = () => {
    // 2. Struktur Data: Gunakan useState untuk menyimpan daftar todo.
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    // 3. Tambah Item: Fungsi untuk menambah todo baru.
    const addTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
            setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
            setNewTodo(''); // Reset input field
        }
    };

    // 5. Tandai Selesai: Fungsi untuk menandai todo sebagai selesai.
    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? {...todo, completed: !todo.completed } : todo
            )
        );
    };

    // 6. Hapus Item: Fungsi untuk menghapus todo dari daftar.
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
return (
  <div>
    <h1>Todo saaa</h1> 
    {/* 3. Tambah Item: Form untuk menambah todo baru */}
    <form onSubmit={addTodo}>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Add new todo" />
      <button type="submit">Add</button> 
    </form>
    {/* 4. Render Daftar Todo */}
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
          {/* 5. Tandai Selesai: Checkbox untuk menandai todo */}
          <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
          {todo.text} 
          {/* 6. Hapus Item: Tombol untuk menghapus todo */}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);
};

export default TodoApp;