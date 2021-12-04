import Navitem from './Navitem'

const Navbar = ({ navitems }) => {
    return (
        <div className='navbar'>
            {
                navitems.map((navitem) => (
                    <Navitem key={navitem.text} link={navitem.link} text={navitem.text} />
                ))
            }
        </div>
    )
}

export default Navbar
