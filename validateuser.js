//define function to validate user credentials
function validateuser()
{
    const user=document.getElementById("uname").value;
    const password=document.getElementById("upass").value;

    if(user == "sivaram" && password == "prasad")
    {
        alert("Welcome admin...")
    }
    else
    {
        alert("Invalid user!!!sign in with different credentials")
        
    }

}
