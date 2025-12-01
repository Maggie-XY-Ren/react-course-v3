import reviews from './data'
import { useEffect, useState } from 'react';
import { FaBeer } from 'react-icons/fa';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const App = () => {
  console.log('reviews', reviews.length);
  const [currentIndex, setCurrentIndex] = useState(0);

  const  { name, job, image, text } = reviews[currentIndex];

  const choosePerson = (n) => {
    setCurrentIndex(n)
  }

  const previous = () => {
    setCurrentIndex((currentIndex)=>{
      let newIndex = currentIndex - 1;
      if (newIndex < 0) newIndex = reviews.length - 1;
      return newIndex
    })
  }

  const next = ()=>{
    setCurrentIndex((currentIndex)=>{
      let newIndex = currentIndex + 1;
      if (newIndex > reviews.length - 1) newIndex = 0;
      return newIndex
    })
  }

  const randomIndex = () => {
    let n = Math.floor(Math.random() * reviews.length);
    setCurrentIndex(n)
  }

  useEffect(() => {
    randomIndex()
  },[])

  console.log('currentIndex', currentIndex)

  return (
  <main>
    <div className='review'> 
      <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
      </div>
      <div className='title'>{name}</div>
      <div className="job">{job}</div>
      <div className="info">{text}</div>
      <button onClick={previous} type='button' className="prev-btn prev-btn:hover">
        <FaChevronLeft />
      </button>
      <button onClick={next}  type='button' className="next-btn next-btn:hover">
        <FaChevronRight />
      </button>
      <div>
      <button onClick={randomIndex} type='button' className="btn btn-bover">Surprise Me</button>
      </div>
    </div>
  </main>
  );
};
export default App;
