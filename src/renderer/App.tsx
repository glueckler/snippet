import { ConfigProvider, theme } from 'antd';
import { StoreProvider } from 'easy-peasy';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store';
import './App.css';
import './BorderAnimation.css';
import Homescreen from './HomeScreen/Homescreen';
import { useColorScheme, useTheme } from './hooks';
import Preferences from './PreferencesScreen/Preferences';
import ToastComponent from './ToastComponent';

const { defaultAlgorithm, darkAlgorithm } = theme;

export default function App() {
  const mode = useColorScheme();
  const appTheme = useTheme();

  return (
    <StoreProvider store={store}>
      <ConfigProvider
        theme={{
          algorithm: mode === 'dark' ? darkAlgorithm : defaultAlgorithm,
          ...appTheme,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Homescreen />} />
            <Route path="/preferences" element={<Preferences />} />
          </Routes>
        </Router>
        <ToastComponent />
      </ConfigProvider>
    </StoreProvider>
  );
}
