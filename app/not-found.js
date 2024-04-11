import Link from "next/link"
import React from "react"

const PageNotFound = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-3xl font-bold">404</h1>
        <h2>That page cannot be found!</h2>
        <div className="mt-3">
          <Link
            href="/"
            className="mt-2 rounded-md bg-emerald-400 px-3 py-1 text-white"
          >
            Go Home
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PageNotFound
