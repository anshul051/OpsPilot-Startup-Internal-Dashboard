const BestSellingTable = () => {
  const bestSellingProducts = [
    {
      id: 1,
      name: "Nike Air Max Shoe",
      brand: "Nike",
      quantity: 1250,
      price: "$95.00",
      earning: "$118,750",
    },
    {
      id: 2,
      name: "MacBook Pro",
      brand: "Apple",
      quantity: 1850,
      price: "$27.00",
      earning: "$49,950",
    },
    {
      id: 3,
      name: "Nike Air Jordan",
      brand: "Nike",
      quantity: 40,
      price: "$34.00",
      earning: "$1,360",
    },
    {
      id: 4,
      name: "Amazon Echo",
      brand: "Amazon",
      quantity: 95,
      price: "$85.00",
      earning: "$8,075",
    },
    {
      id: 5,
      name: "iPhone 16 Pro Max",
      brand: "Apple",
      quantity: 80,
      price: "$36.00",
      earning: "$2,880",
    },
    {
      id: 6,
      name: "iPhone 15 Pro Max",
      brand: "Apple",
      quantity: 80,
      price: "$36.00",
      earning: "$2,880",
    },
    {
      id: 7,
      name: "Samsung Galaxy S24",
      brand: "Samsung",
      quantity: 120,
      price: "$42.00",
      earning: "$5,040",
    },
    {
      id: 8,
      name: "Sony WH-1000XM5",
      brand: "Sony",
      quantity: 60,
      price: "$320.00",
      earning: "$19,200",
    },
    {
      id: 9,
      name: "Adidas Ultraboost",
      brand: "Adidas",
      quantity: 310,
      price: "$180.00",
      earning: "$55,800",
    },
    {
      id: 10,
      name: "Dell XPS 13",
      brand: "Dell",
      quantity: 45,
      price: "$999.00",
      earning: "$44,955",
    },
  ];

  return (
    <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden flex flex-col">
      <h2 className="text-white text-lg font-semibold px-6 py-4">
        Best Selling Products
      </h2>

      {/* Table Header */}
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] px-6 py-3 bg-gray-800 text-sm text-gray-300">
        <span>Product Name</span>
        <span>Brand</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Earning</span>
      </div>

      {/* Scrollable Table Body */}
      <div className="max-h-64 overflow-y-auto hide-scrollbar divide-y divide-gray-800">
        {bestSellingProducts.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] px-6 py-3 text-sm text-gray-400 hover:bg-gray-800 transition-colors"
          >
            <span>{product.name}</span>
            <span>{product.brand}</span>
            <span>{product.quantity}</span>
            <span>{product.price}</span>
            <span>{product.earning}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellingTable;
