import "./styles.css"
import { ReactComponent as InstagramIcon } from "assets/instagram.svg"
import { ReactComponent as YoutubeIcon } from "assets/youtube.svg"


function Footer() {

    return (
        <footer className="sm-footer">
            <div className="sm-navbar">
                <nav>
                    <div className="sm-nav-icons">
                        <a href="https://www.instagram.com/" target="_blank">
                            <InstagramIcon className="sm-icon"/>
                        </a>
                        <a href="https://www.youtube.com/" target="_blank">
                            <YoutubeIcon className="sm-icon" />
                        </a>
                    </div>
                    <div className="sm-text-email">
                        <p>Email para contato: *******@*******.com.br</p>
                    </div>
                </nav>
            </div>
        </footer>
    )

}

export default Footer