import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
           <div className="footer_text"> &copy; {new Date().getFullYear()} Nguyen Thai Duc. All Rights Reserved.</div>
        </footer>
    );
}

export default Footer;
