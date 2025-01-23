export default function page(){
    return(
        <div>
            <h1>
                Student Page
            </h1>
        </div>
    )
}

export function generateMetadata({params}){
    return{
        title: "Student Page",
        description: "This is the student page"
    }
}