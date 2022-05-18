const TextArea = ( { value, name, label } ) => {
    return(
        <div>
            <label htmlFor={name}>
                {label}
                <textarea 
                    name={name}
                    id={name}
                    defaultValue={value}
                />
            </label>
        </div>
    )
}

export default TextArea;