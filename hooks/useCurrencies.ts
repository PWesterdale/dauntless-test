import axios, { AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { ListCurrency } from '../interfaces/list-currency.interface'

export function useCurrencies() {
  return useQuery<ListCurrency[], AxiosError>(
    'currencies',
    async () => {
      const { data } = await axios.get<ListCurrency[]>(
        `${process.env.NEXT_PUBLIC_COINGECKO_URL}/coins/markets?vs_currency=usd&per_page=45`,
      )
      return data
    },
    {
      retry: 3,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  )
}
