import React from "react";

// TODO: StudentList 컴포넌트를 작성하세요. props로 학생 목록을 받아와서 표시해야 합니다.
function StudentList(
  /* 필요한 props를 여기에 전달하세요 */ { filteredStudents }
) {
  return (
    <ul>
      {filteredStudents.map((item, index) => {
        return (
          <li key={index}>
            {`학생 이름은 ${item.name} (${item.age}세) - ${item.grade}등급`}
          </li>
        );
      })}
      {/* 여기에 학생 목록을 표시하는 로직을 작성하세요. */}
      {/* ex: 홍길동 (20세) - A등급 */}
    </ul>
  );
}

export default StudentList;
