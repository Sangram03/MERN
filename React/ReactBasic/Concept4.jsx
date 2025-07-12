const Concept3 = () =>{

    const [username, setUsername] = useState('')

    const submitHandler =(e)=>{
        console.log({username});
        e.preventDefault();

        setUsername('')
        
    }


    return(
        <div>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}>
                <input
                onChange={
                    ()=>{
                    setUsername(e.targat.value);
                    
                }}
                // value={username} it gives bydefault uservalue
                className="px-4 rounded py-3 text-xl m-5" 
                type="text"
                placeholder="Enter Your Name" />
                <button onSubmit={submitHandler} className="px-4 py-6 m-5 text-xl font-semibold bg-emerald-500 rounded">Submit</button>
            </form>
        </div>
    )
}

export default Concept3;