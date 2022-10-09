import { Button, PageHeader } from 'gestalt'
import React from 'react'

const AppHeader: React.FC = () => (
  <PageHeader
    title='Topsters Beta'
    primaryAction={{
      component: <Button color='red' size='lg' text='Export' />
    }}
    secondaryAction={{
      component: <Button color='gray' size='lg' text='Share' />
    }}
  />
)

export default AppHeader
