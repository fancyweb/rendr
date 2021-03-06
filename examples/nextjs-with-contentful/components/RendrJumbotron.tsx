import { Jumbotron } from "react-bootstrap";

export default function RendrText({
  title,
  message
}: {
  title: string;
  message: string;
}) {
  return (
    <Jumbotron>
      <h1>{title}</h1>
      <p>{message}</p>
    </Jumbotron>
  );
}
