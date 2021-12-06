import FormInput from './FormInput'

const Form = ({ onSubmit, form_inputs, submit_value, header }) => {
    return (
        <form className='form' onSubmit={onSubmit}>
            <h2>{header}</h2>
            {
                form_inputs.map((form_input) => (
                    <FormInput
                        key={form_input.label}
                        label={form_input.label}
                        input_type={form_input.input_type}
                        placeholder={form_input.placeholder}
                        onChange={form_input.onChange}
                        value={form_input.value}
                    />
                ))
            }
            <input className='btn' type='submit' value={submit_value} />
        </form>
    )
}

export default Form
