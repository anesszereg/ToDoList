# TaskFlow - Modern Todo Application

<p align="center">
  <img src="./public/todo-logo.svg" alt="TaskFlow Logo" width="120" height="120">
</p>

<p align="center">
  A beautiful and feature-rich Todo application built with React and Redux Toolkit.
</p>

## ✨ Features

- **Complete Todo Management**: Add, toggle, delete, and filter todos
- **Drag and Drop**: Reorder todos with intuitive drag and drop functionality
- **Responsive Design**: Works beautifully on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Redux Toolkit**: State management with Redux Toolkit
- **Modern UI**: Clean and attractive user interface

## 🚀 Tech Stack

- **Frontend**: React 19, Redux Toolkit, React-Redux
- **Styling**: Tailwind CSS
- **Drag and Drop**: @dnd-kit libraries
- **Build Tool**: Vite

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd readuxImpelementation

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🔧 Usage

1. **Add a Todo**: Type your task in the input field and press Enter
2. **Toggle Completion**: Click on a todo to mark it as complete/incomplete
3. **Delete a Todo**: Click the X button on a todo to delete it
4. **Filter Todos**: Use the filter buttons to show all, active, or completed todos
5. **Clear Completed**: Remove all completed todos at once
6. **Reorder Todos**: Drag and drop todos to change their order
7. **Toggle Theme**: Switch between dark and light mode

## 📝 Project Structure

```
/src
├── App.css             # Main application styles
├── App.jsx             # Main application component
├── Data/
│   ├── store.js        # Redux store configuration
│   └── todoSlice.js    # Todo slice with actions and reducers
├── components/
│   ├── TodoApp.jsx     # Main Todo application component
│   ├── TodoInput.jsx   # Input component for adding todos
│   ├── TodoList.jsx    # List component for displaying todos
│   ├── TodoItem.jsx    # Individual todo item component
│   ├── SortableTodoItem.jsx # Wrapper for drag and drop functionality
│   └── ThemeToggle.jsx # Theme toggle component
└── main.jsx           # Entry point with Redux Provider
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues-link).

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [dnd kit](https://dndkit.com/)
- [React](https://reactjs.org/)
