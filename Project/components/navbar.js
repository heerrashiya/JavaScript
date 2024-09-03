

const Navbar = () => {

  return `
 <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/Project/home.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Project/page/product.html">Product</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Project/page/addproducts.html">AddProduct</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Project/page/cart.html">Cart</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Project/page/login.html">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Project/page/signup.html">SignUp</a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
    `
}

export default Navbar
