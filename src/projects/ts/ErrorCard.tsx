interface ErrorCardProps {
  message: string;
}
const ErrorCard = ({ message }: ErrorCardProps) => {
  return (
    <div className="card error">
      <p>{message}</p>
    </div>
  );
};

export default ErrorCard;
