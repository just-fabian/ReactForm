const Select = ( { value, name, label, options=[] } ) => {
    return(
        <div>
            <label htmlFor={name}>
                {label}
                <select defaultValue={value} name={name}>
                    <option value="">Seleccionar</option>
                    {
                        options.map(({val, content}) =>(
                            <option key={val} value={val}>{content}</option>
                        ))
                    }
                </select>
            </label>
        </div>
    )
}

export default Select;