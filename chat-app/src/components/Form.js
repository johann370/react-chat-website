import FormInput from "./FormInput"

const Form = ({ form_inputs }) => {
    return (
        <form className="form">
            <h2>Log In</h2>
            {
                form_inputs.map((form_input) => (
                    <FormInput key={form_input.label} label={form_input.label} input_type={form_input.input_type} placeholder={form_input.placeholder} />
                ))
            }
            <input className="btn" type="submit" value="Log In" />
        </form>
    )
}

export default Form
