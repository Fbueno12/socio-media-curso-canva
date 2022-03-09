import "./styles.css"

function Form() {

    return (
        <div className="sm-form">
            <form action="#" method="post">
                <div className="sm-input-group">
                    <label htmlFor="">Nome:</label>
                    <input type="text" name="sm_name" id="sm_name" placeholder="João da silva"/>
                </div>
                <div className="sm-input-group">
                    <label htmlFor="">Melhor e-mail:</label>
                    <input type="email" name="sm_email" id="sm_email" placeholder="joao@gmail.com"/>
                </div>
                <button className="sm-submit-btn">BAIXE AGORA</button>
            </form>
        </div>
    )

}

export default Form