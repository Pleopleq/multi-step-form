type ButtonProps = {
  children: string;
  onClick: () => void;
  color?: string;
  disabled?: boolean;
};

const Button = ({ children, color, onClick, disabled }: ButtonProps) => {
  return (
    <button
      className='main-button'
      style={{
        backgroundColor: color,
      }}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
