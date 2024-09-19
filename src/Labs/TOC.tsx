import { Link } from "react-router-dom";

export default function TOC() {
    return (
      <ul>
        <li><h2>Aditya Sairam Govindan</h2></li>
        <li><h2>Section : 2</h2></li>
        <li><b><a href="https://github.com/Aditya-sairam/kanbas-react-web-app-cs5610-2024">Link to main branch</a></b> <br /></li>
        <li><b><a href="https://github.com/Aditya-sairam/kanbas-react-web-app-cs5610-2024/tree/a1">Link to A1  Branch</a></b> <br /></li>
        <li><Link to="">Labs</Link></li>
        <li><Link to="/Labs">Labs</Link></li>
        <li><Link to="/Labs/Lab1">Lab 1</Link></li>
        <li><Link to="/Labs/Lab2">Lab 2</Link></li>
        <li><Link to="/Labs/Lab3">Lab 3</Link></li>
        <li><Link to="/Kanbas">Kanbas</Link></li>

      </ul>
    );
  }
  