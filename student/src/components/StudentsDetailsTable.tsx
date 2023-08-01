import React, { useState } from "react";

import defaultStudentsData from "../StudentsData";
import { Popup } from "./PopupModal";
import { Student } from "../StudentsTypes";
import Cross from "../assets/Cross.png";
import Button, { ButtonTypes } from "./Button";
import { Input, InputTypes } from "./input";

export default function StudentsDetailsTable() {
  // This is the hardcoded values
  const teacherName = "TeacherName";
  const className = "Class";
  const hardCodedValues = {
    name: "Name",
    id: "ID",
    marks: "Enter your marks",
  };
  const tableHeaderData = ["Name", "ID"];
  const studentSubjects = [
    "English",
    "Maths",
    "Physics",
    "Chemistry",
    "Computer",
    "Action",
  ];

  const currentStudentInfo = {
    id: "",
    name: "",
    marks: [
      { subject: "English" },
      { subject: "Maths" },
      { subject: "Physics" },
      { subject: "Chemistry" },
      { subject: "Computer" },
    ],
  };

  const [students, setStudents] = useState<Student[]>([]);
  const [currentStudent, setCurrentStudent] =
    useState<Student>(currentStudentInfo);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const addStudent = () => {
    setIsPopupOpen(true);
  };

  const handleSubmit = () => {
    setStudents([...students, currentStudent]);
    setIsPopupOpen(false);
    setCurrentStudent(currentStudentInfo);
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
    const { id, value } = event?.target;
    setCurrentStudent((prevStudent) => ({
      ...prevStudent,
      [id]: value,
    }));
  };

  const handleMarks = (marks: number, subject: string) => {
    console.log(
      "🚀 ~ file: StudentsDetailsTable.tsx:83 ~ handleMarks ~ marks:",
      marks
    );
    if (isNaN(marks)) return;
    setCurrentStudent((prevStudent) => {
      const stu = {
        ...prevStudent,
        marks: prevStudent.marks.map((markObj) => {
          if (markObj.subject === subject) {
            return { ...markObj, mark: marks };
          }
          return markObj;
        }),
      };
      console.log(stu);
      return stu;
    });
  };

  const handleDeleteStudent = (id: string) => {
    console.log(id);

    setStudents((prevStudents) => {
      return prevStudents.filter((students) => students.id !== id);
    });
  };

  const handleStudentEditClick = (student: Student) => {
    setCurrentStudent(student);
    setIsPopupOpen(true);
  };

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
        {isPopupOpen && (
          <Popup>
            <div className="vghwvhw">
              <div className="flex justify-end items-center px-4">
                <button type="button" onClick={() => setIsPopupOpen(false)}>
                  <img className="w-full h-full" src={Cross} alt="cross" />
                </button>
              </div>
              <div className="flex justify-center items-center">
                <form>
                  <div className="flex flex-col justify-center gap-4">
                    <label className="px-2">{hardCodedValues.name}</label>
                    <input
                      className="p-2 rounded-2xl border-2 border-red-950"
                      name="name"
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      type="text"
                      value={currentStudent.name}
                    />
                    {/* <Input
                      onChange={handleInputChange}
                      placeholderText="Enter your name"
                      value={currentStudent.name}
                      
                    /> */}
                    <label className="px-2">{hardCodedValues.id}</label>
                    <input
                      className="p-2 rounded-2xl border-2 border-red-950"
                      id="id"
                      onChange={handleInputValueChange}
                      placeholder="Enter your id"
                      type="text"
                      value={currentStudent.id}
                    />
                    {/* <Input
                      onChange={handleInputValueChange}
                      placeholderText="Enter your id"
                      value={currentStudent.id}
                    /> */}
                    {currentStudent.marks.map(({ mark, subject }) => {
                      return (
                        <div
                          className="flex flex-col justify-center"
                          key={subject}
                        >
                          <label className="px-2">{subject}</label>
                          <input
                            className="p-2 rounded-2xl border-2 border-red-950"
                            onChange={(e) =>
                              handleMarks(Number(e.target.value), subject)
                            }
                            placeholder={`Enter your ${subject} mark`}
                            type="text"
                            value={mark && !isNaN(mark) ? mark : ""}
                          />
                          {/* <Input
                            onChange={(e) =>
                              handleMarks(Number(e.target.value), subject)
                            }
                            placeholderText={`Enter your ${subject} mark`}
                            value={mark && !isNaN(mark) ? mark : ""}
                          /> */}
                        </div>
                      );
                    })}
                    <Button
                      onClick={handleSubmit}
                      text="Submit"
                      variant={ButtonTypes.primary}
                      width="w-full"
                      textColor="text-white"
                    />
                  </div>
                </form>
              </div>
            </div>
          </Popup>
        )}
        <div className="flex justify-center items-center gap-4">
          <Button
            onClick={addStudent}
            text="Add Student"
            width="w-1/2"
            textColor="text-white"
            variant={ButtonTypes.secondary}
          />
          <Button
            onClick={clearStudentsList}
            text="Clear Students List"
            textColor="text-white"
            variant={ButtonTypes.secondary}
          />
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
              {studentSubjects.map((subjects, index) => {
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
                  <Button
                    onClick={() => handleDeleteStudent(info.id)}
                    text="Delete"
                    outLine="border-red-900"
                    variant={ButtonTypes.outLined}
                    width="w-1/2"
                  />
                  <Button
                    onClick={() => handleStudentEditClick(info)}
                    text="Edit"
                    outLine="border-blue-900"
                    variant={ButtonTypes.outLined}
                    width="w-1/2"
                  />
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
