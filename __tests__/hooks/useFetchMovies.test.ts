import { act, renderHook } from "@testing-library/react-native";
import { useGetMoviesQuery } from "../../src/redux/slices/movieSlice";
import useFetchMovies from "../../src/hooks/useFetchMovies";

// Mock the useGetMoviesQuery hook
jest.mock('../../src/redux/slices/movieSlice', () => ({
  useGetMoviesQuery: jest.fn(),
}));

describe('useFetchMovies', () => {
  beforeEach(() => {
    // Clear mock implementation and reset state before each test
    jest.clearAllMocks();
  });

  test('fetches movies data and updates state', async () => {
    const mockMoviesData = [{ id: 1, title: 'Movie 1' }, { id: 2, title: 'Movie 2' }];
    const mockUseGetMoviesQuery = useGetMoviesQuery as jest.Mock;
    mockUseGetMoviesQuery.mockReturnValue({
      data: mockMoviesData,
      isLoading: false,
      isError: false,
    });

    const { result } = renderHook(() => useFetchMovies());

    expect(result.current.data).toEqual(mockMoviesData);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
  });

  test('sets isLoadMore to true and increments page on loadMore', async () => {
    const mockUseGetMoviesQuery = useGetMoviesQuery as jest.Mock;
    mockUseGetMoviesQuery.mockReturnValue({
      data: [],
      isLoading: false,
      isError: false,
    });

    const { result } = renderHook(() => useFetchMovies());

    expect(result.current.isLoadMore).toBe(false);

    act(() => {
      result.current.loadMore();
    });

    expect(result.current.isLoadMore).toBe(true);
    expect(result.current.page).toBe(2); // Assuming page starts from 1
  });
});
