
# Toastwind!

  

Toastwind is tiny library to show toast on your website.

  

**1. Installation** <br> 

    npm i toastwind

  
  <br>

**2. Import Project** <br> 

    import Toast from "toastwind"
    import "toastwind/dist/style.css"

  <br>
  
**3. Usage**  <br>


    Toast.show("Success, Data saved!")

  <br>  

**4. Option**<br>
you can customize toast using option parameter

    Toast.show("Error, Data not found",
    {
	    timeout : 3000,
	    status : 'error', // success | error
	    position : 'top right', // top | bottom | left | right
	    darkMode : false // true | false
    })

  <br>
  
**5. Demo** <br>
Live Demo: <a href="https://codepen.io/alanshalih/pen/mdXzXjZ" target="_blank">Codepen</a> 

<br>

**6. CDN Usage** <br>
    
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/toastwind/dist/style.css">
        <script src="https://cdn.jsdelivr.net/npm/toastwind"></script>
        
        <script>
            Toast.show("Success, Data saved!")
        </script>
        

