import PropTypes from "prop-types";

export default function InputField({
  label,
  type = "text",
  name = "text-field",
  value = "text field",
  placeholder,
  icon: Icon,
  noLabel,
  onChange = () => console.log("Input Changed"),
  required,
}) {
  //Render
  return (
    <>
      {!noLabel && (
        <label
          htmlFor={`${label.toLowerCase()}-input`}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
          {required && <span className="text-state-danger">*</span>}
        </label>
      )}
      {noLabel && required && (
        <label
          htmlFor={`${label.toLowerCase()}-input`}
          className="block mb-2 text-sm font-medium text-state-danger"
        >
          *
        </label>
      )}
      <div className="relative mb-6">
        {Icon && (
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <Icon />
          </div>
        )}
        <input
          type={type}
          id={name}
          name={name}
          className="bg-backg-raised border border-gray-300 border-gray-dark2/50 text-sm rounded-lg focus:ring-primary focus:border-transparent block w-full ps-10 p-2.5  dark:bg-backg-dark-raised dark:border-gray-light2/75 placeholder:italic focus:outline-none"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  icon: PropTypes.any,
  noLabel: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};
