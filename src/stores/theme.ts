import { create } from 'zustand'
import { theme } from 'antd';
const { defaultAlgorithm, darkAlgorithm } = theme;
interface ThemeStore {
  themeStr: string;
  theme: {
    algorithm?: any
  }
  setThemeAlgorithm: () => void
}

export const useThemeStore = create<ThemeStore>((set) => ({
  themeStr: 'light',
  theme: {
    token: {
      colorPrimary: '#aa00ff'
    },
    algorithm: defaultAlgorithm,
    components: {
      Layout: {
        algorithm: true
      }
    }
  },
  setThemeAlgorithm: () => set((state) => ({
    themeStr: state.themeStr === 'light' ? 'dark' : 'light',
    theme: {
      ...state.theme,
      algorithm: state.theme.algorithm === darkAlgorithm ? defaultAlgorithm : darkAlgorithm
    }
  })),
}))

