import React, { useState } from 'react';
import { Collapse } from 'antd';
import data from "../data/about.json";

const { Panel } = Collapse;

const Accordion = ({ data }) => {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <Collapse>
      {data.map((item, index) => (
        <Panel
          header={<div onClick={() => toggle(index)} className="title">
                    <h2>{item.title}</h2> 
                    <span>{selected === index ? "^" : "+"}</span>
                 </div>}
          key={index}
        >
          <div className={selected === index ? "content show" : "content"}>
            {item.content}
          </div>
        </Panel>
      ))}
    </Collapse>
  );
};

export default Accordion;


