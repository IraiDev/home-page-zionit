import AppProvider from './context/AppContext'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}

export default App
