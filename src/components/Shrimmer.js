const Shrimmer= ()=>{
    return (
        <div className="shimmer-container">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="shimmer-card">
              <div className="shimmer-img"></div>
              <div className="shimmer-line-1"></div>
              <div className="shimmer-line-2"></div>
              <div className="shimmer-line-3"></div>
            </div>
          ))}
        </div>
      )
   
    
}

export default Shrimmer;