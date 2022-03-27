import React from "react";
import { Select } from 'antd';
import ArrowIcon from "../../../../assets/icons/ArrowIcon";
import './style.scss';

const { Option } = Select;

const SelectOp = () =>
  <div className="SelectOp">
    <div className="arrowIcon">
      <ArrowIcon />
    </div>
    <Select defaultValue="חוטיב תרבח" className="selectOp" >
      <Option value="jack">Jack</Option>
      <Option value="lucy">חוטיב תרבח</Option>
      <Option value="disabled">
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
  </div>

export default SelectOp;