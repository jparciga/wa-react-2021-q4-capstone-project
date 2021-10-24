import React, { useState, useEffect } from 'react'
import Portrait from './Portrait';

const Slider = ({ data }) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCounter((counter) => {
                if (counter >= data.results.length - 1) {
                    setCounter(0);
                } else {
                    setCounter(counter + 1)
                }
            });
        }, 1500);
        return () => {
            clearInterval(id);
        };
    }, []);

    return (
        <div>
            {data.results.map((item, idx) => <Portrait
                key={idx}
                href={item.data.main_image.url}
                title={item.data.title}
                isActive={idx === counter} />
            )}
        </div>
    )
}

export default Slider
