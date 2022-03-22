<svelte:head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.10.2/css/all.css" />
    <link href="../src/css/Scratchystylesheet.css" rel="stylesheet">
    <link href="../src/css/main.css" rel="stylesheet">
    <script src="https://www.markuptag.com/bootstrap/5/js/bootstrap.bundle.min.js"></script>
</svelte:head>

    <nav class="navbar navbar-expand-lg navbar-dark backColor" style="padding: 0px">
        <div class="container backColor" style="margin=0px; align-content:left">
            <a class="navbar-brand nopadding" href="/"><img src="../src/images/AHTDLogo.jpg" alt="Logo" class="img-fluid" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <a class="nav-link active text-nowrap" href="/">Home</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            More/Tools
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="../tasks">Tasks</a></li>
                            <li><a class="dropdown-item" href="../coltest">Column Tests</li>
                            <li><a class="dropdown-item" href="https://sveltestrap.js.org/?path=/story/components--get-started" target="_new">Svelte Bootstrap</a></li>
                            <li><a class="dropdown-item" href="/nav-font-banner">Custom Font Header</a></li>
                            <li><a class="dropdown-item" href="https://www.markuptag.com/bootstrap-5-navbar-with-login-button">Basic Navbar Code</a></li>

                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-nowrap" href="../about">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../faq">FAQ</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-nowrap" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            View More
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="https://www.markuptag.com/bootstrap-5-navbar-with-login-button">Basic Navbar Code</a></li>
                            <li><a class="dropdown-item" href="#">Web Designing</a></li>
                            <li><a class="dropdown-item" href="#">Android Development</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-nowrap" href="#">Contact Us</a>
                    </li>
                </ul>
                <div class="d-flex">
                    <div class="dropdown" >
                        <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            Our Products
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a class="dropdown-item" href="#">Product One</a></li>
                            <li><a class="dropdown-item" href="#">Product Two</a></li>
                            <li><a class="dropdown-item" href="#">Product Three</a></li>
                        </ul>
                    </div>
                    <button class="btn btn-light ms-3">Login</button>
                </div>
            </div>
        </div>
  </nav>