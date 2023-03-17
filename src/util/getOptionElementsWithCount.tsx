export const getOptions = (data: any[], key: string): JSX.Element[] => {
  const count: { [key: string]: number } = {};
  for (const item of data) {
    const value = item[key].toLowerCase();
    count[value] = (count[value] || 0) + 1;
  }
  const options: JSX.Element[] = [];
  for (const value in count) {
    options.push(
      <option key={value} value={value}>
        {`${value} (${count[value]})`}
      </option>
    );
  }
  return options;
};
