import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import ProductFeed from '../components/ProductFeed'
import Footer from '../components/Footer'
function Home({ products }){
  return (
    <div className="bg-gray-100 h-max">
      <Head>
        <title>Amazon 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className = 'max-w-screen-2xl mx-auto'>
        {/* Banner */}
          <Banner />
        {/* ProductFeed */}
        <ProductFeed products = {products} />
      </main>
      <Footer />
    </div>
  )
}

export default Home

export async function getServerSideProps(context){
 const products = await fetch(`https://fakestoreapi.com/products`)
 .then((res)=>res.json())
 return{
   props: {
     products
   }
 }
}