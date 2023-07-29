import React, { useState } from "react";

import defaultStudentsData from "../StudentsData";
import { Popup } from "./PopupModal";
import { Students } from "../StudentsTypes";

export default function StudentsDetailsTable() {
  // This is the hardcoded values
  const teacherName = "TeacherName";
  const className = "Class";
  const hardCodedValues = {
    name: "Name",
    id: "ID",
    marks: "Enter your marks",
  };
  // const studentsInfo = defaultStudentsData.students;

  const tableHeaderData = ["name", "id"];
  const StudentSubjects = [
    "English",
    "Maths",
    "Physics",
    "Chemistry",
    "Computer",
    "Action",
  ];

  // const currentStudentMarkInfo = [
  //   { subject: "English", mark: 25 },
  //   { subject: "Maths", mark: 48 },
  //   { subject: "Physics", mark: 40 },
  //   { subject: "Chemistry", mark: 30 },
  //   { subject: "Computer", mark: 20 },
  // ];

  const currentStudentInfo = {
    id: "",
    name: "",
    marks: [],
  };

  const [students, setStudents] = useState<Students[]>([]);
  const [currentStudent, setCurrentStudent] =
    useState<Students>(currentStudentInfo);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const addStudent = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = (event: any) => {
    event.preventDefault();
    setStudents([...students, currentStudent]);
    setIsPopupOpen(false);
  };

  const clearStudentsList = () => {
    setStudents([]);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCurrentStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleInputValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { id, value } = event.target;
    setCurrentStudent((prevStudent) => ({
      ...prevStudent,
      [id]: value,
    }));
  };

  const handleMarks = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const { id, marks } = event.target;
    setCurrentStudent((prevStudent) => ({
      ...prevStudent,
      // [marks]: {},
    }));
  };
console.log("object")
  return (
    <div>
      <div className="flex justify-around items-center w-full">
        <div className="flex flex-col justify-center items-center py-4">
          <span className="text-lg">
            {className}:
            <span className="text-xl font-semibold pl-2">
              {defaultStudentsData.name}
            </span>
          </span>
          <span>
            {teacherName}:
            <span className="text-xl font-semibold pl-2">
              {defaultStudentsData.teacherName}
            </span>
          </span>
        </div>
        <>
                    {StudentSubjects.forEach((subject) => {
                      console.log("here", subject);

                      return (
                        <div key={subject}>
                          <label className="px-2">{subject}</label>
                          <input
                            className="p-2 rounded-2xl border-2 border-red-950"
                            id={subject}
                            onChange={handleMarks}
                            placeholder={`Enter your ${subject}`}
                            type="text"
                            value=""
                          />
                        </div>
                      );
                    })}
                  </>
        {isPopupOpen && (
          <Popup>
            <div className="flex justify-center items-center">
              <form>
                <div className="flex flex-col justify-center items-start gap-4">
                  <label className="px-2">{hardCodedValues.name}</label>
                  <input
                    className="p-2 rounded-2xl border-2 border-red-950"
                    name="name"
                    onChange={handleInputChange}
                    placeholder="enter your name"
                    type="text"
                    value={currentStudent.name}
                  />
                  <label className="px-2">{hardCodedValues.id}</label>
                  <input
                    className="p-2 rounded-2xl border-2 border-red-950"
                    id="id"
                    onChange={handleInputValueChange}
                    placeholder="Enter your id"
                    type="text"
                    value={currentStudent.id}
                  />
                 

                  <button
                    className="p-2 border border-black bg-green-900 w-full rounded-xl"
                    type="button"
                    onClick={handleClosePopup}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </Popup>
        )}
        <div className="flex justify-center items-center gap-4">
          <button
            className="p-2 border border-black bg-green-900 w-full"
            type="button"
            onClick={addStudent}
          >
            Add Student
          </button>
          <button
            className="p-2 border border-black bg-green-900 w-full whitespace-nowrap"
            type="button"
            onClick={clearStudentsList}
          >
            Clear Students Details
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {tableHeaderData.map((header, index) => (
                <th scope="col" className="px-6 py-3" key={index}>
                  {header}
                </th>
              ))}
              {StudentSubjects.map((subjects, index) => {
                const key = `${subjects}-${index}`;
                return <td key={key}>{subjects}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            {students.map((info) => (
              <tr
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                key={info.id}
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {info.name}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {info.id}
                </td>
                {info.marks.map((mark) => (
                  <td
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    key={mark.mark}
                  >
                    {mark.mark}
                  </td>
                ))}
                <div className="flex items-center gap-4 py-2">
                  <button
                    className="p-2 border border-red-900 w-1/2"
                    type="button"
                    onClick={() => {}}
                  >
                    Delete
                  </button>
                  <button
                    className="p-2 border border-blue-900 w-1/2"
                    type="button"
                    onClick={() => {}}
                  >
                    Edit
                  </button>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
