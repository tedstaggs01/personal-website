Personal Website, created by Ted Staggs. 

#3B8BEB
<!--->
<nav class="navbar navbar-dark bg-primary">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Ted</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contact.html">MEME</a>
            </li>
        </ul>
    </nav>



     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="index.html">TED</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">CONTACT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">MEME</a>
            </li>
          </ul>
        </div>
      </nav>


      body {
    background-color:   #3B8BEB;
}
/*
nav {
    margin-bottom: 10px;
    padding: 40px;
    font-size: 25px;
}
*/
.intro {
    color: #FFFF;
    text-align: center;
    height: 100%;
    width: 100%;
    padding: 400px;
    background-color: #3B8BEB;
    font-size: 70px;
    font-weight: 700;
}

.slide {
    width: 100%;
    position: absolute;
    left: -100px;
    -webkit-animation: slide 0.5s forwards;
    -webkit-animation-delay: 1s;
    animation: slide 0.5s forwards;
    animation-delay: 0s;
}

/* make intial opacity = 0*/

@-webkit-keyframes slide {
    from {
        opacity: 0;
    }
    to { 
        opacity: 1;
        left: 0;
    }
    
}

@keyframes slide {
    from {
        opacity: 0;
    }
    to { 
        left: 0; 
    }
}

.know {
    font-size: 40px;
    border: 2px solid white;
    background-color: #3B8BEB;
    color: white;
    transition: 0.5s;
    background: linear-gradient(to left, #3B8BEB 50%, white 50%) right;
    background-size: 200%;
    transition: .5s ease-out;
}

button:hover {
    background-position: left;
    color: #3B8BEB;
}

#connect {
    padding: 30px;
    width: 100%;
    text-align: center;
}

.about {
    width: 100%;
    height: 50%;
    padding: 100px;
    text-align: center;
}

.projects {
    width: 100%;
    height: 50%;
    background-color: #90CCF4;
    padding: 100px;
    text-align: center;
}


.socials {
    text-align: center;
    align-items: center;
    width: 80%;
    margin: auto;
    padding: 20px;
    background-color: #B23850;
    border-radius: 10px;
    text-decoration: none;
}

a:link {
    color: black;
    text-decoration: none;
}

a:hover {
    color: white;
}

footer {
    margin-top: 500px;
    background-color: #8590AA;
    padding: 30px;
}

