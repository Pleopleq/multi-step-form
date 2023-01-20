type ButtonProps = {
  label: string;
  color: string;
  onClick: () => void;
  disabled?: boolean;
};

const Button = ({ label, color, onClick, disabled }: ButtonProps) => {
  return (
    <button
      className='main-button'
      style={{
        backgroundColor: color,
      }}
      disabled={disabled}
      onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
