"use client";
import Todo from "@/todo/Todo";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [todoData, setTotoData] = useState([]);

  const fetchTodo = async () => {
    const response = await axios.get("/api");
    setTotoData(response.data.todos);
  };
  const deleteTodo = async (id: any) => {
    const response = await axios.delete("/api", {
      params: {
        mongoId: id,
      }
    });
    // setTotoData(response.data.todos)
    toast.success(response.data.msg);
    fetchTodo();
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  const handelChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((f) => ({ ...f, [name]: value }));
    console.log(formData);
  };

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    try {
      //api code
      // console.log("Submitting form data:", formData);
      const response = await axios.post("/api", formData);
      // console.log("Response received:", response);
      // console.log(response.data.msg);

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
        className="flex flex-col gap-4 p-5 border border-gray-300 rounded-md"
      >
        <input
          value={formData.title}
          onChange={handelChange}
          type="text"
          name="title"
          placeholder="Enter teh title"
          className="w-full max-w-[80%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          value={formData.description}
          onChange={handelChange}
          className="px-3 py-2 border-2 w-full"
          placeholder="Enter the Description"
          name="description"
        ></textarea>
        <button
          type="submit"
          className="bg-red-600 max-w-[40%] py-3 px-11 text-white"
        >
          Add TODO
        </button>
      </form>

      <div className="relative overflow-x-auto w-[100%] mx-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
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
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
