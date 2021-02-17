import React, { memo } from 'react';

import { Handle } from 'react-flow-renderer';

export default memo(({ data }) => {
  console.log('Handles are toggled: ', data.toggle);
  return (
    <>
      <Handle
        type="target"
        position="left"
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
      <div>
        Custom Color Picker Node: <strong>{data.color}</strong>
      </div>
      <input className="nodrag" type="color" onChange={data.onChange} defaultValue={data.color} />
      {data.toggle ? (
        <>
          <Handle type="source" position="right" id="a" style={{ top: 10, background: '#333' }} />
          <Handle type="source" position="right" id="b" style={{ bottom: 10, top: 'auto', background: '#666' }} />
        </>
      ) : (
        <>
          <Handle type="source" position="right" id="b" style={{ top: 10, background: '#666' }} />
          <Handle type="source" position="right" id="a" style={{ bottom: 10, top: 'auto', background: '#333' }} />
        </>
      )}
    </>
  );
});
