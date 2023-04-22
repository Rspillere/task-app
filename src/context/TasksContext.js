"use client";
import { createContext, useContext } from "react";
import {v4 as uuid} from 'uuid'
import { useLocastorage } from "@/app/hooks/useLocalstorage";
export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  //sirve para valida que donde vayamos a usar context esté dentro de un provider
  if (!context) throw new Error("useTasks must used within a provider");
  return context;
};


export const TaskProviver = ({ children }) => {
  const [tasks, setTasks] = useLocastorage('tasks', [])

  const createTask = (title, description) => 
    setTasks([...tasks, {title, description, id: uuid()}])

  const deleteTask = (id) => 
    setTasks(tasks.filter(task => task.id !== id))

  const updateTask = (id, newData) => {
    setTasks(
      tasks.map((t) => t.id === id ? {...t, ...newData} : t)
    )
  };
  
  return (
    <TaskContext.Provider 
    value={{ 
      tasks,
      createTask,
      deleteTask,
      updateTask      
    }}>
      {children}
    </TaskContext.Provider>
  );
};
