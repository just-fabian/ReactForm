const Field = ( { type, value, name, label, checked } ) => {
    return(
        <div>
            <label htmlFor={name}>
                {label}
                <input 
                    type={type}
                    name={name}
                    id={name}
                    defaultValue={value}
                    defaultChecked={checked}
                />
            </label>
        </div>
    )
}

export default Field;