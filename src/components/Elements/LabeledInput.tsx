type LabeledInputProps = {
  id: string;
  label: string;
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function LabeledInput({
  id,
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
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
          value={value}
          onChange={onChange}
          className="text-sm rounded-md w-full bg-[#f9fafb] border border-gray-200 text-gray-700 py-2 px-3 focus:border-gray-400 focus:outline-none focus:ring-0"
        />
    </div>
  );
}
