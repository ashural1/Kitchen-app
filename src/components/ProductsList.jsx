import { Link } from "react-router-dom";

function ProductsList({ data }) {
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb:grid-cols-2 maw-w-5xl mx-auto px-8">
      {data &&
        data.products.map((texnika) => {
          return (
            <li className="card  bg-base-100 shadow-xl " key={texnika.id}>
              {
                <>
                  <figure>
                    <img
                      src={texnika.thumbnail}
                      alt="Shoes"
                      className=" w-full h-52 object-cover"
                    />
                  </figure>
                  <div className="card-body ">
                    <h2 className="card-title">
                      {texnika.title}
                   
                    </h2>
                    <p className=" line-clamp-3">{texnika.description}</p>
                    <ul className=" ">
                    <li className=" p-5"><b>category:</b>{texnika.category}</li>
                      <li className=" p-5"><b>Price:</b> {texnika.price}$</li>
                      <li className=" p-5"><b>Rating:</b>{texnika.rating}</li>
                    </ul>
                    <div className="flex items-center">
                      <p className="  p-5">
                        <b>Sale</b>:{texnika.discountPercentage}%
                      </p>
                      <Link
                        to={`/product/${texnika.id}`}
                        className="btn btn-primary mt-5"
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </>
              }
            </li>
          );
        })}
    </ul>
  );
}

export default ProductsList;