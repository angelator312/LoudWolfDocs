export default function Label({ plural = false }: { plural: boolean }) {
  return (
    <code>
      <a>Label{plural && "s"}</a>
    </code>
  );
}
