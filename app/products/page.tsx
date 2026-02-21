"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

type Product = {
  id: number
  title: string
  price: number
  thumbnail: string
}

export default function CSRPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products)
        setLoading(false)
      })
      .catch(() => {
        setError("Gagal mengambil data")
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div>
      <h1>Daftar Produk (CSR)</h1>
      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.thumbnail} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <Link href={`/products/${product.id}`} className="button">
              Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}