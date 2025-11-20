import "./BackButton.css";
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

interface BackButtonProps {
  to: string;
}

export default function BackButton ({ to }: BackButtonProps) {
  return (
    <Link to={to} className="back-button">
        <IoChevronBack className="back-icon"/>
        <h2>Back</h2>
    </Link>
  );
}