import React from "react";

// TODO: FilterButtons 컴포넌트를 작성하세요. 필터링 옵션을 선택하는 버튼들을 포함해야 합니다.
function FilterButtons(
  /* 필요한 props를 여기에 전달하세요 */ {
    filteredStudents,
    setFilteredStudents,
  }
) {
  const filterByAge = (minAge) => {
    const newStudent = filteredStudents.filter((item) => item.age >= minAge);
    console.log(newStudent);
  };
  const filterByGrade = (grade) => {
    const newGrade = filteredStudents.filter((item) => item.grade === grade);
    console.log(newGrade);
  };
  const resetFilter = () => {
    setFilteredStudents(resetFilter);
  };

  return (
    <div>
      {/* 여기에 필터링 버튼들을 완성하세요. */}
      <button onClick={filterByAge}>18세 이상</button>
      <button>A등급</button>
      <button>필터 초기화</button>
    </div>
  );
}

export default FilterButtons;
