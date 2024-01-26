import React from "react";

function App() {
  const students = [
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "C" },
    { name: "Diana", age: 19, grade: "D" },
  ];

  // TODO: filter를 사용하여 18세 이상의 학생들만 선택하세요.
  const filteredStudents = students.filter((students) => students.age >= 18);

  return (
    <div>
      <h1>학생 목록</h1>
      <ul>
        {filteredStudents.map((students, index) => {
          return (
            <li
              key={index}
              onClick={() =>
                alert(`학생의 이름은 ${students.name}, 나이는 ${students.age}`)
              }
            >
              {students.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
