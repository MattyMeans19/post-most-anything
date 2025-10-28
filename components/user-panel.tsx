
interface PanelProps {
    creator: string
}

export default function UserPanel(props: PanelProps){
    return(
            <div className="h-[50vh] basis-1/3 place-items-center place-content-center ml-25 bg-white border-3 rounded-3xl">
                <h1>{props.creator}</h1>
                <p>FName LName</p>
            </div>
    )
}