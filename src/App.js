import './App.css';
import gold from './gold.avif'

function App() {
  return (
    <div className="container">
      <div className='parent'>
        <div className='left-parent'>
          <img src={gold} />
        </div>
        <div className='right-parent'>
          <div className='top-parent'>
            <div className='spot-box'>
              <div className='spot-rate'>
                <p>Spot-Rates</p>
                <p className='dollar'>$</p>
                <p> BID<sub>OZ </sub></p>
                <p className='dollar'>$</p>
                <p> ASK<sub>OZ</sub></p>
              </div>
              <div className='GOLD'>
                <p>GOLD</p>
                <div className='r-box'><p>1800.13</p></div>
                <div className='b-box'><p>1800.13</p></div>
              </div>
              <div className='g-low'>
                <p className='low1'>Low</p>
                <p className='l1'>1813.06</p>
                <p className='high1'>High</p>
                <p className='l1'>1813.06</p>
              </div>
              <div className='b-line'>

              </div>
              <div className='silver'>
                <p className='sp'>SILVER</p>
                <div className='rd-box'><p>1800.13</p></div>
                <div className='bl-box'><p>1800.13</p></div>
              </div>
              <div className='s-low'>
                <p className='low1'>Low</p>
                <p className='l1'>1813.06</p>
                <p className='high1'>High</p>
                <p className='l1'>1813.06</p>
              </div>

            </div>
            <div className='date'>
              <div className='time'>
                <p className='p1'> 11.24 AM <br /></p>
                <p className='p2'>Monday <br /></p>
                <p className='p3'>10 AUG 2022</p>
              </div>
            </div>
          </div>
          <div className='bottom-parent'>
            <div className='heading'>
              <div className='commodity'>Commodity</div>
              <div className='commodity'>Weight</div>
              <div className='commodity'>Buy<sub>AED</sub></div>
              <div className='commodity'>Sell<sub>AED</sub></div>
            </div>
            <div className='gold-box'>
              <p>GOLD<sub>9999</sub></p>
              <p>1KG</p>
              <p>217.04</p>
              <p>217.04</p>
            </div>
            <div className='gold-box'>
              <p className='p11'>GOLD<sub>TEN TOLA</sub></p>
              <p className='p12'>TTB</p>
              <p className='p13'>217.04</p>
              <p>217.04</p>
            </div>
            <div className='gold-box'>
              <p>GOLD<sub>995</sub></p>
              <p>1KG</p>
              <p>217.04</p>
              <p>217.04</p>
            </div>
            <div className='gold-box'>
              <p>GOLD<sub>9999</sub></p>
              <p>1KG</p>
              <p>217.04</p>
              <p>217.04</p>
            </div>
          </div>


        </div>
      </div>

      <div className='sub-parent'>
        <div className='descrption'>
          <p> Know the latest Gold News, Gold rate, Gold price in India, Go Know the latest Gold News, Gold rate, Gold  Price
          </p>
        </div>
        <div className='main-bottom'>
          <div className='bottom'>
            <div className='rect1'></div>
            <div className='rect2'>
              <div className='b-s'>
                <p>BUYERS</p>
                <p className='p22'>-0.270%</p>
                <p>SELLERS</p>
              </div>
              <div className='line'>
                <div className='left-line'></div>
                <div className='right-line'></div>
              </div>
              <div className='percentage'>
                <div className='left-p'>62%</div>
                <div className='right-p'>38%</div>
              </div>
            </div>
          </div>
          <div className='rect3'>
            <div className='b-rect'>
              <div className='dxy'>
                <p className='d-box'>DXY</p>
                <p>US</p>
                <p>OPEN</p>
              </div>
              <div className='nmbr'>
                <p>102.29</p>
                <p className='nmbr-p'>0.01</p>
                <p className='nmbr-p2'>0.01%</p>
              </div>
              <div className='last-update'>
                <p>Last Updates: Jan 31, 2023 at 2:16 a.m EST</p>
              </div>

            </div>


            <div className='s-rect'>
              <p>PREVIOUS <br />
                CLOSE</p>
              <p style={{ fontSize: 15 }}>102.28</p>
            </div>
          </div>

        </div>
      </div>


    </div>
  );
}

export default App;
