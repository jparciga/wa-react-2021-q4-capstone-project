import React from 'react'
import './CategoryCarousel.scss'

const CategoryCarousel = (props) => {
    const categories = props.categories;
    return (
      <div>
        <div className="option-group">
          <div className="option-container">
            {categories.map((ele, index) => {
              return (
                <input
                  className="option-input"
                  id={"option-" + index}
                  type="radio"
                  name="options"
                />
              );
            })}
            {/*<input
              className="option-input"
              id="option-3"
              type="radio"
              name="options"
            />
            
            <input
              className="option-input"
              id="option-4"
              type="radio"
              name="options"
            />*/}

            {categories.map((ele, index) => {
              return (
                <label className="option" for={"option-"+index}>
                  <span className="option__indicator"></span>
                  <span className="option__label">
                    {ele.data.name}
                  </span>
                </label>
              );
            })}
            {/*<label className="option" for="option-3">
              <span className="option__indicator"></span>
              <span className="option__label">
                10<sub>gb</sub>
              </span>
            </label>

            <label className="option" for="option-4">
              <span className="option__indicator"></span>
              <span className="option__label">
                20<sub>gb</sub>
              </span>
            </label> */}
          </div>
        </div>
      </div>
    );
}

export default CategoryCarousel
