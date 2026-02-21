type Product = {
  id: number
  title: string
  price: number
  thumbnail: string
}

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store", 
  })

  if (!res.ok) {
    throw new Error("Gagal mengambil data")
  }

  const data = await res.json()
  return data.products
}

export default async function SSRPage() {
  const products = await getProducts()

  return (
    <div>
      <h1>Daftar Produk (SSR)</h1>

      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Harga: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}