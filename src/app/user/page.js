export default function page(){
    return(
        <div>
            <h1>User Page</h1>
        </div>
    );
}


export function generateMetadata({params}){
    return {
        title: "User Page",
        description: "This is the user page"
    }
}