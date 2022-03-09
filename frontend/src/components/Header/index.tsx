import { ReactComponent as Line } from "assets/Line.svg"
import "./styles.css"

function Header() {

    return (
        <header className="sm-header">
            <h1>Manual do Canva</h1>
            <Line className="sm-separator"/>
            <p>Não perca tempo!  Aprenda a dominar a plataforma mais completa de design gráfico</p>
        </header>
    )

}

export default Header