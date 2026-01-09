const KpiCards = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="h-28 rounded-xl bg-gray-900 border border-gray-800"
        />
      ))}
    </div>
  );
};

export default KpiCards;