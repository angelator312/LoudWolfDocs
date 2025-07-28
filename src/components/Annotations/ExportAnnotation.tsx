export default function ExportAnnotation({
  plural = false,
}: {
  plural: boolean;
}) {
  return <code>@export{plural && "s"}</code>;
}
