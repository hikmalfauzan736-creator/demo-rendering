export const revalidate = false

type Product = {
  id: number
  title: string
  price: number
  thumbnail: string
}

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products")
  const data = await res.json()
  return data.products
}

export default async function SSGPage() {
  const products = await getProducts()

  return (
    <div>
      <h1>Daftar Produk (SSG)</h1>
      <div className="grid">
        {products.map((product: Product) => (
          <div key={product.id} className="card">
            <img src={product.thumbnail} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}