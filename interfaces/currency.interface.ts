export interface Currency {
  id: string
  symbol: string
  name: string
  asset_platform_id: any
  image: {
    thumb: string
    small: string
    large: string
  }
  market_data: MarketData
}

export interface PriceMatrix {
  aed: number
  ars: number
  aud: number
  bch: number
  bdt: number
  bhd: number
  bmd: number
  bnb: number
  brl: number
  btc: number
  cad: number
  chf: number
  clp: number
  cny: number
  czk: number
  dkk: number
  dot: number
  eos: number
  eth: number
  eur: number
  gbp: number
  hkd: number
  huf: number
  idr: number
  ils: number
  inr: number
  jpy: number
  krw: number
  kwd: number
  lkr: number
  ltc: number
  mmk: number
  mxn: number
  myr: number
  ngn: number
  nok: number
  nzd: number
  php: number
  pkr: number
  pln: number
  rub: number
  sar: number
  sek: number
  sgd: number
  thb: number
  try: number
  twd: number
  uah: number
  usd: number
  vef: number
  vnd: number
  xag: number
  xau: number
  xdr: number
  xlm: number
  xrp: number
  yfi: number
  zar: number
  bits: number
  link: number
  sats: number
}

export interface MarketData {
  current_price: PriceMatrix
  ath: PriceMatrix
  market_cap: PriceMatrix
  market_cap_rank: number
}
