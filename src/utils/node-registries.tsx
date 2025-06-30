import { WorkflowNodeRegistry, ValidateTrigger } from '@flowgram.ai/free-layout-editor';

/**
 * You can customize your own node registry
 * 你可以自定义节点的注册器
 */
export const nodeRegistries: WorkflowNodeRegistry[] = [
  {
    type: 'start',
    meta: {
      isStart: true, // 标记为开始节点
      deleteDisable: true, // 开始节点不能删除
      copyDisable: true, // 开始节点不能复制
      defaultPorts: [{ type: 'output' }], // 用于定义节点的输入和输出端口, 开始节点只有输出端口
      // useDynamicPort: true, // 用于动态端口，会寻找 data-port-id 和 data-port-type 属性的 dom 作为端口
    },
    /**
     * 配置节点表单的校验及渲染,
     * 注：validate 采用数据和渲染分离，保证节点即使不渲染也能对数据做校验
     */
    formMeta: {
      validateTrigger: ValidateTrigger.onChange,
      validate: {
        title: ({ value }) => (value ? undefined : 'Title is required'),
      },
      /**
       * Render form
       */
      render: () => (
       <>
          <Field name="title">
            {({ field }) => <div className="demo-free-node-title">{field.value}</div>}
          </Field>
          <Field name="content">
            {({ field }) => <input onChange={field.onChange} value={field.value}/>}
          </Field>
        </>
      )
    },
  },
  {
    type: 'end',
    meta: {
      deleteDisable: true,
      copyDisable: true,
      defaultPorts: [{ type: 'input' }],
    },
    formMeta: {
      // ...
    }
  },
  {
    type: 'custom',
    meta: {
    },
    formMeta: {
      // ...
    },
    defaultPorts: [{ type: 'output' }, { type: 'input' }], // 普通节点有两个端口
  },
];