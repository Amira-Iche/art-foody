import React from 'react'

const Following = () => {
  return (

    <div>
        <div className=" mt-4 items-center justify-center flex">
        
        <card className=" text-gray-500 w-96 ">
            
            <header className="font-bold text-2xl px-5 py-4">
            Who to follow
            </header>
      {/* //// followers list */}
            <main className=" bg-slate-100  px-5 mb-4 border-2 border-slate-200 rounded-lg p-2">
            
            <content className="grid grid-cols-6">
                
                <div className="">
                <img src="https://picsum.photos/200/200" className=" h-10 w-10 rounded-full" />
                </div>
                
                <div className="col-span-3 px-3 font-semibold flex flex-col"> 
                <div className=""> Sandy Budiman </div>
                <div className="text-sm text-gray-400 font-light"> @sandyversion </div>
                </div>
                
                <div className="col-span-2 py-2 justify-self-end">
                <button className="bg-gray-200 text-gray-900 font-bold text-md rounded-full py-1 px-4"
                onClick={() => {alert("Working on it")}}
                >
                    Follow
                </button>
                </div>
                
            </content>
            
            
            </main>
            
            <main className=" bg-slate-100 px-5 mb-4 border-2 border-slate-200 rounded-lg p-2">
            
            <content className="grid grid-cols-6">
                
                <div className="">
                <img src="https://picsum.photos/200/200" className="h-10 w-10 rounded-full" />
                </div>
                
                <div className="col-span-3 px-3 font-semibold flex flex-col"> 
                <div className=""> Sandy Budiman </div>
                <div className="text-sm text-gray-400 font-light"> @sandyversion </div>
                </div>
                
                <div className="col-span-2 py-2 justify-self-end">
                <button className="bg-gray-200 text-gray-900 font-bold text-md rounded-full py-1 px-4"
                onClick={() => {alert("Working on it")}}
                >
                    Follow
                </button>
                </div>
                
            </content>
            
            
            </main>

            <main className="bg-slate-100 px-5 mb-4 border-2 border-slate-200 rounded-lg p-2">
            
            <content className="grid grid-cols-6">
                
                <div className="">
                <img src="https://picsum.photos/200/200" className="h-10 w-10 rounded-full" />
                </div>
                
                <div className="col-span-3 px-3 font-semibold flex flex-col"> 
                <div className=""> Sandy Budiman </div>
                <div className="text-sm text-gray-400 font-light"> @sandyversion </div>
                </div>
                
                <div className="col-span-2 py-2 justify-self-end">
                <button className="bg-gray-200 text-gray-900 font-bold text-md rounded-full py-1 px-4"
                onClick={() => {alert("Working on it")}}
                >
                    Follow
                </button>
                </div>
                
            </content>
            
            
            </main>

           
            
           
            
        </card>
        
        </div>
    </div>


  )
}

export default Following