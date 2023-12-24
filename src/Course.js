import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";
import "./Course.css";

const courseMap = {
  Angular: Angular,
  Bootstrap: Bootstrap,
  Ccsharp: Ccsharp,
  KompleWeb: KompleWeb,
};

function Course({ coursName }) {
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[coursName]} alt="" />
    </div>
  );
}

export default Course;
