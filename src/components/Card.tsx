import ErrorFace from "./ErrorFace";
interface CardComponentProps {
  title: string ,
  picture?: string,
  price: number,
  key: number,
}

function Card({title, picture, price}: CardComponentProps) {
  return (
    <div className="card" style={{ width: "400px" }}>
      <div className="card-img-top p-3">
        <ErrorFace></ErrorFace>
      </div>
      {/* <img src="..." className="card-img-top" alt="..."> */}
      <div class="card-header"></div>
        <div className="card-body">
          <h5 className="fs-1 text-dark">{title}</h5>
          <div className = "card-body">
<p className="card-text"><b className="fs-3 text-secondary">{price.toLocaleString("ru-Ru")}</b> Рублей</p>
          </div>
        </div>
    </div>
  )
}

export default Card;
