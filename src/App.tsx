import "./App.css";

function App() {
  const courses = [
    {
      title: "System Administration and IT Infrastructure Services",
    },
    {
      title: "Operating Systems Becoming a Power User",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
    },
    {
      title: "Technical Support Fundamentals",
    },
    {
      title: "How to Succeed at: Writing Applications",
    },
    {
      title: "Medicine Administration for Carers",
    },
  ];

  return (
    <>
      <div className="p-6 grid grid-cols-1 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="shadow rounded-lg overflow-hidden">
            {/* Image */}
            <img
              src="https://www.placehold.co/200x400"
              alt={course.title}
              className="w-full h-80 object-cover"
            />

             <div className="p-4 bg-red-100">
              <h3 className="text-lg font-semibold mb-4">{course.title}</h3>
             							<div className="bg-red-50 p-2 rounded-lg">
                <div className="text-sm text-gray-500 mt-2">
                  <span>👥 123 users</span>
                  <span>⏱ 60</span>
                </div>

                {/* Author */}
                <div className="mt-3 gap-2">
                  <img
                    src="https://www.placehold.co/50x50"
                    alt="Author's Avatar"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">Author's Name</p>
                    <p className="text-xs text-gray-500">Designer</p>
                  </div>
                </div>
              </div>
              
                            {/* Footer */}
              <div className="mt-4">
                <div className="bg-white py-2 px-4 rounded">$123</div>
                <button className="bg-red-700 text-white px-4 py-10 rounded text-sm">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
