import Card from "../components/Card";
export default function Favorites({items}) {
    return(
        <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Избранное</h1>
          
        </div>
        <div className="d-flex flex-wrap">
            {items.map((item, index) => (
                <Card
                    key={index}
                    id={item.id}
                    name={item.name} 
                    price={item.price} 
                    imageUrl={item.imageUrl} 
                />
                
            ))}
        </div>
      </div>
    );
}