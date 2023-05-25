import Head from 'next/head'
import React from 'react'
import CurrencyCard from '../components/CurrencyCard'
import ErrorComponent from '../components/Error'
import Loader from '../components/Loader'
import { useCurrencies } from '../hooks/useCurrencies'

const Home: React.FC = () => {
  const { status, data, error, isFetching } = useCurrencies()

  if (isFetching) {
    return <Loader />
  }

  if (error) {
    return (
      <>
        <Head>
          <title>{error.message}</title>
        </Head>
        <ErrorComponent title={error.name} body={error.message} />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>CoinGecko Market Pairs (USD)</title>
      </Head>
      <main>
        <div className="bg-white pt-8 pb-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-sm">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Market Pairs (USD)
            </h1>
            <p className="text-xl text-center text-gray-600">
              The following is a list of crypto currencies with information
              related to the USD trading pair.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data &&
              data.map((currency) => (
                <CurrencyCard key={currency.id} {...currency} />
              ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
