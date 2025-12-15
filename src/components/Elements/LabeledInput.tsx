type LabeledInputProps = {
  id: string;
  label: string;
  type?: string;
  name?: string;
  placeholder?: string;
};

export default function LabeledInput({
  id,
  label,
  type = "text",
  name,
  placeholder,
}: LabeledInputProps) {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block text-sm text-gray-600 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name || id}
        placeholder={placeholder}
        className="text-sm rounded-md w-full bg-special-mainBg border border-gray-200 text-gray-700 py-2 px-3 focus:border-gray-400 focus:outline-none focus:ring-0"
      />
    </div>
  );
}
