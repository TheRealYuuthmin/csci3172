// Sample data for students and their grades
const students = [
  {
    "name": "Alice",
    "courses": [
      { "assignments": [61, 0], "quizzes": [74, 90], "exams": [53, 99] },
      { "assignments": [0, 66], "quizzes": [77, 83], "exams": [22, 89] },
      { "assignments": [84, 91], "quizzes": [0, 69], "exams": [51, 92] },
      { "assignments": [88, 66], "quizzes": [49, 91], "exams": [79, 0] }
    ]
  },
  {
    "name": "Pedro",
    "courses": [
      { "assignments": [34, 88], "quizzes": [73, 0], "exams": [28, 65] },
      { "assignments": [87, 91], "quizzes": [70, 77], "exams": [94, 61] },
      { "assignments": [74, 81], "quizzes": [56, 0], "exams": [93, 80] },
      { "assignments": [0, 92], "quizzes": [79, 69], "exams": [49, 57] }
    ]
  },
  {
    "name": "Jeff",
    "courses": [
      { "assignments": [92, 0], "quizzes": [74, 52], "exams": [87, 21] },
      { "assignments": [56, 99], "quizzes": [35, 87], "exams": [53, 60] },
      { "assignments": [72, 58], "quizzes": [90, 81], "exams": [69, 94] },
      { "assignments": [34, 78], "quizzes": [59, 44], "exams": [56, 0] }
    ]
  },
  {
    "name": "Laura",
    "courses": [
      { "assignments": [25, 41], "quizzes": [63, 0], "exams": [91, 36] },
      { "assignments": [43, 58], "quizzes": [66, 51], "exams": [64, 0] },
      { "assignments": [85, 99], "quizzes": [78, 72], "exams": [60, 99] },
      { "assignments": [80, 0], "quizzes": [80, 62], "exams": [88, 37] }
    ]
  },
  {
    "name": "Bratford",
    "courses": [
      { "assignments": [82, 0], "quizzes": [40, 94], "exams": [55, 96] },
      { "assignments": [77, 94], "quizzes": [75, 63], "exams": [72, 64] },
      { "assignments": [67, 88], "quizzes": [54, 46], "exams": [58, 31] },
      { "assignments": [73, 21], "quizzes": [90, 81], "exams": [85, 84] }
    ]
  },
  {
    "name": "Nolan",
    "courses": [
      { "assignments": [49, 68], "quizzes": [56, 63], "exams": [99, 22] },
      { "assignments": [62, 80], "quizzes": [88, 99], "exams": [34, 94] },
      { "assignments": [29, 97], "quizzes": [41, 64], "exams": [62, 46] },
      { "assignments": [71, 58], "quizzes": [33, 84], "exams": [93, 72] }
    ]
  },
  {
    "name": "Chen",
    "courses": [
      { "assignments": [83, 0], "quizzes": [88, 59], "exams": [22, 56] },
      { "assignments": [99, 77], "quizzes": [42, 39], "exams": [59, 90] },
      { "assignments": [44, 55], "quizzes": [93, 57], "exams": [19, 82] },
      { "assignments": [83, 76], "quizzes": [52, 88], "exams": [60, 65] }
    ]
  },
  {
    "name": "Harper",
    "courses": [
      { "assignments": [71, 63], "quizzes": [75, 98], "exams": [47, 41] },
      { "assignments": [85, 64], "quizzes": [96, 54], "exams": [85, 74] },
      { "assignments": [62, 45], "quizzes": [80, 60], "exams": [43, 59] },
      { "assignments": [93, 36], "quizzes": [67, 80], "exams": [49, 92] }
    ]
  }
  ];
  
  // Calculate the grade for a single course
  function calculateCourseGrade(course) {
    const assignment1 = course.assignments[0] || 0;
    const assignment2 = course.assignments[1] || 0;
    const quiz1 = course.quizzes[0] || 0;
    const quiz2 = course.quizzes[1] || 0;
    const exam1 = course.exams[0] || 0;
    const exam2 = course.exams[1] || 0;
  
    const grade =
      assignment1 * 0.15 +
      assignment2 * 0.15 +
      quiz1 * 0.1 +
      quiz2 * 0.1 +
      exam1 * 0.25 +
      exam2 * 0.25;
    return Math.round(grade);
  }
  
  // Calculate the average grade for all courses
  function calculateAverageGrade(courses) {
    const total = courses.reduce((sum, course) => sum + calculateCourseGrade(course), 0);
    return Math.round(total / courses.length);
  }
  
  // Convert a numerical grade to a letter grade
  function convertToLetterGrade(grade) {
    if (grade >= 90) return "A+";
    if (grade >= 85) return "A";
    if (grade >= 80) return "A-";
    if (grade >= 77) return "B+";
    if (grade >= 73) return "B";
    if (grade >= 70) return "B-";
    if (grade >= 65) return "C+";
    if (grade >= 60) return "C";
    if (grade >= 55) return "C-";
    if (grade >= 50) return "D";
    return "F";
  }
  
  // Populate the main table with student data
  const tableBody = document.querySelector("#grades-table tbody");
  students.forEach((student) => {
    const courses = student.courses;
    const averageGrade = calculateAverageGrade(courses);
    const letterGrade = convertToLetterGrade(averageGrade);
  
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="student-name" title="Click to view detailed grades">${student.name}</td>
      <td>${calculateCourseGrade(courses[0])}</td>
      <td>${calculateCourseGrade(courses[1])}</td>
      <td>${calculateCourseGrade(courses[2])}</td>
      <td>${calculateCourseGrade(courses[3])}</td>
      <td>${averageGrade}</td>
      <td>${letterGrade}</td>
    `;
    tableBody.appendChild(row);
  });
  
  // Add click event listeners to student names
  document.querySelectorAll(".student-name").forEach((studentName) => {
    studentName.addEventListener("click", () => {
      const student = students.find((s) => s.name === studentName.textContent);
      showGradeBreakdown(student);
    });
  });
  
  // Display the grade breakdown overlay
  function showGradeBreakdown(student) {
    const overlay = document.getElementById("overlay");
    const studentName = document.getElementById("student-name");
    const breakdownBody = document.querySelector("#grade-breakdown tbody");
  
    studentName.textContent = `${student.name}'s Grade Breakdown`;
    breakdownBody.innerHTML = "";
  
    student.courses.forEach((course, index) => {
      const courseGrade = calculateCourseGrade(course);
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>Course ${index + 1}</td>
        <td>${course.assignments[0] || "-"}</td>
        <td>${course.assignments[1] || "-"}</td>
        <td>${course.quizzes[0] || "-"}</td>
        <td>${course.quizzes[1] || "-"}</td>
        <td>${course.exams[0] || "-"}</td>
        <td>${course.exams[1] || "-"}</td>
        <td>${courseGrade}</td>
      `;
      breakdownBody.appendChild(row);
    });
  
    overlay.style.display = "flex";
  }
  
  // Close the overlay when the close button is clicked
  document.getElementById("close-overlay").addEventListener("click", () => {
    document.getElementById("overlay").style.display = "none";
  });
  
  // Log student data to the console for debugging
  console.log("Student Data:", students);