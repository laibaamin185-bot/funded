export default function AboutPage(){
  return(
    <main className="min-h-screen bg-mauve-600 flex items-center justify-center">
    <div className="grid gap-4 justify-items-center w-full">
    <h1 className="text-slate-900 text-3xl font-bold ">Login Admin</h1>
    <input type="text" placeholder="Email" className="w-full rounded sm:w-23 md:w-32 lg:w-48 border border-mauvve-400"/>
    <input type="text" placeholder="Password"className="w-full rounded sm:w-23 md:w-32 lg:w-48 border border-mauve-400"/> 
      <button className="bg-mauve-400 p-3 font-semibold text-slate-900"> LogIn</button>
    </div>
    </main>
  );
}