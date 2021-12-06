const FormInput = ({ label, input_type, placeholder, onChange }) => {
    return (
        <div className='form-input'>
            <label>{label}</label>
            <input type={input_type} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
        </div>
    )
}

export default FormInput
