import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/todo.model";
import { NextResponse } from "next/server";

const LordDB = async () => {
  await ConnectDB();
};
LordDB();
export async function GET(request: any) {
  const todos = await TodoModel.find({}); 
  return NextResponse.json({ todos: todos });
}
export async function POST(request: { json: () => PromiseLike<{ title: any; description: any; }> | { title: any; description: any; }; }) {
  const { title, description } = await request.json();

  await TodoModel.create({ title, description });

  return NextResponse.json({ msg: "Todo created..." });
}

export async function DELETE(request: any){
  const mongoId=await request.nextUrl.searchParam.get('mongoId')

  await TodoModel.findOneAndDelete(mongoId);

  return NextResponse.json({ msg: "Todo deleted..." });
}