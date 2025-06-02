import { BUTTON_SIZES_CLASSES } from "@/constants";
import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ size, shape }) => {
  return (
    <button
      className={`text-white ${BUTTON_SIZES_CLASSES[size]} bg-orange-700 font-semibold ${shape}`}
    >
      Custom Button
    </button>
  );
};

export default Button;
