import { useQuery } from '@tanstack/react-query'
import { productActions } from '..'

interface ProductsOptions {
  filterKey?: string
}

export const useProducts = ({ filterKey }: ProductsOptions) => {
  const {
    isLoading,
    isError,
    error,
    data: products = [],
    isFetching
  } = useQuery({
    queryKey: ['products', { filterKey }],
    queryFn: () => productActions.getProducts({ filterKey }),
    staleTime: 1000 * 60 * 60
  })

  return {
    isLoading,
    isError,
    error,
    products,
    isFetching
  }
}
