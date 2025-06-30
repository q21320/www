import { useMemo } from 'react';
import { type FreeLayoutProps } from '@flowgram.ai/free-layout-editor';
import { createMinimapPlugin } from '@flowgram.ai/minimap-plugin';

import { initialData } from '@/utils/initial-data' // 初始化数据
import { nodeRegistries } from '@/utils/node-registries' // 节点声明配置
import { BaseNode } from '@/components/base-node' // 节点渲染

export function useEditorProps(
): FreeLayoutProps {
  return useMemo<FreeLayoutProps>(
    () => ({
      /**
       * 初始化数据
       */
      initialData,
      /**
       * 画布节点定义
       */
      nodeRegistries,
      /**
       * 物料
       */
      materials: {
        renderDefaultNode: BaseNode, // 节点渲染组件
      },
      /**
       * 节点引擎, 用于渲染节点表单
       */
      nodeEngine: {
        enable: true,
      },
      /**
       * 画布历史记录, 用于控制 redo/undo
       */
      history: {
        enable: true,
        enableChangeNode: true, // 用于监听节点表单数据变化
      },
      /**
       * 画布初始化回调
       */
      onInit: ctx => {
        // 如果要动态加载数据，可以通过如下方法异步执行
        // ctx.docuemnt.fromJSON(initialData)
      },
      /**
       * 画布第一次渲染完整回调
       */
      onAllLayersRendered: (ctx) => {},
      /**
       * 画布销毁回调
       */
      onDispose: () => { },
      plugins: () => [
        /**
         * 缩略图插件
         */
        createMinimapPlugin({}),
      ],
    }),
    [],
  );
}