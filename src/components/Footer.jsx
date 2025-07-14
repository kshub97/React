function Footer(){
     const copyright = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Ftopic%2Fcopyright-symbol&psig=AOvVaw3kt3ag41cPY3A0zuUsOTfo&ust=1752513974439000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDC37qtuo4DFQAAAAAdAAAAABAE";
  
    return(
          <footer id='footer' className='footer-section'>
    <p>2025. All Right Resevered <a href={copyright}>C.</a></p>
   </footer>
    );
}
export default Footer;