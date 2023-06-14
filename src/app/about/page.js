import About from "@/app/about/about";

async function requestGithubUser(){
    try{
        const res = await fetch(`http://127.0.0.1:8080/api/student`)
        console.log("执行fetch函数")
        return res.json();
    }catch (err){
        console.log(err)
    }
}

export default async function Page() {
    const data = await requestGithubUser()


    return (
        <>
            <About data={data}/>
        </>
    )
}


export  {requestGithubUser};


