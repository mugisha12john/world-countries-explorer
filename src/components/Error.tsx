export default function Error({ error }) {
  return (
    <div className="min-h-[calc(70vh-80px)] w-full flex justify-center items-center p-4">
      <div className="w-80 h-50 dark:bg-dark-element bg-pure-white text-light-text dark:text-pure-white shadow-2xl rounded-lg flex justify-center items-center text-center p-6">
        <p className="font-semibold text-base ">Error: {error}</p>
      </div>
    </div>
  );
}
