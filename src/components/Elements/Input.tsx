type InputProps = {
  id: string;
  icon?: boolean;
  backgroundColor?: string | false;
  border?: string;
  placeholder?: string;
  type?: string;
  name?: string;
};

export default function Input({
  id,
  icon = false,
  backgroundColor = false,
  border = "border-gray-300",
  ...rest
}: InputProps) {
  return (
    <input
      id={id}
      className={`py-3 pl-4 text-sm rounded-md w-full border text-gray-700 ${border} focus:border-black focus:outline-none focus:ring-0 ${
        backgroundColor || ""
      }`}
      {...rest}
    />
  );
}
