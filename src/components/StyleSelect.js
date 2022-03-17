import React from 'react';

export const customStyles = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state.isSelected ? 'white' : 'black',
        padding: 20,
        width: '100%',
    }),
    control: () => ({
        // none of react-select's styles are passed to <Control />
        height: 50,
        miniHeight: 50,
        width: 150,
    }),
    singleValue: (provided, state) => {
        const backgroundColor = state.isDisabled ? '#323131' : '#323131';
        const color = state.isDisabled ? '#323131' : 'white';
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';


        return {...provided, backgroundColor, color, opacity, transition};
    }
}