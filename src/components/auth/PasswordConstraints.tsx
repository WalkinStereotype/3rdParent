import {
  isValidLength,
  hasUpperCase,
  hasLowerCase,
  hasDigit,
  hasSpecialChar,
} from "@/utils/helpers/checkConstraints";

interface PWConstraintsProps {
  pw: string;
}

export default function PasswordConstraints({ pw }: PWConstraintsProps) {
  const colorClass = (fulfilled: boolean) => {
    return fulfilled ? "success" : "fail";
  }

  return (
    <div>
      <h3>Password Requirements:</h3>
      <div>
        <p className={colorClass(isValidLength(pw))}>Between 8-64 characters long</p>
        <p className={colorClass(hasUpperCase(pw))}>One uppercase letter (A-Z)</p>
        <p className={colorClass(hasLowerCase(pw))}>One lowercase letter (a-z)</p>
        <p className={colorClass(hasDigit(pw))}>One digit (0-9)</p>
        <p className={colorClass(hasSpecialChar(pw))}>One special character (@*&!...)</p>
      </div>
    </div>
  );

}
