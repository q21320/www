import { create } from 'zustand'
import { theme } from 'antd';
const { defaultAlgorithm, darkAlgorithm } = theme;
interface ThemeStore {
  theme: {
    algorithm?: any
  }
  setThemeAlgorithm: () => void
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: {
    token: {
      colorPrimary: '#aa00ff'
    },
    algorithm: darkAlgorithm,
    components: {
      Layout: {
        algorithm: true
      }
    }
  },
  setThemeAlgorithm: () => set((state) => ({
    theme: {
      ...state.theme,
      algorithm: state.theme.algorithm === darkAlgorithm ? defaultAlgorithm : darkAlgorithm
    }
  })),
}))

