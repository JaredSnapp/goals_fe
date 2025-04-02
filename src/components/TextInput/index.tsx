
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  ref?: React.RefCallback<HTMLInputElement>;
}

// Note: Doesn't currently work with useForm
export function TextInput({
    children,
    ref,
    ...attributes
}: Props) {
    return (
      <input className={"m-1 p-1 border rounded"} {...attributes} />
    )
}