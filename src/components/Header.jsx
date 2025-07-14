function Header(){
     const name = "Shubham Kumar";
    const profession = "Full Stack Developer";
    return (
        <header id='header' className='header-section'>
            <h1>{name}</h1>
            <p>{profession}</p>
            <nav>
                <a href='#about'>About</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
            </nav>
        </header>
    );
}
export default Header;