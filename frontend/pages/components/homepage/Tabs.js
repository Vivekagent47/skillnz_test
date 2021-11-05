import React, { useState } from "react";
import styled from "styled-components";

const Tabs = ({ defaultIndex = 0, onTabClick, children }) => {
  const [bindIndex, setBindIndex] = useState(defaultIndex);
  const changeTab = (newIndex) => {
    if (typeof onTabClick === "function") onTabClick(newIndex);
    setBindIndex(newIndex);
  };
  const items = children.filter((item) => item.type.name === "TabItem");

  return (
    <Wrapper>
      <div className="tab-menu">
        {items.map(({ props: { index, label } }) => (
          <button
            key={`tab-btn-${index}`}
            onClick={() => changeTab(index)}
            className={bindIndex === index ? "focus" : ""}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="tab-view">
        {items.map(({ props }) => (
          <div
            {...props}
            className={`tab-content ${
              bindIndex === props.index ? "selected" : ""
            }`}
            key={`tab-content-${props.index}`}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Tabs;

const Wrapper = styled.div`
  .tab-menu {
    margin-bottom: 1.7rem;
    button {
      cursor: pointer;
      padding: 8px 16px;
      border: 0;
      font-weight: bold;
      font-size: 40px;
      color: #c9cbe2;
      background: none;
      &.focus {
        border-bottom: 3px solid #f26a7e;
        color: #404366;
      }
      @media (max-width: 600px) {
        font-size: 22px;
      }
    }
  }

  .tab-content {
    display: none;
    font-weight: normal;
    font-size: 20px;
    line-height: 32px;
    color: #18191f;
    &.selected {
      display: block;
    }
    @media (max-width: 600px) {
      line-height: 26.5px;
      font-size: 18px;
    }
  }
`;
