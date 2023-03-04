type SearchQuery<T> = {
  query: string;
  limit: number;
  sort: (keyof T)[] | [];
  order: number[] | [];
};

export default SearchQuery;
