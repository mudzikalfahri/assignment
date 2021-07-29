function Navbar() {
    return (
        <nav className="fixed bg-white backdrop-filter backdrop-blur-lg bg-opacity-40 w-full border-b border-gray-300 md:border-0">
          <div className="max-w-3xl mx-auto md:flex justify-between py-6 font-normal px-6 lg:px-0" >
            <div className="text-md flex justify-center md:inline">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </div>
            <div className="w-3/4 md:w-1/3 mx-auto md:mx-0 mt-4 md:mt-0">
              <ul className="text-md flex justify-between">
                <li><a href="#">Home</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About</a></li>              
                <li><a href="#">Project</a></li>              
              </ul>
            </div>
          </div>
        </nav> 
    )
}

export default Navbar
