import axios, { AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { Currency } from '../interfaces/currency.interface'

const getCurrencyById = async (id: string) => {
  const { data } = await axios.get<Currency>(
    `${process.env.NEXT_PUBLIC_COINGECKO_URL}/coins/${id}`,
  )
  return data
}

export function useCurrency(currencyId: string) {
  return useQuery<Currency, AxiosError>(
    ['currency', currencyId],
    () => getCurrencyById(currencyId),
    {
      enabled: !!currencyId,
    },
  )
}
