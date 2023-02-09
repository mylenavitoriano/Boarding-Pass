import { BoardingPassStyled } from "./style";
import { IoAirplane } from 'react-icons/io5'

export default function BoardingPass(){
    return(
        <BoardingPassStyled>
            <div className="flightData">
                <div className="price_date">
                    <div className="price">
                        <p>Voo</p>
                        <h4>RS995</h4>
                    </div>
                    <div className="date">
                        <p>Data</p>
                        <h4>23/05/2023</h4>
                    </div>
                </div>

                <div className="destiny">
                    <div className="leaving">
                        <p className="city">São Paulo, Brasil</p>
                        <h4>GRU</h4>
                        <p className="time">17:00</p>
                    </div>
                    <IoAirplane color={"#000"} size={30}/>
                    <div className="going">
                        <p className="city">São Francisco, EUA</p>
                        <h4>SFO</h4>
                        <p className="time">04:48<span>+1</span></p>
                    </div>
                </div>
            </div>


            <div className="passengerData">
                <span className="block1"></span>
                <span className="block2"></span>
                <div className="passenger">
                    <p>Passageiro</p>
                    <h4>Mylena Vitoriano</h4>
                </div>
                <div className="seat">
                    <p>Assento</p>
                    <h4>28A</h4>
                </div>
                <span className="block3"></span>
                <span className="block4"></span>
            </div>


            <div className="boardingData">
                <div className="data">
                    <div className="blockLeft">
                        <div className="timeBoarding">
                            <p>Embarque</p>
                            <h4 className="time">16:15</h4>
                        </div>
                        <div className="terminal">
                            <p>Terminal</p>
                            <h4>2</h4>
                        </div>
                        <div className="gate">
                            <p>Portão</p>
                            <h4>15</h4>
                        </div>
                    </div>
                    <div className="blockRight">
                        <img src="../images/qr_code.png" alt="QR Code Grupo de Embarque" />
                        <p>Grupo de Embarque: 3</p>
                    </div>
                </div>
                <div className="attention">
                    <p><strong>Atenção:</strong> o portão fecha as 16:45</p>
                </div>
            </div>
        </BoardingPassStyled>
    )
}