import React from 'react';
import Select from 'react-select';
import {getSources} from './api';
import './SourceSelector.css';

const SourceSelector = ({onSourceChanged}) => {
    const [sources, setSources] = React.useState([]);
    const [selectedOption, setSelectedOption] = React.useState(null);

    React.useEffect(() => {
        getSources().then(res => {
              var sources = res.data.sources.map(s => { return {
                value: s.id, 
                label: s.name
            }});
            sources = [ {value: 'all', label: 'All Sources'}, ...sources];
            setSources(sources);
            setSelectedOption(sources[0]);
        })
    }, [setSources, setSelectedOption]);

    function onSelectionChanged(option){
        setSelectedOption(option);
        onSourceChanged(option);
    }

    return (
        <Select
            value={selectedOption}
            onChange={onSelectionChanged}
            options={sources}
            className='source-selector'
        />
    )
}

export default SourceSelector;