import "./App.css";

function App() {
  const courses = [
    { title: "System Administration and IT Infrastructure Services" },
    { title: "Operating Systems Becoming a Power User" },
    { title: "The Bits and Bytes of Computer Networking" },
    { title: "Technical Support Fundamentals" },
    { title: "How to Succeed at: Writing Applications" },
    { title: "Medicine Administration for Carers" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow"
          >
            {/* Image placeholder 300x200 */}
            <div className="bg-gray-200 h-52 flex items-center justify-center text-gray-500 text-3xl font-medium select-none">
              300 × 200
            </div>

            {/* Content */}
            <div className="bg-rose-50 p-4 flex-1 flex flex-col">
              <h3 className="text-base sm:text-lg font-semibold leading-snug">
                {course.title}
              </h3>

              {/* Info card */}
              <div className="mt-4 rounded-lg p-3 bg-white/70 ring-1 ring-rose-100">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-2">👥 123 users</span>
                  <span className="flex items-center gap-2">⏱ 60 min</span>
                </div>

                {/* Author */}
                <div className="mt-3 flex items-center gap-3">
                  <img
                    src="https://www.placehold.co/50x50"
                    alt="Author avatar"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">Author's Name</p>
                    <p className="text-xs text-gray-500">Designer</p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-4 flex items-center justify-between">
                <div className="bg-white py-2 px-3 rounded shadow-sm font-medium">
                  $123
                </div>
                <button className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-4 py-2 rounded text-sm">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
