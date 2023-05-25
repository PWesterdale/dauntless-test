import Link from 'next/link'
import Button from './elements/Button'

type Props = {
  title: string
  body: string
}

const ErrorComponent: React.FC<Props> = ({ title, body }) => {
  return (
    <div className="h-screen w-full relative flex justify-center items-center">
      <div>
        <h1 className="text-2xl mb-4">{title}</h1>
        <p className="text-lg mb-2">{body}</p>
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
      </div>
    </div>
  )
}

export default ErrorComponent
