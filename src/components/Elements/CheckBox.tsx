type CheckBoxProps = {
  id: string;
  name?: string;
  label: string;
  defaultChecked?: boolean;
};

export default function CheckBox({ id, name, label, defaultChecked }: CheckBoxProps) {
  return (
    <div className="mb-4 flex items-center">
      <input
        type="checkbox"
        id={id}
        name={name || id}
        defaultChecked={defaultChecked}
        className="h-4 w-4 accent-[#2abbaa]"
      />
      <label htmlFor={id} className="text-sm text-gray-600 ml-2">
        {label}
      </label>
    </div>
  );
}
