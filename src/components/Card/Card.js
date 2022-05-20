export const Card = ({cardTitle, cardBody})=>{

  return (
    
    <div className="card">
    <div className="card-title">
      <h4>{cardTitle}</h4>
    </div>
    <div className="card-body">
      {cardBody}
    </div>
  </div>
  )
}