import React from "react";

// interface TodoProps {
//   id: number;
//   title: string;
//   description: string;
//   mongoId: string;
//   complete: boolean;
//   deleteTodo: (id: string) => void;
//   updateTodo: (id: string) => void;
// }

const Todo = ({
  id,
  title,
  description,
  complete,
  deleteTodo,
  mongoId,
  updateTodo,
}: {
  id: number;
  title: string;
  description: string;
  mongoId: string;
  complete: boolean;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string) => void;
}) => {
  return (
    <>
      <tr className="todo-row">
        <th scope="row" className="todo-id">
          {id + 1}
        </th>
        <td className="todo-title">{title}</td>
        <td className="todo-description">{description}</td>
        <td className={`todo-status ${complete ? "completed" : "pending"}`}>
          {complete ? "Completed" : "Pending"}
        </td>
        <td className="todo-actions">
          <button className="delete-button" onClick={() => deleteTodo(mongoId)}>
            Delete
          </button>
          <button className="done-button" onClick={() => updateTodo(mongoId)}>
            Done
          </button>
        </td>
      </tr>

      <style jsx>{`
        .todo-row {
          background-color: #ffffff; /* white */
          border-bottom: 1px solid #d1d5db; /* gray-300 */
          transition: background-color 0.3s ease;
        }

        .todo-row:hover {
          background-color: #f9fafb; /* gray-100 */
        }

        .todo-id,
        .todo-title,
        .todo-description,
        .todo-status {
          padding: 16px;
          font-size: 14px;
          color: #374151; /* gray-700 */
        }

        .todo-id {
          font-weight: 600;
          color: #1f2937; /* gray-800 */
        }

        .todo-status.completed {
          color: #10b981; /* green-500 */
          font-weight: 600;
        }

        .todo-status.pending {
          color: #ef4444; /* red-500 */
          font-weight: 600;
        }

        .todo-actions {
          padding: 16px;
          display: flex;
          gap: 8px;
        }

        .delete-button,
        .done-button {
          padding: 8px 16px;
          color: #ffffff;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          transition: background-color 0.2s ease;
        }

        .delete-button {
          background-color: #ef4444; /* red-500 */
          border: none;
        }

        .delete-button:hover {
          background-color: #dc2626; /* red-700 */
        }

        .done-button {
          background-color: #10b981; /* green-500 */
          border: none;
        }

        .done-button:hover {
          background-color: #059669; /* green-600 */
        }
      `}</style>
    </>
  );
};

export default Todo;
