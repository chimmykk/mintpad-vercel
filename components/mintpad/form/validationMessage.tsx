

const ValidationMessage = ({ validation }: {validation: string | boolean}) => {
  return (
    <>
      {validation && (
        <span className="text-xs absolute -bottom-[2px] left-1 text-red-500">
          {validation}
        </span>
      )}
    </>
  );
};

export default ValidationMessage;
