import '../styles/App.css'
import Banner from './Banner'
import Cart from "./Cart"
import ObjectCard from './ObjectCard'

function App() {
    return <div>
            <Banner />
            <div className='main'>
              <div className='side'>
                <Cart />
              </div>
              <ObjectCard />
            </div>
          </div>
}

export default App
