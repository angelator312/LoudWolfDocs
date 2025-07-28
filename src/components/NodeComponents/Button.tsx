export default function Button({ plural }: { plural: boolean }) {
  return (
    <code>
      <a>Button{plural && "s"}</a>
    </code>
  );
}
