const Form = ({ children, submit, formRef }) => {
    return(
        <form onSubmit={submit} ref={formRef}>
            {children}
        </form>
    )
}

export default Form;