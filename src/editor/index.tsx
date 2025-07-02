import { EditorRenderer, FreeLayoutEditorProvider } from '@flowgram.ai/free-layout-editor';
import { useEditorProps } from './hooks/use-editor-props';
import { Tools } from './components/tools';
import { Minimap } from './components/minimap';
import '@flowgram.ai/free-layout-editor/index.css';
import './index.css';
import { useThemeStore } from '@/stores/theme';

export default function AppEditor() {
  const editorProps = useEditorProps();
  const themeStr = useThemeStore((state) => state.themeStr);

  return (
    <FreeLayoutEditorProvider {...editorProps}>
      <div className="demo-free-container">
        <div className="demo-free-layout">
          <EditorRenderer className="demo-free-editor" />
        </div>
        <Tools />
        <Minimap />
      </div>
    </FreeLayoutEditorProvider>
  );
};
