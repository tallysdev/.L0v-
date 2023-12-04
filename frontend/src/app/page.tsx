import Image from "next/image";

// const colors = {
//   primary: "#94BBE9",
//   secondary: "#EEAECA",
//   gradient: "linear-gradient(#94BBE9 100%, #EEAECA 100%)",
//   darkBlue: "#1D3557",
//   darkGray: "#474747",
//   lightGray: "#C5C5C5",
//   white: "#FFFFFF",
// };

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-8 md:p-16 lg:p-24 pt-20 md:pt-32 text-white min-h-screen bg-gray-700">
      <header className="lg:text-8xl md:text-6xl sm:text-4xl text-4xl font-bold mb-8">
        Arrasta papai!
      </header>
      <div className="mb-8">
        <button
          className="text-white py-4 px-6 mx-auto max-w-sm h-15 w-60 text-center text-xl md:text-2xl font-bold rounded-full "
          style={{
            background:
              "linear-gradient(to top right, #94BBE9 0%, #EEAECA 100%)",
          }}
        >
          Criar conta
        </button>
      </div>
      <div className="p-4 md:p-8 rounded-md w-full md:w-screen flex items-center justify-center overflow-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {fakeComments.map((comment, index) => (
            <div key={index} className="comment-container">
              <div className=" p-4 rounded-md border-2 border-white h-60 md:h-80 w-full md:w-140 bg-gray-800">
                <p className="text-lg md:text-xl text-left font-bold mb-2 border-b-2 pb-4">
                  {comment.user}
                </p>
                <p className=" text-lg md:text-xl pt-2">{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

// Fake comments data
const fakeComments = [
  { user: "Lucas e Isabela", comment: "This app is amazing!" },
  {
    user: "Gabriel e Laura",
    comment:
      "I just love the subject of Web Development, i think it's the best one of all the university",
  },
  { user: "Mateus e Roberto", comment: "Fabricio is the best teacher ever." },
];
