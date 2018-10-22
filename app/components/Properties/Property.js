import React from 'react';
import CurrencyFormat from 'react-currency-format';

const Property = props => (
  <li className={`row py-2 property-row ` + props.activate} tabIndex={props.tabIndex}>
    <div className={`property-image col-lg-3 col-md-5`}>
      <img src={props.image_url} />
    </div>
    <div className={`property-details col-lg-6 col-md-7`}>
      <h4>{props.num_bedrooms} bed {props.property_type} for sale</h4>
      <h2><CurrencyFormat value={props.price} thousandSeparator={true} displayType={'text'} prefix={'£'}/></h2>
      <p className={`property-copy`}>{props.description}</p>
    </div>
    <div className={`property-agent col-lg-3 card p-3 col-md-12`}>
      <div className={`agent-logo`}><img src={props.agent_logo} /></div>
      <div className={`agent-info`}>
        <ul>
          <li>{props.agent_name}</li>
          <li>{props.agent_address}</li>
          <li>{props.agent_postcode}</li>
          <li>{props.agent_phone}</li>
        </ul>
      </div>
    </div>
  </li>
);

export default Property;
