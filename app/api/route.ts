import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/todo.model";
import { NextResponse } from "next/server";
import { ObjectId, Types } from "mongoose";

//connect to the database
const LordDB = async () => {
  await ConnectDB();
};
LordDB();

//route for get all todo request
export async function GET(request: any) {
  const todos = await TodoModel.find({});
  return NextResponse.json({ todos: todos });
}

//route for post or create todo request
export async function POST(request: Request) {
  try {
    // Parse JSON body
    const { title, description } = await request.json();

    // Validate the input data
    if (typeof title !== 'string' || typeof description !== 'string') {
      return NextResponse.json({ msg: "Invalid data" }, { status: 400 });
    }

    // Create a new todo
    await TodoModel.create({ title, description });

    // Return a success response
    return NextResponse.json({ msg: "Todo created..." });
  } catch (error) {
    console.error('Error creating todo:', error);
    return NextResponse.json({ msg: "Failed to create todo" }, { status: 500 });
  }
}

//route for delete todo request
export async function DELETE(request: any) {
  const mongoId = request.nextUrl.searchParams.get("mongoId");

  if (!mongoId) {
    return NextResponse.json({ msg: "mongoId not provided" }, { status: 400 });
  }
  // console.log('test1');

  const objectId = new Types.ObjectId(mongoId);

  await TodoModel.findOneAndDelete({ _id: objectId });

  return NextResponse.json({ msg: "Todo deleted..." });
}

//route for update todo request
export async function PUT(request: any) {
  const mongoId = request.nextUrl.searchParams.get("mongoId");

  if (!mongoId) {
    return NextResponse.json({ msg: "mongoId not provided" }, { status: 400 });
  }
  console.log("test1");

  const objectId = new Types.ObjectId(mongoId);

  const updatedTodo = await TodoModel.findOneAndUpdate(
    { _id: objectId }, // filter
    { isCompleted: true }, // update
    { new: true } // options, this returns the updated document
  );

  return NextResponse.json({ msg: "Todo Completed..." });
}
