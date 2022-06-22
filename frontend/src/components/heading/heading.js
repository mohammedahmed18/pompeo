import './heading.css'
function Heading(props){
    // const title = <Heading brand="mug" />;
    return(
        <header>
            <div className='container'>
                    <div className='header-content'>
                    <h2>{props.brand}</h2>
                    <p>The attractions of ceramics lie partly in its contradictions. It is both difficult and easy, with an element beyond our control. It is both extremely fragile and durable. Like 'Sumi' ink painting, it does not lend itself to erasures and indecision.</p>
                    </div>
            </div>
        </header>
    )
}
export default Heading;