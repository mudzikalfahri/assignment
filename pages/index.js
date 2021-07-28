import Navbar from "../components/navbar"

export async function getServerSideProps(){
  const res = await fetch('http://localhost:1337/posts');
  const data = await res.json();
  return {
    props: {
      data: data
    }
  }
}

export default function Home() {
  return (
    <div className="min-h-screen">
        <Navbar/>
        {/* body */}
        <div className="max-w-3xl mx-auto px-6 pt-40 md:pt-28">
          <div className="">
            <h3 className="text-lg text-indigo-400 font-semibold flex items-center"> HELLO THERE,
            </h3>
            <h1 className="text-5xl font-bold my-4">I'm Mudzik Al Fahri</h1>
            <p className="text-gray-500 text-md leading-loose">I'm from Yogyakarta, Indonesia. I’m a third year computer engineering student at Diponegoro University. I love to do some experiment with code. This website is one part of me on the internet
            </p>
          </div>
          
        </div>

    </div>
  )
}
