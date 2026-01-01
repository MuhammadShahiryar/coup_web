// Navigation types
export interface NavItem {
  label: string;
  href: string;
}

// Common component props
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

// API response types (for future use)
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

// Pagination types
export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  totalPages: number;
}
