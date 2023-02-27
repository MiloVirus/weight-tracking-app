import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import UserPanel from './components/UserPanel';
import { Flex, Box } from '@chakra-ui/react';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <>
    <AppRouter/>
    </>
  );
}

export default App;
