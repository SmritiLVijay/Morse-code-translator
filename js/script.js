const codes = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    " ": ["\xa0\xa0\xa0\xa0\xa0","/"],
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----",
    ".": ".-.-.-",
    ",":"--..--",
    "?":"..--.."
    
 }
 
     function showOutput1() {      
       let text = document.getElementById("text-enter").value.toUpperCase();
       let ans ="";
       let coded ="";
       for (let i = 0; i < text.length; i++) {
        if(text[i]!=" "){
         coded = codes[text[i]];
        }if (text[i]==" "){
            coded = codes[text[i]][0];
        } if (coded!=undefined){
            ans +=coded + " ";
        }
        }
       
 
       document.getElementById("demo").innerHTML =  ans;
       
       
     }


     function showOutput2() {      
        let text = document.getElementById("text-enter").value.toUpperCase();
        let ans ="";
        let coded ="";
        for (let i = 0; i < text.length; i++) {
         if(text[i]!=" "){
          coded = codes[text[i]];
         }if (text[i]==" "){
             coded = codes[text[i]][1];
         } if (coded!=undefined){
             ans +=coded + " ";
         }
         }
        
  
        document.getElementById("demo").innerHTML =  ans;
        
        
      }
 
     function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
      }
      

     class Node{
     
        constructor(data){
            this.data = data
            this.rcount = 0
            this.lcount = 0
            this.left = null
            this.right = null
        }
    }

    function isPBT(count){

        count = count + 1
        while (count % 2 == 0)
            count = count / 2

        if (count == 1)
            return true
        else
            return false
        }

        function insert(root, data){

            
            if (!root){
                let n = new Node(data)
                return n
            }

            if (root.rcount == root.lcount){
                root.left = insert(root.left, data)
                root.lcount += 1
            }

            else if (root.rcount < root.lcount){

                if (isPBT(root.lcount)){
                    root.right = insert(root.right, data)
                    root.rcount += 1
                }
                else{
                    root.left = insert(root.left, data)
                    root.lcount += 1
                }
            }

            return root
            }

            
            function inorder(root){

                if(root){
                    inorder(root.left)
                    //document.write(root.data," ")
                    inorder(root.right)
                }
            }

            

            let arr = ['START','T','E','M','N','A','I','O','G','K','D','W','R','U','S','ol','or','Q','Z','Y','C','X','B','J','P','rl','L','ul','F','V','H','0','9','buffer','8','buffer','buffer','buffer','7','buffer','buffer','buffer','buffer','buffer','buffer','buffer','6','1','buffer','buffer','buffer','buffer','buffer','buffer','buffer','2','buffer','buffer','buffer','3','buffer','4','5']
            let size = arr.length
            let root = null

          
            for(let i=0;i<size;i++)
                root = insert(root, arr[i])
                
            inorder(root)
            
            
            
            
            function Decode(){
                out = ""
                sub = ""
                x = 0
               let morse =  document.getElementById("morse-enter").value.toUpperCase()+" ";
               for(let i=0;i<morse.length;i++){

                    if(morse[i]==" "){
                        if(morse[i-1]==" "){
                            out+= " ";
                            i = i+5;
                            x = i+1;
                        }if(morse[i-1]=="/"){
                            out+=" ";
                            x = i+1;
                        }else{
                        sub = morse.substring(x,i);
                        if(getKeyByValue(codes,sub)!= undefined){
                        out += getKeyByValue(codes,sub);
                        document.getElementById("demo").innerHTML = out;
                        }
                        x = i+1;
                        }
                    }
               }
            }


            document.addEventListener('keydown', (event) => {
                let name = event.keyCode;
                //var code = event.code;
                if(name==190){
                    document.getElementById("dit").click();
                }if(name==189){
                    document.getElementById("dah").click();
                }if(name==191){
                    document.getElementById("slash").click();
                }if(name==32){
                    document.getElementById("space").click();
                }if(name==8){
                    document.getElementById("backspace").click();
                }
                
              }, false);
        let temp = root;
        let out = '';
        let prev = root;
        

        function Right(){
            prev = root;
            if (root.right.data!='buffer' && root.right.data!=root.right.data.toLowerCase()){
                document.getElementById("demo").innerHTML = root.right.data;
            }else if(!isNaN(root.right.data * 1)){
                document.getElementById("demo").innerHTML = root.right.data;
            }
            
            return root.right;
   }

   function Left(){
            prev = root;
            if (root.left.data!='buffer' && root.left.data!=root.left.data.toLowerCase()){
                document.getElementById("demo").innerHTML = root.left.data;
            }else if(!isNaN(root.left.data * 1)){
                document.getElementById("demo").innerHTML = root.left.data;
            }
            return root.left;
   }

   function Space(){
            prev = root;
            out = out +' ';
            root = temp
            document.getElementById("demo").innerHTML = root.data;
            document.getElementById("output").innerHTML = out;
            return root;
   }

   function Reset(){
            prev = root;
            ans = root.data;
            if (ans!='START' && ans!='buffer' && ans!=ans.toLowerCase()){
            out +=ans;
            }else if(!isNaN(ans * 1)){
                out +=ans;
            }
            root = temp;
            document.getElementById("demo").innerHTML = root.data;
            document.getElementById("output").innerHTML = out;
            return root;
   }

   

   function Back(){
    prev = root;
    out = out.slice(0, -1);
    root = temp;
    document.getElementById("demo").innerHTML =root.data;
    document.getElementById("output").innerHTML = out;
    return root;
   }

   function highLight(){
    document.getElementById(root.data).style.color="#FFC107";
    document.getElementById(prev.data).style.color="#D9D9D9";
   }


document.querySelector('#dit').addEventListener('click', function(){ root=Right(); highLight()});
document.querySelector('#dah').addEventListener('click', function(){ root=Left(); highLight() });
document.querySelector('#space').addEventListener('click', function(){ root=Reset() ;highLight()});
document.querySelector('#slash').addEventListener('click', function(){ root=Space() ;highLight()});
document.querySelector('#backspace').addEventListener('click', function(){ root=Back();highLight() });



              
        
        