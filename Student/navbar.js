

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
                  <a class="nav-link active" aria-current="page" href="/Student/home.html">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Student/student.html">Add</a>
                </li> 
              </ul>
                  <form class="d-flex" role="search" id="searching">
                  <input class="form-control me-2"type="search" placeholder="Search" aria-label="Search" id="search"/>
                  <button class="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
            </div>
          </div>
        </nav>
        `
    }
    
    export default Navbar
    