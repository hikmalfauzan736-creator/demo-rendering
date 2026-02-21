type Props = {
  params: Promise<{ id: string }>
}

export default async function DetailProduct({ params }: Props) {
  const { id } = await params

  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store", // SSR
  })

  const product = await res.json()

  return (
    <div>
      <h1>{product.title}</h1>
      <p>Harga: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  )
}