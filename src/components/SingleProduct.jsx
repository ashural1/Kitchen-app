import { useParams } from "react-router-dom";
import { useFatch } from "../hooks/useFatch";

function SingleProduct() {
  let { id } = useParams();
  let { data, error, isPending } = useFatch(
    "https://dummyjson.com/products/" + id
  );
  console.log(data);
  return (
    <>
      {data && (
        <div className=" mx-auto px-16 mt-10">
          <ul className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box ">
            {data.images.map((img) => {
              return (
                <li key={Math.random()} className="carousel-item ">
                  <img
                    src={img}
                    className="rounded-box max-h-60 lg:max-h-96 h-full object-contain"
                  />
                </li>
              );
            })}
          </ul>
          <div className=" mt-5 font-bold flex  flex-col ">
            <h1 className=" text-3xl">Product: {data.title}</h1>
            <h3 className="">category: {data.category}</h3>
            <p>Description: {data.description}</p>
            
          </div>
          <div className="flex items-center gap-5"><p className="  accent-content text-2xl">Price: {data.price}$</p>
            <textarea
              className="textarea w-60  "
              placeholder="comments"
            ></textarea></div>
        </div>
      )}
    </>
  );
}

export default SingleProduct;