import React from "react";

const Todo = ({ id, title, description,mongoId, complete,  deleteTodo }) => {
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {id + 1}
        </th>
        <td className="px-6 py-4">{title}</td>
        <td className="px-6 py-4">{description}</td>
        <td className="px-6 py-4">{complete ? "completed" : "pending"}</td>
        <td className="px-6 py-4 flex gap-1">
          <button
            style={{
              padding: "0.5rem 1rem",
              color: "white",
              backgroundColor: "#ef4444", // red-500 equivalent
              borderRadius: "0.25rem",
              outline: "none",
              boxShadow: "0 0 0 2px #fca5a5", // ring-2 with red-300 equivalent
            }}
            onClick={() => deleteTodo(mongoId)}
          >
            Delete
          </button>
          <button
            style={{
              padding: "0.5rem 1rem",
              color: "white",
              backgroundColor: "#10b981", // green-500 equivalent
              borderRadius: "0.25rem",
              outline: "none",
              boxShadow: "0 0 0 2px #fca5a5", // ring-2 with red-300 equivalent
            }}
          >
            Done
          </button>
        </td>
      </tr>
    </>
  );
};

export default Todo;
