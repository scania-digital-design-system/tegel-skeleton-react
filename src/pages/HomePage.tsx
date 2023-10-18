import Logo from '../assets/logo.svg'
import './HomePage.css'

const HomePage = () => {
    return (
        <>
            <h1 className="tds-headline-01 tds-u-pb3">Welcome to Tegel</h1>
            <img className='tds-u-w-100 scania-logo' src={Logo} alt="Scania gripen" />
        </>
    )
};

export default HomePage;
