import { Box, ColorSchemeProvider, Container } from 'gestalt'
import React, { useState } from 'react'
import AppHeader from './components/AppHeader';
import ChartCanvas from './components/ChartCanvas';
import useWindowDimensions from './hooks/useWindowDimensions';

const App: React.FC = () => {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark' | 'userPreference'>('light');

  const dimensions = useWindowDimensions()

  return (
    <ColorSchemeProvider colorScheme={colorScheme}>
      <AppHeader />
      <Container>
        <Box
          borderStyle='raisedBottomShadow'
          rounding={2}
        >
          <ChartCanvas
            height={window.innerHeight - 100}
            width={Math.min(dimensions.width, 800)}
          />
        </Box>
      </Container>
    </ColorSchemeProvider>
)}

export default App
