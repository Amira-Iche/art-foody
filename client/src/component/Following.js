import React from 'react'

function Following() {
  return (

    <div>
        <div class=" mt-4 items-center justify-center flex">
        
        <card class=" text-gray-500 w-96 ">
            
            <header class="font-bold text-2xl px-5 py-4">
            Who to follow
            </header>
      {/* //// followers list */}
            <main class=" bg-slate-100  px-5 mb-4 border-2 border-slate-200 rounded-lg p-2">
            
            <content class="grid grid-cols-6">
                
                <div class="">
                <img src="https://picsum.photos/200/200" class=" h-10 w-10 rounded-full" />
                </div>
                
                <div class="col-span-3 px-3 font-semibold flex flex-col"> 
                <div class=""> Sandy Budiman </div>
                <div class="text-sm text-gray-400 font-light"> @sandyversion </div>
                </div>
                
                <div class="col-span-2 py-2 justify-self-end">
                <button class="bg-gray-200 text-gray-900 font-bold text-md rounded-full py-1 px-4">
                    Follow
                </button>
                </div>
                
            </content>
            
            
            </main>
            
            <main class=" bg-slate-100 px-5 mb-4 border-2 border-slate-200 rounded-lg p-2">
            
            <content class="grid grid-cols-6">
                
                <div class="">
                <img src="https://picsum.photos/200/200" class="h-10 w-10 rounded-full" />
                </div>
                
                <div class="col-span-3 px-3 font-semibold flex flex-col"> 
                <div class=""> Sandy Budiman </div>
                <div class="text-sm text-gray-400 font-light"> @sandyversion </div>
                </div>
                
                <div class="col-span-2 py-2 justify-self-end">
                <button class="bg-gray-200 text-gray-900 font-bold text-md rounded-full py-1 px-4">
                    Follow
                </button>
                </div>
                
            </content>
            
            
            </main>

            <main class="bg-slate-100 px-5 mb-4 border-2 border-slate-200 rounded-lg p-2">
            
            <content class="grid grid-cols-6">
                
                <div class="">
                <img src="https://picsum.photos/200/200" class="h-10 w-10 rounded-full" />
                </div>
                
                <div class="col-span-3 px-3 font-semibold flex flex-col"> 
                <div class=""> Sandy Budiman </div>
                <div class="text-sm text-gray-400 font-light"> @sandyversion </div>
                </div>
                
                <div class="col-span-2 py-2 justify-self-end">
                <button class="bg-gray-200 text-gray-900 font-bold text-md rounded-full py-1 px-4">
                    Follow
                </button>
                </div>
                
            </content>
            
            
            </main>

            <main class=" bg-slate-100 px-5 mb-4 border-2 border-slate-200 rounded-lg p-2">
            
            <content class="grid grid-cols-6">
                
                <div class="">
                <img src="https://picsum.photos/200/200" class="h-10 w-10 rounded-full" />
                </div>
                
                <div class="col-span-3 px-3 font-semibold flex flex-col"> 
                <div class=""> Sandy Budiman </div>
                <div class="text-sm text-gray-400 font-light"> @sandyversion </div>
                </div>
                
                <div class="col-span-2 py-2 justify-self-end">
                <button class="bg-gray-200 text-gray-900 font-bold text-md rounded-full py-1 px-4">
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