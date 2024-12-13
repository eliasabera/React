import reactImage from "../../assets/react-core-concepts.png";
import "./Header.css";
export default function Header() {
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        core React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}
