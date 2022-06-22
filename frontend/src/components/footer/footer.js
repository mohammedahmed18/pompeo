import './footer.css';
import Fade from 'react-reveal/Fade';
function Footer () {
    return(
        <footer className='footer'>
            <div className="container">
                <h3>Pompeo</h3>
                <p>I have always striven to fix beauty in wood, stone,glass or pottery, that has been my creed.</p>
                <Fade left>
                <div className='row'>
                    <div className='col-12 col-md-4 d-flex align-items-center justify-content-center'>
                        <div>
                        <img src='assets/img/email icon.png' alt="email"/>
                        <h4>EMAIL</h4>
                        <h6>pompeopotery@gmail.com</h6>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 d-flex align-items-center justify-content-center'>
                        <div>
                        <img src='assets/img/find icon.png' alt="gps"/>
                        <h4>FIND</h4>
                        <h6>Central Park, Manhatta new York, 1101</h6>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 d-flex align-items-center justify-content-center'>
                        <div>
                        <img  src='assets/img/phoneicon.png' alt="phone"/>
                        <h4>CALL</h4>
                        <h6>+1 292 345 678</h6>
                        </div>
                    </div>
                </div>
                </Fade>

            </div>
        </footer>
    )
}
export default Footer;