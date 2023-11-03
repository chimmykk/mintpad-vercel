
type LabelProps = {
  htmlFor: string;
  value?: string;
  info?: string;
  children?: React.ReactNode;
};

const Label: React.FC<LabelProps> = ({ htmlFor, value, info, children }) => {
  return (
    <label htmlFor={htmlFor} className="inline-block text-xs font-medium mb-1 ml-1 text-mintpad-400 dark:text-gray-400">
      {value ? (
        value
      ) : (
        <span>{children}</span>
      )}
      {info && (
        <span className="inline-block ml-2" title={info}>
          <i className="fas fa-question-circle text-sm text-mintpad-700 dark:text-gray-200"></i>
        </span>
      )}
    </label>
)};

export default Label;
