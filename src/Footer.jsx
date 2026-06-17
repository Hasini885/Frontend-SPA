function Footer(props) {
    return (
        <footer className="footer">
            <p>&copy; {props.year} {props.companyName}. All rights reserved.</p>
            <div className="footer-links">
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#privacy">Privacy Policy</a>
            </div>
        </footer>
    );
}

export default Footer;
