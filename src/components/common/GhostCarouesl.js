import {useState} from 'react'

const GhostCarousel = () => {
 const [data,setData] = useState([
  { id: 0, title: "1" , class:'active' },
  { id: 1, title: "2" , class:'right'},
  { id: 2, title: "3" , class:'right'},
  { id: 3, title: "4" , class:'right'},
 ])

  const [currentActiveCard,setCurrentActiveCard] = useState(0)

  const next = () => {
    let temp = [...data]

    console.log(currentActiveCard)
    setCurrentActiveCard(currentActiveCard + 1)

    if (currentActiveCard + 1 > data.length - 1) {
      setCurrentActiveCard(data.length - 1)
    }else{
      temp[currentActiveCard].class = 'left'
      temp[currentActiveCard + 1].class = 'active'
      setData(temp)
    }
  }

  const pre = () => {
    let temp = [...data]

    console.log(currentActiveCard)
    setCurrentActiveCard(currentActiveCard - 1)

    if (currentActiveCard -1 < 0) {
      setCurrentActiveCard(0)
    }else{
      temp[currentActiveCard].class = 'right'
      temp[currentActiveCard - 1].class = 'active'
      setData(temp)
    }
  }
  return (
 
      <div className="ghost-carousel">
        <div id="cards-container" className="cards">
          {data.map((el) => (
            <div key={el.id} className={`card ${el.class}`}>
              <div className="inner-card">
                <div className="inner-card-front">
                  <p>{el.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="navigation">
          <button onClick={()=> pre()} id="prev" className="nav-button">
            prev{" "}
          </button>

          <p id="current"></p>

          <button onClick={()=> next()}  id="next" className="nav-button">
            next{" "}
          </button>
        </div>
      </div>
   );
};



export default GhostCarousel;