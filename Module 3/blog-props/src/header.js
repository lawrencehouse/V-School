const Header = () => (
    <header className="header">
        <div className="overlay"></div>
        <div className="header-div0">
            <h2 className="title">Start Bootstrap</h2>
            <Navbar />
        </div>
        <div className="header-div1">
            <h1>Clean Blog</h1>
            <span>A Blog Theme by Start Bootstrap</span>
        </div>
    </header>
)

const Navbar = () => (
    <div className="navbar">
        <div>
        <nav>
            <a href="/home/">HOME</a> |
            <a href="/about/">ABOUT</a> |
            <a href="/sample_post/">SAMPLE POST</a> |
            <a href="/contact/">CONTACT</a>
        </nav>
        </div>
    </div>
)


export default Header