import './app.css'
import Dash from './Dash'
import TopBar from './TopBar'

export function App() {

  return (
    <>
      <TopBar />
      <div className="app-content">App</div>
      <Dash />
    </>
  )
}
