import React from 'react'
import Portrait from './Portrait';

const Slider = ({ data }) => {

    const item = data.results[0];
    return (
        <div>
            {/* {data.results.map(item => <Portrait
                href={item.data.main_image.url}
                title={item.title} />
            )} */}

            <Portrait
                href={item.data.main_image.url}
                title={item.title} />
        </div>
    )
}

export default Slider
