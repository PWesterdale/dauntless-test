import Image from 'next/image'
import Link from 'next/link'
import { ListCurrency } from '../interfaces/list-currency.interface'
import Button from './elements/Button'

const CurrencyCard: React.FC<ListCurrency> = ({
  id,
  image,
  name,
  current_price,
  high_24h,
  low_24h,
}) => {
  return (
    <div key={id} className="flex flex-col justify-center max-w-xs mx-auto">
      <Image
        src={image}
        alt="placeholder"
        width={200}
        height={200}
        className="object-cover object-center mx-auto"
      />
      <div className="flex-1 p-4">
        <h2 className="text-xl font-semibold mb-2 text-center">{name}</h2>
        <ul className="list-disc pl-5">
          <li>Current Price: {current_price}</li>
          <li>24h High: {high_24h}</li>
          <li>24h Low: {low_24h}</li>
        </ul>
      </div>
      <div className="p-4 text-center">
        <Link href={`/currency/${id}`}>
          <Button>More</Button>
        </Link>
      </div>
    </div>
  )
}

export default CurrencyCard
