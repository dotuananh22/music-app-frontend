type ApiResponse<T> = {
  success: boolean;
  // have message when success = false
  message?: string;
  data?: T;
};

export default ApiResponse;
