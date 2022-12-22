type PaginationResponse = {
  page: number;
  limit: number;
  total: number;
  skip: number;
  sort: object;
  totalPages: number;
};

export default PaginationResponse;
