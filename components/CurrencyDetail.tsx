import Image from 'next/image'
import Link from 'next/link'
import { Currency } from '../interfaces/currency.interface'
import Button from './elements/Button'

const CurrencyDetail: React.FC<Currency> = ({
  id,
  image,
  name,
  market_data,
}) => {
  return (
    <div key={id} className="flex flex-col justify-center">
      <Image
        src={image.large}
        alt="placeholder"
        width={200}
        height={200}
        className="object-cover object-center mx-auto"
      />
      <div className="flex-1 p-4">
        <h2 className="text-3xl font-semibold mb-2">{name}</h2>
        <ul className="list-disc pl-5 text-xl">
          <li>Current Price: {market_data.current_price.usd}</li>
          <li>All Time High: {market_data.ath.usd}</li>
          <li>Market Cap: {market_data.market_cap.usd}</li>
          <li>Market Cap Rank: {market_data.market_cap_rank}</li>
        </ul>
      </div>
      <div className="p-4">
        <Link href={`/`}>
          <Button>Back</Button>
        </Link>
      </div>
    </div>
  )
}

export default CurrencyDetail
