import { memo, useState } from 'react';
import { Handle, Position, NodeToolbar } from 'reactflow';

const InfoNodeTop = ({ data }) => {
    const [isVisible, setVisible] = useState(false);
  
    const linkStyle = {
      color: "rgb(42, 32, 97)",
      textDecoration: 'none',
    };
  
    // Render component
    return (
      <div onMouseEnter={() => setVisible(true)} onMouseLeave={() => setTimeout(() => setVisible(false), 500)}>
          {(() => {
            // Display NodeToolbar with description if available
            if (data.description) {
              return (
                <NodeToolbar
                  isVisible={isVisible}
                  position={Position.Bottom}
                  style={{
                    maxWidth: 200,
                    backgroundColor: "white",
                    padding: "1.5em",
                    boxShadow: "0 0 3px 2px #cec7c759",
                  }}
                >
                {data.description}
                <br/>
                {data.link ? <a href={data.link} target="_blank" rel="noopener noreferrer" style={linkStyle}>Full documentation</a>  : null}
              </NodeToolbar>
              );
            }
          })()}
        <div style={{display: "block"}}>
          { data.shortDescription ? 
            <div style={{maxWidth: "100px"}}>
              { data.shortDescription ? <div style={{fontSize: "10px", marginLeft: "0px"}}>{data.shortDescription}</div> : null}
            </div> : null}
            <div style={{}}>
              { data.link ? <div style={linkStyle}>{data.label}</div> : data.label}
            </div>
        </div> 
        <Handle type="source" position={Position.Left} id="left" />
        <Handle type="source" position={Position.Right} id="right" />
        <Handle type="source" position={Position.Top} id="top"/>
        <Handle type="target" position={Position.Bottom} id="bottom" />
      </div>
    );
  };


export default memo(InfoNodeTop)
  