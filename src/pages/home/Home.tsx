import BarChart from '../../components/barChart/BarChartBox'
import ChartBox from '../../components/chartBox/ChartBox'
import TopBox from '../../components/topBox/TopBox'
import { chartBoxUser, chartBoxProduct, chartBoxRevenue, chartBoxConversion, barChartBoxRevenue } from '../../constants/data'
import './home.scss'

const Home = () => {
  return (
    <div className="home">
       <div className="box box1"><TopBox /></div>
       <div className="box box2"><ChartBox {...chartBoxUser} /></div>
       <div className="box box3"><ChartBox {...chartBoxProduct} /></div>
       <div className="box box4">box4</div>
       <div className="box box5"><ChartBox {...chartBoxRevenue} /></div>
       <div className="box box6"><ChartBox {...chartBoxConversion} /></div>
       <div className="box box7">box7</div>
       <div className="box box8"><BarChart {...chartBoxConversion}/></div>
       <div className="box box9"><BarChart {...barChartBoxRevenue}/></div>
    </div>
  )
}

export default Home
