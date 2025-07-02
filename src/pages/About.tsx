import { Card } from "antd";
import AppEditor from '@/editor';

export default function About() {

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Card style={{ width: '100%', height: '100%' }}>
        <AppEditor />
      </Card>
    </div>
  );
};
