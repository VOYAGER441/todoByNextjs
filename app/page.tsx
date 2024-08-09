"use client";
import Todo from "@/todo/Todo";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {

  //useState deconstruction
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [todoData, setTotoData] = useState([]);

  //function for get todo
  const fetchTodo = async () => {
    const response = await axios.get("/api");
    setTotoData(response.data.todos);
  };
  
  //function for delete todo
  const deleteTodo = async (id: any) => {
    const response = await axios.delete("/api", {
      params: {
        mongoId: id,
      }
    });
    toast.success(response.data.msg);
    fetchTodo();
  };
  
  useEffect(() => {
    fetchTodo();
  }, []);
  
  //function for update todo
  const updateTodo=async (id:any)=>{
    try {
      const response=await axios.put("/api",null,{
        params: { mongoId: id}
      });
      toast.success(response.data.msg);
      fetchTodo();
    } catch (error) {
      toast.error("Failed to update Todo.");
    }
  }
  
  
  //function for change todo
  const handelChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((f) => ({ ...f, [name]: value }));
    console.log(formData);
  };
  
  
  
  //function for create todo
  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api", formData);
      toast.success(response.data.msg);
      setFormData({
        title: "",
        description: "",
      });
      fetchTodo();
    } catch (error) {
      toast.error("error");
    }
  };

  return (
    <>
      <ToastContainer theme="dark" />
      <form
        onSubmit={onSubmitHandler}
        className="form-container"
      >
        <input
          value={formData.title}
          onChange={handelChange}
          type="text"
          name="title"
          placeholder="Enter the title"
          className="input-field"
        />
        <textarea
          value={formData.description}
          onChange={handelChange}
          className="textarea-field"
          placeholder="Enter the Description"
          name="description"
        ></textarea>
        <button
          type="submit"
          className="submit-button"
        >
          Add TODO
        </button>
      </form>

      <div className="table-container">
        <table className="todo-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todoData.map((item, index) => {
              return (
                <Todo
                  key={index}
                  id={index}
                  title={item.title}
                  description={item.description}
                  complete={item.isCompleted}
                  mongoId={item._id}
                  deleteTodo={deleteTodo}
                  updateTodo={updateTodo}
                />
              );
            })}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .form-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 20px;
          border: 1px solid #e5e7eb; /* gray-300 */
          border-radius: 8px;
          background-color: #ffffff;
        }

        .input-field, .textarea-field {
          padding: 12px;
          border: 1px solid #d1d5db; /* gray-300 */
          border-radius: 6px;
          font-size: 16px;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .input-field:focus, .textarea-field:focus {
          border-color: #3b82f6; /* blue-500 */
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5); /* blue-500 */
          outline: none;
        }

        .textarea-field {
          height: 120px;
          resize: vertical;
        }

        .submit-button {
          background-color: #ef4444; /* red-600 */
          color: #ffffff;
          padding: 10px 24px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.2s ease;
        }

        .submit-button:hover {
          background-color: #dc2626; /* red-700 */
        }

        .table-container {
          margin-top: 32px;
          overflow-x: auto;
          width: 100%;
        }

        .todo-table {
          width: 100%;
          border-collapse: collapse;
          background-color: #f9fafb; /* gray-100 */
          color: #374151; /* gray-700 */
          border: 1px solid #e5e7eb; /* gray-300 */
        }

        .todo-table thead {
          background-color: #f3f4f6; /* gray-200 */
        }

        .todo-table th, .todo-table td {
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid #e5e7eb; /* gray-300 */
        }

        .todo-table th {
          font-weight: 600;
          color: #1f2937; /* gray-800 */
        }

        .todo-table tbody tr:hover {
          background-color: #f1f5f9; /* gray-100 */
        }

        .todo-table tbody tr:last-child td {
          border-bottom: none;
        }
      `}</style>
    </>
  );
}
