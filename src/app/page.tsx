"use client";
import Image from "next/image";
import "../app/page.css";
import Tick from "@/components/Tick";
import { SetStateAction, useState, useEffect } from "react";
export default function Page() {

  const [activeButton, setActiveButton] = useState("All");
  //notes main
  const [notes, setNotes] = useState<string[]>([]);
  const [noteInput, setNoteInput] = useState<string>(""); // notes come here while add button is clicked 

  // toggle between tabs
  const toggleActive = (button: SetStateAction<string>) => {
    setActiveButton(button);
  };

  useEffect(() => {
    // Load existing notes from local storage when the component mounts
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    // Save notes to local storage whenever the 'notes' state changes
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = () => {
    if (noteInput.trim() !== "") {
      setNotes([...notes, noteInput]);

    }
    setNoteInput("");
  };

  // const handleRemoveNote = (index) => {
  //   const updatedNotes = [...notes];
  //   updatedNotes.splice(index, 1);
  //   setNotes(updatedNotes);
  // };

  return (
    <>
      <div className="h-screen w-screen bg-white flex justify-center items-center">
        <Image
          src={"/home_todo.jpg"}
          width={1000}
          height={400}
          alt="home_image"
          className="bg-cover w-screen h-screen absolute z-0"
        ></Image>
        <div className="glass w-2/3 h-5/6  z-10">
          <h1 className="font-medium text-5xl text-center mt-5">
            TODO CRUD APP
          </h1>
          <div className="input_div text-center ">
            <input
              className="relative p-4 text-center text-blue-950 outline-0 text-lg rounded-md w-2/3 mt-5"
              type="text"
              name="notes"
              placeholder="Create New Todo"
              onChange={(e) => setNoteInput(e.target.value)}
            />
            <button
              className="absolute top-24 right-44 cursor-pointer p-3 w-24 rounded-lg bg-green-600 text-white font-medium"
              onClick={() => handleAddNote()}
            >
              ADD
            </button>
          </div>

          <div className="control_todo flex w-2/5 ml-80 text-2xl mt-5 justify-evenly">
            <div
              className={
                activeButton === "All" ? "text-sky-500 font-medium" : ""
              }
            >
              <button onClick={() => toggleActive("All")}>All</button>
            </div>
            <div
              className={
                activeButton === "Active" ? "text-sky-500 font-medium" : ""
              }
            >
              <button onClick={() => toggleActive("Active")}>Active</button>
            </div>
            <div
              className={
                activeButton === "Completed" ? "text-sky-500 font-medium" : ""
              }
            >
              <button onClick={() => toggleActive("Completed")}>
                Completed
              </button>
            </div>
          </div>

          <div className="task_div h-96 mt-2  text-center flex items-start justify-center flex-wrap overflow-y-auto">
            <div className="task relative  text-blue-950 border-2 text-lg rounded-md w-2/3 mt-5">
              <div className="tick">
                <Tick />
              </div>
              <h3 className=" p-10 font-normal bg-white text-3xl text-blue text-start pl-20"></h3>
              <div className="delete absolute top-3 right-2 cursor-pointer p-4 rounded-lg bg-red-600 text-white font-medium">
                Delete
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
