//Landing page, contains a welcome message and login/signup box
export default function Home() {
  return (
    <div className="pt-25 h-[90vh] flex flex-col gap-25 content backdrop">
      <h1 className="text-center text-7xl text-white text-outline-2">Welcome to the blog site for everything and anything!</h1>

      <div className="basis-1/2 flex flex-col justify-evenly border-10 border-double rounded-3xl m-25 place-items-center bg-gray-500/30">
        <div className="w-full flex justify-evenly">
          <h1 className="text-4xl text-start basis-1/2">Not a Member? Well You should be!</h1>
          <button className="place-self-center py-2 px-10 text-3xl bg-purple-400 hover:bg-purple-600 active:bg-purple-800 rounded-full">Sign up here</button>
        </div>
        <div className="w-full flex justify-evenly place-contnet-center">
          <h1 className="text-4xl text-start basis-1/2">Already a Member? Thanks for coming back!</h1>
          <button className="place-self-center py-2 px-10 text-3xl bg-fuchsia-300 hover:bg-fuchsia-600 active:bg-fuchsia-800 rounded-full">Log in here</button>
        </div>
      </div>
    </div>
  );
}
