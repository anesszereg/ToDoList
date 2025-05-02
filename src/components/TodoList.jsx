import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredTodos, selectActiveCount, selectFilter, setFilter, clearCompleted, reorderTodos } from '../Data/todoSlice';
import TodoItem from './TodoItem';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { SortableTodoItem } from './SortableTodoItem';

const TodoList = () => {
  const filteredTodos = useSelector(selectFilteredTodos);
  const activeCount = useSelector(selectActiveCount);
  const currentFilter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };
  
  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    if (active.id !== over.id) {
      const oldIndex = filteredTodos.findIndex(todo => todo.id.toString() === active.id);
      const newIndex = filteredTodos.findIndex(todo => todo.id.toString() === over.id);
      
      dispatch(reorderTodos({
        sourceIndex: oldIndex,
        destinationIndex: newIndex
      }));
    }
  };
  

  return (
    <div className="todo-list-container">
      <div className="todo-list">
        <DndContext 
          sensors={sensors} 
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext 
            items={filteredTodos.map(todo => todo.id.toString())} 
            strategy={verticalListSortingStrategy}
          >
            <div>
              {filteredTodos.map((todo) => (
                <SortableTodoItem key={todo.id} todo={todo} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
        
        <div className="todo-footer">
          <span className="todo-count">
            {activeCount} items left
          </span>
          
          <div className="todo-filters">
            <button 
              className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterChange('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${currentFilter === 'active' ? 'active' : ''}`}
              onClick={() => handleFilterChange('active')}
            >
              Active
            </button>
            <button 
              className={`filter-btn ${currentFilter === 'completed' ? 'active' : ''}`}
              onClick={() => handleFilterChange('completed')}
            >
              Completed
            </button>
          </div>
          
          <button 
            className="clear-completed"
            onClick={handleClearCompleted}
          >
            Clear Completed
          </button>
        </div>
      </div>
      
      {/* Mobile Filter Buttons */}
      <div className="mobile-filters">
        <button 
          className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilterChange('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${currentFilter === 'active' ? 'active' : ''}`}
          onClick={() => handleFilterChange('active')}
        >
          Active
        </button>
        <button 
          className={`filter-btn ${currentFilter === 'completed' ? 'active' : ''}`}
          onClick={() => handleFilterChange('completed')}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default TodoList;
