const FormInput = ({ label, input_type, placeholder }) => {
    return (
        <div className="form-input">
            <label>{label}</label>
            <input type={input_type} placeholder={placeholder} />
        </div>
    )
}

export default FormInput
