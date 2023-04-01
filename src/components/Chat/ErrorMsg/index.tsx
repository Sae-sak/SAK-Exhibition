export default function ErrorMsg({ message }: { message: string }) {
  return (
    <div>
      <p>Error: {message}</p>
    </div>
  );
}
