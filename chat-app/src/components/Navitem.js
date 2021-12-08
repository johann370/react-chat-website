const Navitem = ({ link, text, onClick }) => {
    return (
        <a href={link} onClick={onClick}>{text}</a>
    )
}

export default Navitem
