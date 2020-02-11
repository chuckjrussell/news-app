import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import './SourceSelector.css';

const SourceSelector = () => {
    const [sources, setSources] = React.useState([]);
    const [selectedOption, setSelectedOption] = React.useState(null);

    React.useEffect(() => {
        axios.get('https://newsapi.org/v2/sources', {
            params: {
                apiKey: '96e7efbae84544aca2e40f5834bf2777'
            }
          }).then(res => {
              var sources = res.data.sources.map(s => { return {
                value: s.id, 
                label: s.name
            }});
            sources = [ {id: 'all', label: 'All Sources'}, ...sources];
            setSources(sources);
            setSelectedOption(sources[0]);
        })
    }, [setSources, setSelectedOption]);

    return (
        <Select
            value={selectedOption}
            onChange={o => setSelectedOption(o)}
            options={sources}
            className='source-selector'
        />
    )
}

export default SourceSelector;