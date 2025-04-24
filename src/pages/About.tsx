export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">About Us</h1>
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to AeroDrive Pvt. Ltd, your premier destination for luxury and reliable car rentals in the Greater Toronto Area. Since our establishment in 2015, we have grown from a small fleet of five vehicles to become one of Toronto's most trusted car rental services, now offering over 50 premium vehicles to choose from.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Fleet</h2>
            <p className="text-gray-600 leading-relaxed">
              Our diverse fleet ranges from fuel-efficient compact cars to luxurious executive sedans and SUVs. Each vehicle in our collection is meticulously maintained and undergoes rigorous safety inspections every 5,000 kilometers. We partner with authorized dealerships to ensure all maintenance follows manufacturer specifications, guaranteeing you a safe and reliable driving experience.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Location & Accessibility</h2>
            <p className="text-gray-600 leading-relaxed">
              Strategically located in the heart of downtown Toronto at 123 Bay Street, we're just minutes away from Union Station and easily accessible from both Toronto Pearson International Airport and Billy Bishop Toronto City Airport. Our convenient location makes it simple for both business travelers and tourists to access our services.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}