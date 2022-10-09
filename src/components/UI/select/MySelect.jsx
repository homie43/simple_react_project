import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => { // принимает массив опций и строку(сортировка по) // для двустороннего связывания и управляемого компонента
    return (
        <select value={value} onChange={e => onChange(e.target.value)}>
          <option value="">{defaultValue}</option>
          {options.map(option => 
            <option key={option.value} value={option.value}>
                {option.name}
            </option>
          )}
        </select>
    );
};

export default MySelect;