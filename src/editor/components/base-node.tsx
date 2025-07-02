import { FlowNodeEntity, useNodeRender, WorkflowNodeRenderer } from '@flowgram.ai/free-layout-editor';

export const BaseNode = (props: { node: FlowNodeEntity; }) => {
  /**
   * 提供节点渲染相关的方法
   */
  const { form } = useNodeRender()
  /**
   * WorkflowNodeRenderer 会添加节点拖拽事件及 端口渲染，如果要深度定制，可以看该组件源代码:
   * https://github.com/bytedance/flowgram.ai/blob/main/packages/client/free-layout-editor/src/components/workflow-node-renderer.tsx
   */
  return (
    <WorkflowNodeRenderer className="demo-free-node" node={props.node}>
      {
        // 表单渲染通过 formMeta 生成
        form?.render()
      }
    </WorkflowNodeRenderer>
  )
};