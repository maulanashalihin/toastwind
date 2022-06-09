<script>
  let visible = false;
  
  let message = "Congratulation";

  let defaultOption = {
    timeout : 3000,
    status : 'success',
    position : 'top right',
    darkMode : false
  }

  let positionClass = 'right-5 top-5'

  let timeout;

  export function show(text = "Congratulation",option){
    
    if(option && typeof option == 'object')
    {
      Object.keys(option).forEach(key=>{
        defaultOption[key] = option[key]
      })
    }
    

    
    positionClass = '';

    const arrayPosition = defaultOption.position.split(" ")

    arrayPosition.forEach(item=>{
      switch(item) {
        case 'right':
          positionClass+=' right-5 '
          // code block
          break;
        case 'left':
          positionClass+=' left-5 '
          // code block
          break;
        case 'bottom':
          positionClass+=' bottom-5 '
          // code block
          break;
        case 'top':
          positionClass+=' top-5 '
          // code block
          break;
        default:
          // code block
      }
    })
    
 
    visible = true;
    
    message = text;
    
    if(timeout)
    clearTimeout(timeout)

    timeout = setTimeout(()=>{
      visible = false;
    },defaultOption.timeout)
  }
</script>
{#if visible}
<div class="{defaultOption.darkMode == false || 'dark'}">

  <div id="toast-success" class="absolute {positionClass} flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
    {#if defaultOption.status == 'error'}
    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </div>
    {:else}
      <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
    </div>
    {/if}
   
   
    <div class="ml-3 text-sm font-normal">  {message}.</div>
    <button type="button" on:click="{()=>{visible = false}}" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
</div>
</div>
{/if}
 