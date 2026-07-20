// import { useNavigate } from "react-router-dom";
// import { allCourse } from "../Data/allCourse";
// import "../CSS/CourseMenu.css";

// export default function CourseMenu() {
//   const navigate = useNavigate();

//   return (
//     <div className="menu-container">
//       <h2>All Courses</h2>

//       {allCourse.map((course) => (
//         <div
//           key={course.id}
//           className="menu-item"
//           onClick={() => navigate(`/course/${course.id}`)}
//         >
//           📚 {course.title}
//         </div>
//       ))}
//     </div>
//   );
// }