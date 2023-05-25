import Head from 'next/head'
import { useRouter } from 'next/router'
import CurrencyDetail from '../../components/CurrencyDetail'
import ErrorComponent from '../../components/Error'
import Loader from '../../components/Loader'
import { useCurrency } from '../../hooks/useCurrency'

type IdParam = { id: string }

const Currency: React.FC = () => {
  const router = useRouter()
  const { id } = router.query as IdParam

  const { status, data, error, isFetching } = useCurrency(id)

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

  if (!data || isFetching) {
    return <Loader />
  }

  return (
    <>
      <Head>
        <title>CoinGecko Currency {data?.id}</title>
      </Head>
      <main className="flex justify-center mt-10">
        <CurrencyDetail {...data} />
      </main>
    </>
  )
}

export default Currency
