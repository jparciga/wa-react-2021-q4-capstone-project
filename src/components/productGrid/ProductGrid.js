import React from 'react'
import './ProductGrid.scss'
const ProductGrid = (props) => {
    const products = props.products;
    const categories = props.categories;
    return (
      <div>
        <div className="container page-wrapper">
          <div className="page-inner">
              {
                  products.map((ele,index)=>{
                      return (
                        <div style={{ display: "inline-block" }} key={index}>
                          <div className="el-wrapper">
                            <div className="box-up">
                              <img
                                className="img"
                                src={ele.data.mainimage.url}
                                alt=""
                              />
                              <div className="img-info">
                                <div className="info-inner">
                                  <span className="p-name">
                                    {ele.data.name}
                                  </span>
                                  <span className="p-company">
                                    {categories.find(
                                      (cat) => cat.id === ele.data.category.id
                                    ).data.name}
                                  </span>
                                </div>
                                <div className="a-size">
                                  Available :{" "}
                                  <span className="size">{ele.data.stock}</span>
                                </div>
                              </div>
                            </div>

                            <div className="box-down">
                              <div className="h-bg">
                                <div className="h-bg-inner"></div>
                              </div>

                              <span className="cart" >
                                <span className="price">${ele.data.price}</span>
                                <span className="add-to-cart">
                                  <span className="txt">Add in cart</span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                  })
              }
          </div>
        </div>
      </div>
    );
}

export default ProductGrid
