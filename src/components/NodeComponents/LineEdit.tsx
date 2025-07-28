export default function LineEdit({ plural = false }: { plural: boolean }) {
  return (
    <code>
      <a>LineEdit{plural && "s"}</a>
    </code>
  );
}
