import { useParams } from "react-router-dom";

const shopsData = {
  flowery: [
    { id: 1, name: "Rose Bouquet", price: 25 },
    { id: 2, name: "Tulip Mix", price: 18 },
    { id: 3, name: "Lily Arrangement", price: 30 },
  ],
  bloomwell: [
    { id: 1, name: "Orchid Delight", price: 40 },
    { id: 2, name: "Sunflower Bunch", price: 20 },
    { id: 3, name: "Daisy Basket", price: 22 },
  ],
  etc1: [
    { id: 1, name: "Carnation Mix", price: 15 },
    { id: 2, name: "Peony Bouquet", price: 35 },
    { id: 3, name: "Violet Pot", price: 12 },
  ],
  etc2: [
    { id: 1, name: "Mixed Roses", price: 28 },
    { id: 2, name: "Hydrangea Set", price: 38 },
  ],
  etc3: [
    { id: 1, name: "Gerbera Collection", price: 19 },
    { id: 2, name: "Lilac Bouquet", price: 23 },
  ],
};

export default function ShopPage() {
  const { shopId } = useParams();
  const items = shopsData[shopId] || [];

  return (
    <div>
      <div>
        <h2>{shopId} shop</h2>
        {items.length > 0 ? (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <p>Name: {item.name}</p>
                <p>Price: {item.price}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items found</p>
        )}
      </div>
    </div>
  );
}

