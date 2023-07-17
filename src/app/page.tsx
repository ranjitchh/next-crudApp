"use client"
import Image from "next/image";
import '../app/page.css'
import Tick from "@/components/Tick";
export default function Page() {
  const tasks = "1hr coding"
  function hello() {
    alert("item deleted");
  }
  return (
    <>
      <div className="h-screen w-screen bg-white flex justify-center items-center">
        <Image src={'/home_todo.jpg'} width={1000} height={400} alt="home_image" className="bg-cover w-screen h-screen absolute z-0"></Image>
        <div className="glass w-2/3 h-5/6  z-10">
          <h1 className="font-medium text-5xl text-center mt-5" >TODO CRUD APP</h1>
          <div className="input_div text-center">
            <input className="relative p-4 text-center text-blue-950 outline-0 text-lg rounded-md w-2/3 mt-5" type="text" name="notes" id="" placeholder="Create New Todo" />
            <div className="absolute top-24 right-44 cursor-pointer p-3 w-24 rounded-lg bg-green-600 text-white font-medium" onClick={() => { hello() }}>ADD</div>
          </div>
          <div className="task_div h-96 mt-10  text-center flex items-start justify-center flex-wrap overflow-y-scroll">
            <div className="task relative  text-blue-950 border-2 text-lg rounded-md w-2/3 mt-5">
              <div className="tick">
                <Tick/>
              </div>
              <h3 className=" p-5 font-normal bg-white text-3xl text-blue text-start pl-20">
                {tasks}
              </h3>
              <div className="delete absolute top-2 right-2 cursor-pointer p-4 rounded-lg bg-red-600 text-white font-medium" onClick={() => { hello() }}>Delete</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}