type QueryInput<T> = {
  limit: number;
  sort: (keyof T)[] | [];
  skip: number | 0;
  order: number[] | [];
};

export default QueryInput;
