import { Box, Container, Text } from 'gestalt'
import React from 'react'

const App: React.FC = () => (
  <Box color='shopping' padding={3} rounding='pill'>
    <Container>
      <Text color='light'>
        Hello world!
      </Text>
    </Container>
  </Box>
)

export default App
