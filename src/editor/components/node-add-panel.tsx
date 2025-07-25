import React from 'react';

import { WorkflowDragService, useService } from '@flowgram.ai/free-layout-editor';

const cardkeys = ['Node1', 'Node2', 'Condition'];

export const NodeAddPanel: React.FC = (_props) => {
  const startDragSerivce = useService<WorkflowDragService>(WorkflowDragService);

  return (
    <div className="demo-free-sidebar">
      {cardkeys.map((nodeType) => (
        <div
          key={nodeType}
          className="demo-free-card"
          onMouseDown={(e) =>
            startDragSerivce.startDragCard(nodeType.toLowerCase(), e, {
              data: {
                title: `New ${nodeType}`,
                content: 'xxxx',
              },
            })
          }
        >
          {nodeType}
        </div>
      ))}
    </div>
  );
};
