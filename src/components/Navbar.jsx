function Navbar({ cart }) {    
  function interactMenu(){
    document.getElementById('menu').classList.toggle('active')
  }
  function interactCart(){
    if (cart.length > 0) {
      document.getElementById('cart').classList.toggle('active')
    }    
  }
  return (
    <nav className='sticky top-0 font-[Peloric] text-[black] text-[32px] z-10'>
        <ul className='flex list-none border-b-2 justify-between items-center px-20'>
            <li><h1>PELEPENAS <br /> PRESSCART</h1></li>
            <div className="flex space-x-12">
              <li className="relative">
                <i className="fa-solid fa-cart-shopping cursor-pointer" onClick={() => interactCart()}></i>
                <p className="rounded-full py-1 px-2 absolute top-[-10px] right-[-10px] bg-[red] font-[Inter] text-sm text-center">{cart.length}</p>
              </li>
              <li><i className="fa-solid fa-bars cursor-pointer" onClick={() => interactMenu()}></i></li>
            </div>            
        </ul>
    </nav>
  )
}

export default Navbar