import { useParams } from "react-router-dom";

export default function ShopPage() {
  const { shopId } = useParams();

  // Тут можна буде підтягувати дані з API або масиву
  return (
    <div>
      <h2>Products from {shopId}</h2>
      <div>
        {/* Приклад карток */}
        <div>🌸 Product 1</div>
        <div>🌸 Product 2</div>
        <div>🌸 Product 3</div>
      </div>
    </div>
  );
}