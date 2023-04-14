import React from "react";

const LayoutItem = (props) => {
  const { item } = props;
  return (
    <div className="info">
      <h3>Lorem ipsum dolor sit amet</h3>
      <img className="logo-css" src={item.url} alt="" />
      <div className="content-bottom">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
          sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
          accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
          massa in metus bibendum congue. Pellentesque ultrices liquam egestas
          nunc at
        </span>
      </div>
      <div className="span2">
        <span>
          ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
          ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
          porta massa in metus bibendum congue. Pellentesque ultrices vestibulum
          mattis.
        </span>
      </div>
    </div>
  );
};

export default LayoutItem;
